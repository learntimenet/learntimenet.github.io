import{C as e,S as t,t as n,x as r}from"./LoaderHider-BcLKHTej.js";import{t as i}from"./BlogArticlePage-B9vrGxc-.js";var a=e(),o=t(),s=r();(0,o.createRoot)(document.getElementById(`root`)).render((0,s.jsx)(a.StrictMode,{children:(0,s.jsx)(n,{children:(0,s.jsx)(i,{article:{title:`Testing React Components with Testing Library`,description:`Test what users see, not how components are built. Set up Vitest and React Testing Library, find elements by role and label, simulate clicks and typing with user-event, test async data with findBy, mock fetch, and avoid the common mistakes.`,date:`2026-11-24`,urlPath:`/blog/essentials/testing-react-components/`,html:`<p>A good component test does what a user does: it finds the button by its text, clicks it, and checks what appears on screen. It doesn&#39;t care which hooks or state variables the component uses. That way, you can rewrite a component&#39;s inside and the tests still pass, as long as it works the same for users. That&#39;s the idea behind <strong>React Testing Library</strong>.</p>
<h2 id="setup">Setup</h2>
<p>Most React projects today use <strong>Vitest</strong> with <strong>jsdom</strong>, a simulated browser:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#953800;--shiki-dark:#FFA657">npm</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> install</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> -D</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> vitest</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> jsdom</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> @testing-library/react</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> @testing-library/user-event</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> @testing-library/jest-dom</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>In <code>vite.config.ts</code>, add <code>test: { environment: &quot;jsdom&quot; }</code>, and import <code>@testing-library/jest-dom/vitest</code> in a setup file for matchers like <code>toBeInTheDocument</code>. Projects on Jest work the same way; only the setup differs.</p>
<p>Put tests next to the component: <code>Counter.tsx</code> and <code>Counter.test.tsx</code>.</p>
<h2 id="a-first-test">A First Test</h2>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">import</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> { render, screen } </span><span style="color:#CF222E;--shiki-dark:#FF7B72">from</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> "@testing-library/react"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">;</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">import</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> userEvent </span><span style="color:#CF222E;--shiki-dark:#FF7B72">from</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> "@testing-library/user-event"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">;</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">import</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> { Counter } </span><span style="color:#CF222E;--shiki-dark:#FF7B72">from</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> "./Counter"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8250DF;--shiki-dark:#D2A8FF">describe</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"Counter"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, () </span><span style="color:#CF222E;--shiki-dark:#FF7B72">=></span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#8250DF;--shiki-dark:#D2A8FF">  it</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"counts clicks"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, </span><span style="color:#CF222E;--shiki-dark:#FF7B72">async</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> () </span><span style="color:#CF222E;--shiki-dark:#FF7B72">=></span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    const</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> user</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> =</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> userEvent.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">setup</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">();</span></span>
<span class="line"><span style="color:#8250DF;--shiki-dark:#D2A8FF">    render</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(&#x3C;</span><span style="color:#116329;--shiki-dark:#7EE787">Counter</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> />);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    await</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> user.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">click</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(screen.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">getByRole</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"button"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, { name: </span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"Add one"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> }));</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    await</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> user.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">click</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(screen.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">getByRole</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"button"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, { name: </span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"Add one"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> }));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8250DF;--shiki-dark:#D2A8FF">    expect</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(screen.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">getByText</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"Clicked 2 times"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">)).</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">toBeInTheDocument</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">();</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">  });</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">});</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><ul>
<li><code>render</code> puts the component in the simulated page.</li>
<li><code>screen</code> searches the whole page.</li>
<li><code>userEvent</code> simulates a real user: a click includes the mouse moving, pressing and releasing, and focus changes.</li>
</ul>
<h2 id="finding-elements-use-roles-first">Finding Elements: Use Roles First</h2>
<p>Query the way users and assistive technology find things. In order of preference:</p>
<div data-table-scroll><table>
<thead>
<tr>
<th>Query</th>
<th>Finds</th>
<th>Example</th>
</tr>
</thead>
<tbody><tr>
<td><code>getByRole</code></td>
<td>Buttons, links, headings, inputs…</td>
<td><code>getByRole(&quot;button&quot;, { name: &quot;Save&quot; })</code></td>
</tr>
<tr>
<td><code>getByLabelText</code></td>
<td>Form fields by their label</td>
<td><code>getByLabelText(&quot;Email&quot;)</code></td>
</tr>
<tr>
<td><code>getByText</code></td>
<td>Text content</td>
<td><code>getByText(&quot;Clicked 2 times&quot;)</code></td>
</tr>
<tr>
<td><code>getByAltText</code></td>
<td>Images</td>
<td><code>getByAltText(&quot;Company logo&quot;)</code></td>
</tr>
<tr>
<td><code>getByTestId</code></td>
<td><code>data-testid</code>, a last resort</td>
<td><code>getByTestId(&quot;chart&quot;)</code></td>
</tr>
</tbody></table>
</div>
<p>If <code>getByRole(&quot;button&quot;, { name: &quot;Save&quot; })</code> can&#39;t find your button, often a screen reader can&#39;t either. Your tests double as an accessibility check.</p>
<h3 id="get-query-and-find">get, query and find</h3>
<div data-table-scroll><table>
<thead>
<tr>
<th>Prefix</th>
<th>When nothing matches</th>
<th>Use for</th>
</tr>
</thead>
<tbody><tr>
<td><code>getBy</code></td>
<td>Throws</td>
<td>Elements that should be there now</td>
</tr>
<tr>
<td><code>queryBy</code></td>
<td>Returns <code>null</code></td>
<td>Checking something is <strong>not</strong> there</td>
</tr>
<tr>
<td><code>findBy</code></td>
<td>Waits, then throws</td>
<td>Elements that appear <strong>later</strong> (async)</td>
</tr>
</tbody></table>
</div>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#8250DF;--shiki-dark:#D2A8FF">expect</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(screen.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">queryByText</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"Loading…"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">)).not.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">toBeInTheDocument</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">();</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><h2 id="forms-and-typing">Forms and Typing</h2>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#8250DF;--shiki-dark:#D2A8FF">it</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"sends what the user typed"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, </span><span style="color:#CF222E;--shiki-dark:#FF7B72">async</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> () </span><span style="color:#CF222E;--shiki-dark:#FF7B72">=></span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">  const</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> user</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> =</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> userEvent.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">setup</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">();</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">  const</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> onSearch</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> =</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> vi.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">fn</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">();</span></span>
<span class="line"><span style="color:#8250DF;--shiki-dark:#D2A8FF">  render</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(&#x3C;</span><span style="color:#116329;--shiki-dark:#7EE787">SearchBox</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> onSearch</span><span style="color:#CF222E;--shiki-dark:#FF7B72">={</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">onSearch</span><span style="color:#CF222E;--shiki-dark:#FF7B72">}</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> />);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">  await</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> user.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">type</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(screen.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">getByLabelText</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"Search"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">), </span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"react hooks"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">);</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">  await</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> user.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">click</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(screen.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">getByRole</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"button"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, { name: </span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"Go"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> }));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8250DF;--shiki-dark:#D2A8FF">  expect</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(onSearch).</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">toHaveBeenCalledWith</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"react hooks"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">);</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">});</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p><code>vi.fn()</code> creates a <strong>mock function</strong> that records its calls, to check what the component reported to its parent.</p>
<h2 id="async-data">Async Data</h2>
<p>For data that loads, replace <code>fetch</code> with a fake, and wait with <code>findBy</code>:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#8250DF;--shiki-dark:#D2A8FF">it</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"shows the user once loaded"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, </span><span style="color:#CF222E;--shiki-dark:#FF7B72">async</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> () </span><span style="color:#CF222E;--shiki-dark:#FF7B72">=></span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">  vi.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">stubGlobal</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span></span>
<span class="line"><span style="color:#0A3069;--shiki-dark:#A5D6FF">    "fetch"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">,</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    vi.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">fn</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">().</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">mockResolvedValue</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">({ </span><span style="color:#8250DF;--shiki-dark:#D2A8FF">json</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">: </span><span style="color:#CF222E;--shiki-dark:#FF7B72">async</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> () </span><span style="color:#CF222E;--shiki-dark:#FF7B72">=></span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> ({ name: </span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"Ana"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> }) }),</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">  );</span></span>
<span class="line"><span style="color:#8250DF;--shiki-dark:#D2A8FF">  render</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(&#x3C;</span><span style="color:#116329;--shiki-dark:#7EE787">UserName</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> id</span><span style="color:#CF222E;--shiki-dark:#FF7B72">={</span><span style="color:#0550AE;--shiki-dark:#79C0FF">1</span><span style="color:#CF222E;--shiki-dark:#FF7B72">}</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> />);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8250DF;--shiki-dark:#D2A8FF">  expect</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(screen.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">getByText</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"Loading…"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">)).</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">toBeInTheDocument</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">();</span></span>
<span class="line"><span style="color:#8250DF;--shiki-dark:#D2A8FF">  expect</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#CF222E;--shiki-dark:#FF7B72">await</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> screen.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">findByText</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"Ana"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">)).</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">toBeInTheDocument</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">();</span></span>
<span class="line"><span style="color:#8250DF;--shiki-dark:#D2A8FF">  expect</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(fetch).</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">toHaveBeenCalledWith</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"/api/users/1"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">);</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">});</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>Call <code>vi.unstubAllGlobals()</code> in <code>afterEach</code> so the fake doesn&#39;t leak into other tests. For apps with many API calls, <strong>Mock Service Worker</strong> (MSW) fakes the API at the network level, so your real fetching code runs unchanged.</p>
<h2 id="what-to-test">What to Test</h2>
<ul>
<li><strong>What users see and do:</strong> text, buttons, form errors, what happens after a click.</li>
<li><strong>Edge cases:</strong> empty lists, loading, errors, long text, a disabled button.</li>
<li><strong>Accessibility:</strong> with <code>jest-axe</code>, <code>expect(await axe(container)).toHaveNoViolations()</code> catches missing labels and similar issues.</li>
</ul>
<p>Pure logic, like a price calculation, is easier to test as a plain function, without rendering anything.</p>
<h2 id="common-mistakes">Common Mistakes</h2>
<ul>
<li><strong>Testing implementation details:</strong> checking state values, hook calls or CSS classes. The test breaks on refactors that change nothing for users.</li>
<li><strong>Forgetting <code>await</code></strong> on <code>user</code> actions and <code>findBy</code> queries: the test checks before the update happens.</li>
<li><strong><code>getBy</code> for things that should be absent:</strong> it throws. Use <code>queryBy</code>.</li>
<li><strong>Snapshot tests of whole pages:</strong> they fail on every small change and get updated without being read.</li>
<li><strong>One giant test:</strong> test one behavior per test, with a name that says which.</li>
</ul>
<h2 id="the-answer-in-short">The Answer in Short</h2>
<ol>
<li>Test what users see and do, not how the component works inside.</li>
<li>Find elements with <code>getByRole</code> and <code>getByLabelText</code> first; <code>data-testid</code> is a last resort.</li>
<li>Simulate users with <code>userEvent</code>, and always <code>await</code> its actions.</li>
<li>Use <code>getBy</code> for present elements, <code>queryBy</code> for absent ones, and <code>findBy</code> for ones that appear later.</li>
<li>Fake <code>fetch</code> with <code>vi.stubGlobal</code> or MSW, and check accessibility with <code>jest-axe</code>.</li>
</ol>
`,headings:[{id:`setup`,text:`Setup`},{id:`a-first-test`,text:`A First Test`},{id:`finding-elements-use-roles-first`,text:`Finding Elements: Use Roles First`},{id:`forms-and-typing`,text:`Forms and Typing`},{id:`async-data`,text:`Async Data`},{id:`what-to-test`,text:`What to Test`},{id:`common-mistakes`,text:`Common Mistakes`},{id:`the-answer-in-short`,text:`The Answer in Short`}],parents:[],related:[{title:`The CAP Theorem and Consistency Models, Explained`,description:`What the CAP theorem really says, why "pick two of three" is misleading, and the consistency models you'll actually choose between, from strong consistency to eventual consistency, with PACELC.`,date:`2026-11-24`,urlPath:`/blog/essentials/cap-theorem-and-consistency-models/`},{title:`The DOM Explained: Select, Change and Listen`,description:`How JavaScript changes a web page. What the DOM is, selecting elements with querySelector, changing text, classes and attributes, creating and removing elements, listening to events, event delegation, forms, and why React exists.`,date:`2026-11-24`,urlPath:`/blog/essentials/the-dom-explained/`},{title:`TypeScript for React: Props, State and Events`,description:`Type your React components so mistakes show up in the editor. Typing props with optional values and unions, children, useState with null, event handlers, extending HTML element props, and modeling loading states with discriminated unions.`,date:`2026-11-24`,urlPath:`/blog/essentials/typescript-for-react/`},{title:`useEffect Explained, and When You Don't Need It`,description:`What useEffect is for in React, and what it isn't for. Syncing with the outside world, the dependency array, cleanup functions, why effects run twice in development, and the common effects you should replace with plain code.`,date:`2026-11-24`,urlPath:`/blog/essentials/react-useeffect-explained/`}],relatedPages:[{title:`React Quiz`,description:`Test your React skills: components, props, state, hooks, effects, keys, and how rendering works.`,urlPath:`/quiz/react/`},{title:`Senior React developer interview questions`,description:`Practice the questions asked to a senior React developer: rendering and re-renders, hooks and effects, state and data fetching, performance and the React Compiler, Suspense and React 19, Server Components and streaming, TypeScript, accessibility and testing.`,urlPath:`/interview/senior-react-developer/`},{title:`Unit Testing in Java With JUnit: A Beginner's Guide`,description:`Set up JUnit with Maven and write your first Java unit tests. Assertions, testing exceptions, @BeforeEach, parameterized tests, reading a failure and what makes a good test.`,urlPath:`/blog/essentials/unit-testing-java-with-junit/`}]}})})}));