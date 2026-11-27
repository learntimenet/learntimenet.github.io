import{C as e,S as t,t as n,x as r}from"./LoaderHider-BI9PdNvU.js";import{t as i}from"./BlogArticlePage-DWPwmkv6.js";var a=e(),o=t(),s=r();(0,o.createRoot)(document.getElementById(`root`)).render((0,s.jsx)(a.StrictMode,{children:(0,s.jsx)(n,{children:(0,s.jsx)(i,{article:{title:`GitHub's Agent Host Protocol: Agent Sessions That Follow You Across Devices`,description:`Start a coding agent in your editor, check on it from your phone, approve its next step from the browser. How GitHub and Microsoft's open Agent Host Protocol does it, by moving the session out of the editor into a host that many clients attach to.`,date:`2026-11-27`,urlPath:`/blog/system-design/github-agent-host-protocol/`,html:`<p>AI coding agents can work for minutes or hours on a task. But if the agent lives inside your editor window, closing the laptop stops it, and you can&#39;t check on it from anywhere else. In November 2026, GitHub&#39;s engineering blog described the <strong>Agent Host Protocol (AHP)</strong>, an open protocol built with Microsoft so an agent session keeps running and can be followed from your editor, the Copilot app, your phone or the cloud.</p>
<h2 id="the-problem-the-session-lives-in-one-window">The Problem: The Session Lives in One Window</h2>
<p>In most early agent tools, the conversation, the plan, the pending tool calls and the agent&#39;s progress all live in the client: the editor tab or the chat window. That makes three things hard:</p>
<ul>
<li><strong>Continuity</strong>: close the window and the session stops.</li>
<li><strong>Several screens</strong>: you can&#39;t watch the same session from your phone and your laptop.</li>
<li><strong>Approvals</strong>: if the agent needs permission to run a command, you have to be at that exact window.</li>
</ul>
<h2 id="the-idea-a-host-that-owns-the-session">The Idea: A Host That Owns the Session</h2>
<p>AHP separates the <strong>host</strong>, which owns the session state, from the <strong>clients</strong>, which show it:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span>          ┌──────────── Agent host ────────────┐</span></span>
<span class="line"><span>          │ session state: messages, plan,      │</span></span>
<span class="line"><span>          │ tool calls waiting for approval     │</span></span>
<span class="line"><span>          └──────┬──────────────┬───────────────┘</span></span>
<span class="line"><span>                 │              │              │</span></span>
<span class="line"><span>             VS Code      Copilot app      phone / web</span></span>
<span class="line"><span>           (watch, chat)  (approve call)   (cancel)</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>According to the protocol&#39;s description, clients <strong>attach</strong> to a session to observe progress, approve tool calls, or cancel work. Every attached client sees the same, synchronized state. The protocol covers how clients and the host talk, not how the agent reasons or which tools it uses.</p>
<h2 id="how-synchronized-state-works">How Synchronized State Works</h2>
<p>Keeping several clients in sync is a classic distributed systems problem. The usual pattern, which fits AHP&#39;s &quot;multi-client state&quot; description:</p>
<ol>
<li>The host keeps the <strong>single source of truth</strong> for the session.</li>
<li>A client that attaches gets a <strong>snapshot</strong> of the current state.</li>
<li>After that, the host sends <strong>events</strong> as things change: a new message, a tool call waiting, a step finished.</li>
<li>A client that disconnects <strong>reattaches</strong> and catches up, from a new snapshot or from the events it missed.</li>
<li>Actions, like approving a tool call, go <strong>to the host</strong>, which decides and tells every client.</li>
</ol>
<p>Because the host decides, two clients approving and cancelling at the same moment can&#39;t leave the session in two different states.</p>
<h2 id="what-github-reported">What GitHub Reported</h2>
<ul>
<li>AHP was built first in VS Code and adopted across GitHub; it runs in <strong>VS Code, the GitHub Copilot app and cloud sandboxes</strong>.</li>
<li>There are <strong>two independent hosts</strong>: VS Code&#39;s, written in TypeScript, and GitHub&#39;s cloud host, written in Rust.</li>
<li>Client libraries exist for <strong>TypeScript, Kotlin, Go and Swift</strong>, and the specification is public in the <a href="https://github.com/microsoft/agent-host-protocol">microsoft/agent-host-protocol</a> repository.</li>
</ul>
<p>Two hosts in two languages is a good sign for a protocol: it shows the spec, not one codebase, defines the behavior.</p>
<h2 id="why-it-matters-beyond-copilot">Why It Matters Beyond Copilot</h2>
<p>The same split, a long-running process that owns the state and thin clients that attach to it, shows up wherever work outlives a screen:</p>
<div data-table-scroll><table>
<thead>
<tr>
<th>System</th>
<th>The &quot;host&quot;</th>
<th>The clients</th>
</tr>
</thead>
<tbody><tr>
<td><code>tmux</code> / <code>screen</code></td>
<td>The terminal session</td>
<td>Any terminal that attaches</td>
</tr>
<tr>
<td>Google Docs</td>
<td>The document server</td>
<td>Every open tab</td>
</tr>
<tr>
<td>CI pipelines</td>
<td>The build server</td>
<td>Web UI, CLI, chat bots</td>
</tr>
<tr>
<td>AI agents with AHP</td>
<td>The agent host</td>
<td>Editor, app, phone, cloud</td>
</tr>
</tbody></table>
</div>
<h2 id="what-to-take-away">What to Take Away</h2>
<ol>
<li>Agents that live in one window stop when it closes and can&#39;t be followed elsewhere.</li>
<li>AHP moves the session into a host; editors, apps and phones attach to it as clients.</li>
<li>The host is the single source of truth: clients get a snapshot, then events, and send actions back.</li>
<li>The protocol defines the client-host conversation, not the agent&#39;s reasoning.</li>
<li>Two independent hosts and several client libraries show it&#39;s a real, open protocol.</li>
</ol>
<h2 id="source">Source</h2>
<p>Based on <a href="https://github.blog/engineering/engineering-principles/building-the-agent-host-protocol-for-sessions-that-continue-across-devices/">Building the Agent Host Protocol for sessions that continue across devices</a>, The GitHub Blog, November 2026. The explanations here are our own.</p>
`,headings:[{id:`the-problem-the-session-lives-in-one-window`,text:`The Problem: The Session Lives in One Window`},{id:`the-idea-a-host-that-owns-the-session`,text:`The Idea: A Host That Owns the Session`},{id:`how-synchronized-state-works`,text:`How Synchronized State Works`},{id:`what-github-reported`,text:`What GitHub Reported`},{id:`why-it-matters-beyond-copilot`,text:`Why It Matters Beyond Copilot`},{id:`what-to-take-away`,text:`What to Take Away`},{id:`source`,text:`Source`}],parents:[],related:[{title:`Uber's Shard Manager: Balance the Load, Not the Shard Count`,description:`Giving every server the same number of shards doesn't give them the same load. How consistent hashing falls short, what a shard manager does instead, and how Uber's open-source Shard Manager cut its hottest hosts' CPU and its fleet size.`,date:`2026-11-27`,urlPath:`/blog/system-design/uber-shard-manager/`},{title:`Design a Notification System`,description:`Send push, email and SMS notifications for every service in a company, reliably and without spamming users. Queues per channel, retries without duplicates, user preferences, bursts of millions, and priorities.`,date:`2026-11-21`,urlPath:`/blog/system-design/notification-system/`},{title:`Design a URL Shortener`,description:`Turn long links into short codes and redirect millions of clicks a day, fast. Generate unique codes without collisions, cache the hot links, count clicks without slowing redirects, and choose between 301 and 302.`,date:`2026-11-21`,urlPath:`/blog/system-design/url-shortener/`},{title:`Design a News Feed`,description:`Show each user the latest posts from the people they follow, in milliseconds, for 200 million users. Fan-out on write vs fan-out on read, the celebrity problem, feed caches in Redis, ranking and pagination.`,date:`2026-11-20`,urlPath:`/blog/system-design/news-feed/`}],relatedPages:[{title:`System design interview questions`,description:`Practice system design interview questions: a payment system, a rate limiter, notifications, a URL shortener, a chat application, and an e-commerce checkout.`,urlPath:`/interview/system-design/`},{title:`TypeScript Quiz`,description:`Practice TypeScript types: unions, narrowing, generics, utility types, and the difference between any and unknown.`,urlPath:`/quiz/typescript/`}]}})})}));