import{C as e,S as t,t as n,x as r}from"./LoaderHider-C1Z7ldQE.js";import{t as i}from"./BlogArticlePage-CqnXwq4H.js";var a=e(),o=t(),s=r();(0,o.createRoot)(document.getElementById(`root`)).render((0,s.jsx)(a.StrictMode,{children:(0,s.jsx)(n,{children:(0,s.jsx)(i,{article:{title:`How Meta Runs Android's Cuttlefish Emulator Natively on Apple Silicon Macs`,description:`Cuttlefish, Android's high-fidelity virtual device, only ran on Linux, while most app developers use Macs. What Cuttlefish is, how virtual devices run on QEMU with KVM or Apple's Hypervisor framework, and what Meta changed to bring it to macOS.`,date:`2026-11-27`,urlPath:`/blog/big-tech/meta-cuttlefish-on-mac/`,html:`<p>Android developers test on virtual devices all day. Most use the Android Emulator, but Android&#39;s own platform teams also use <strong>Cuttlefish</strong>, a virtual device that behaves much more like a real phone. The catch: Cuttlefish only ran on Linux, while many app developers, including Meta&#39;s, work on Apple Silicon Macs. In November 2026, Meta&#39;s engineering blog described how its Reality Labs teams ported Cuttlefish to macOS.</p>
<h2 id="two-kinds-of-android-virtual-devices">Two Kinds of Android Virtual Devices</h2>
<div data-table-scroll><table>
<thead>
<tr>
<th>Virtual device</th>
<th>Made for</th>
<th>Strength</th>
</tr>
</thead>
<tbody><tr>
<td>Android Emulator (Goldfish)</td>
<td>App developers</td>
<td>Fast, easy, runs on Mac, Windows, Linux</td>
</tr>
<tr>
<td>Cuttlefish</td>
<td>Platform and device teams</td>
<td>Close to real hardware, scriptable, runs many devices on servers</td>
</tr>
</tbody></table>
</div>
<p>Using both means two sets of tools, scripts and bugs that appear on one and not the other. Meta wanted the high-fidelity device on the machines its developers actually use.</p>
<h2 id="how-a-virtual-device-runs">How a Virtual Device Runs</h2>
<p>Cuttlefish runs Android inside <strong>QEMU</strong>, a machine emulator, with help from the operating system&#39;s <strong>hypervisor</strong> so the guest&#39;s code runs directly on the CPU instead of being slowly translated:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span>Android (guest) ── virtual devices: disk, network, display, input</span></span>
<span class="line"><span>       │</span></span>
<span class="line"><span>     QEMU ── device backends (vhost-user)</span></span>
<span class="line"><span>       │</span></span>
<span class="line"><span>  Hypervisor ── KVM on Linux, Hypervisor.framework (HVF) on macOS</span></span>
<span class="line"><span>       │</span></span>
<span class="line"><span>   Hardware ── ARM CPU on Apple Silicon</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>Apple Silicon Macs have ARM CPUs, like most phones, so an ARM Android guest can run at near-native speed through Apple&#39;s Hypervisor.framework, the macOS counterpart to Linux&#39;s KVM.</p>
<p><strong>vhost-user</strong> is a way to run a virtual device&#39;s backend, like the network or disk, in a separate process that shares memory with QEMU, instead of inside QEMU itself. Cuttlefish relies on it.</p>
<h2 id="what-broke-on-macos">What Broke on macOS</h2>
<p>According to Meta&#39;s post, three assumptions didn&#39;t hold on a Mac:</p>
<ol>
<li><strong>vhost-user was Linux-only</strong> in the build, so the device backends couldn&#39;t hand off to QEMU.</li>
<li><strong>Apple&#39;s hypervisor has resource limits</strong> that QEMU didn&#39;t expect.</li>
<li><strong>The display, build and code signing paths</strong> for macOS didn&#39;t exist.</li>
</ol>
<h2 id="what-meta-changed">What Meta Changed</h2>
<ul>
<li>Relaxed the build restrictions so the <strong>vhost-user components build on macOS</strong>.</li>
<li>Ran QEMU with <strong>Hypervisor.framework instead of KVM</strong>.</li>
<li>Added <strong>BGRA pixel format</strong> support so the screen renders with the right colors.</li>
<li>Turned <strong>mouse clicks into touch input</strong>.</li>
<li>Built a <strong>native Cocoa display</strong>, the macOS window toolkit.</li>
<li>Set up macOS builds with the <strong>JIT entitlement</strong>, code signing and notarization, which macOS requires for apps that run code generated at run time.</li>
</ul>
<p>The result: Meta&#39;s developers run the same high-fidelity virtual device on their Macs, and Meta shares it with external developers building for its ecosystem.</p>
<h2 id="why-this-is-a-good-pattern">Why This Is a Good Pattern</h2>
<p>Porting a tool to where developers work, instead of asking them to change machines, pays off when:</p>
<ul>
<li>The <strong>gap between test and real devices</strong> causes bugs that only appear late.</li>
<li>Two tools for the same job mean <strong>double maintenance</strong>.</li>
<li>The platforms are <strong>close enough</strong>, here ARM on ARM, that the port runs fast.</li>
</ul>
<h2 id="what-to-take-away">What to Take Away</h2>
<ol>
<li>Cuttlefish is Android&#39;s high-fidelity virtual device; until now it needed Linux.</li>
<li>Virtual devices run in QEMU, accelerated by KVM on Linux or Hypervisor.framework on macOS.</li>
<li>Apple Silicon and Android phones share the ARM architecture, so the guest runs at near-native speed.</li>
<li>Meta&#39;s port needed vhost-user on macOS, hypervisor limits handled, a native display, touch input, and signing.</li>
<li>One faithful virtual device everywhere beats two tools that behave differently.</li>
</ol>
<h2 id="source">Source</h2>
<p>Based on <a href="https://engineering.fb.com/2026/11/13/android/cuttlefish-on-mac/">Cuttlefish on Mac: Running Android&#39;s Virtual Device Framework Natively on Apple Silicon</a>, Engineering at Meta, November 2026. The explanations here are our own.</p>
`,headings:[{id:`two-kinds-of-android-virtual-devices`,text:`Two Kinds of Android Virtual Devices`},{id:`how-a-virtual-device-runs`,text:`How a Virtual Device Runs`},{id:`what-broke-on-macos`,text:`What Broke on macOS`},{id:`what-meta-changed`,text:`What Meta Changed`},{id:`why-this-is-a-good-pattern`,text:`Why This Is a Good Pattern`},{id:`what-to-take-away`,text:`What to Take Away`},{id:`source`,text:`Source`}],parents:[],related:[{title:`How Uber Tests Thousands of AI Agent Skills, and What You Can Copy`,description:`Uber went from one AI agent skill to more than 5,000 in a year, used a million times a month. What an agent skill is, why skills need evals, how Uber measures and ranks them, and how to start evaluating your own prompts and skills.`,date:`2026-11-27`,urlPath:`/blog/big-tech/uber-agent-skills-evals/`},{title:`nginx2root: What the New nginx Flaws Teach About Protecting Your Origin`,description:`In November 2026, ten nginx vulnerabilities were disclosed, five of them memory corruption bugs called nginx2root. Why a proxy in front of nginx protects from some of them and not others, what "origin protection" means, and the checklist to secure your own servers.`,date:`2026-11-27`,urlPath:`/blog/big-tech/cloudflare-nginx2root/`},{title:`Uber's Shard Manager: Balance the Load, Not the Shard Count`,description:`Giving every server the same number of shards doesn't give them the same load. How consistent hashing falls short, what a shard manager does instead, and how Uber's open-source Shard Manager cut its hottest hosts' CPU and its fleet size.`,date:`2026-11-27`,urlPath:`/blog/big-tech/uber-shard-manager/`},{title:`GitHub's Agent Host Protocol: Agent Sessions That Follow You Across Devices`,description:`Start a coding agent in your editor, check on it from your phone, approve its next step from the browser. How GitHub and Microsoft's open Agent Host Protocol does it, by moving the session out of the editor into a host that many clients attach to.`,date:`2026-11-27`,urlPath:`/blog/big-tech/github-agent-host-protocol/`}],relatedPages:[{title:`Docker interview questions`,description:`Practice Docker interview questions on images and containers, layers and caching, CMD and ENTRYPOINT, and volumes, with clear answers.`,urlPath:`/interview/docker/`},{title:`Java Quiz`,description:`Test your Java basics: equality, strings, collections, exceptions, and the keywords that come up every day.`,urlPath:`/quiz/java/`}]}})})}));