import{C as e,S as t,t as n,w as r}from"./LoaderHider-CwMD9_gc.js";import{t as i}from"./BlogArticlePage-CTOk5mxO.js";var a=r(),o=e(),s=t();(0,o.createRoot)(document.getElementById(`root`)).render((0,s.jsx)(a.StrictMode,{children:(0,s.jsx)(n,{children:(0,s.jsx)(i,{article:{title:`Git Merge vs Rebase, Explained`,description:`Merge and rebase both bring the changes of one branch into another, but they leave a different history. See what each one does to your commits, when to use which, and the one rule that keeps rebase safe.`,date:`2026-11-20`,urlPath:`/blog/essentials/git-merge-vs-rebase/`,html:`<p>Your branch <code>feature</code> started from <code>main</code>, and since then both have new commits. To bring them together, Git gives you two tools: <code>git merge</code> and <code>git rebase</code>. Both end with the same files. They differ in the history they leave behind.</p>
<h2 id="the-starting-point">The Starting Point</h2>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span>          C---D   feature</span></span>
<span class="line"><span>         /</span></span>
<span class="line"><span>    A---B---E---F   main</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>You made commits C and D on <code>feature</code>. Meanwhile, teammates added E and F to <code>main</code>.</p>
<h2 id="what-merge-does">What Merge Does</h2>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#953800;--shiki-dark:#FFA657">git</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> switch</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> feature</span></span>
<span class="line"><span style="color:#953800;--shiki-dark:#FFA657">git</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> merge</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> main</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span>          C---D---M   feature</span></span>
<span class="line"><span>         /       /</span></span>
<span class="line"><span>    A---B---E---F   main</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>Merge creates a new <strong>merge commit</strong> M with two parents, D and F. Nothing that existed is changed: C and D keep their IDs. The history shows exactly what happened, including that two lines of work ran in parallel.</p>
<p>When the target branch has no new commits, there&#39;s nothing to join, and Git just moves the branch pointer forward: a <strong>fast-forward</strong>, with no merge commit. <code>git merge --no-ff</code> forces a merge commit anyway, which some teams use to keep a visible trace of each feature.</p>
<h2 id="what-rebase-does">What Rebase Does</h2>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#953800;--shiki-dark:#FFA657">git</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> switch</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> feature</span></span>
<span class="line"><span style="color:#953800;--shiki-dark:#FFA657">git</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> rebase</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> main</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span>                  C'--D'   feature</span></span>
<span class="line"><span>                 /</span></span>
<span class="line"><span>    A---B---E---F   main</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>Rebase takes your commits C and D, sets them aside, moves <code>feature</code> to the tip of <code>main</code>, then replays them one by one as <strong>new commits</strong> C&#39; and D&#39;. Same changes, new parents, so new IDs. The history is a straight line, as if you had started your work after F.</p>
<p>Merging <code>feature</code> into <code>main</code> afterwards is a fast-forward.</p>
<h2 id="side-by-side">Side by Side</h2>
<div data-table-scroll><table>
<thead>
<tr>
<th></th>
<th>Merge</th>
<th>Rebase</th>
</tr>
</thead>
<tbody><tr>
<td>History</td>
<td>True, with branches and merge commits</td>
<td>Linear, rewritten</td>
</tr>
<tr>
<td>Existing commits</td>
<td>Untouched</td>
<td>Replaced by copies with new IDs</td>
</tr>
<tr>
<td>Conflicts</td>
<td>Solved once, in the merge commit</td>
<td>Solved per replayed commit, maybe several</td>
</tr>
<tr>
<td>Safe on shared branch</td>
<td>Yes</td>
<td>No (see below)</td>
</tr>
<tr>
<td>Undo</td>
<td><code>git reset --hard HEAD~1</code> before push</td>
<td><code>git reflog</code> to find the old tip</td>
</tr>
</tbody></table>
</div>
<h2 id="the-golden-rule">The Golden Rule</h2>
<p><strong>Don&#39;t rebase commits that other people already have.</strong> Rebase replaces commits with copies. If a teammate based work on your old C and D, and you push C&#39; and D&#39; with a force push, their history and yours now disagree: they&#39;ll see duplicated commits and confusing conflicts.</p>
<p>Rebasing your own branch that nobody else uses is fine, even after you pushed it. You&#39;ll need to force push, and the safe way is:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#953800;--shiki-dark:#FFA657">git</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> push</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> --force-with-lease</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p><code>--force-with-lease</code> refuses to overwrite the remote branch if someone pushed to it since you last fetched, while a plain <code>--force</code> overwrites their work silently.</p>
<h2 id="conflicts-during-a-rebase">Conflicts During a Rebase</h2>
<p>Since each commit is replayed, a conflict can stop the rebase at any of them:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#6E7781;--shiki-dark:#8B949E"># fix the files Git lists, then:</span></span>
<span class="line"><span style="color:#953800;--shiki-dark:#FFA657">git</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> add</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> .</span></span>
<span class="line"><span style="color:#953800;--shiki-dark:#FFA657">git</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> rebase</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> --continue</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6E7781;--shiki-dark:#8B949E"># or give up and go back to how things were:</span></span>
<span class="line"><span style="color:#953800;--shiki-dark:#FFA657">git</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> rebase</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> --abort</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>If the same lines conflict in several commits, you&#39;ll solve them several times. <code>git config --global rerere.enabled true</code> makes Git remember your resolutions and reuse them.</p>
<h2 id="cleaning-up-with-interactive-rebase">Cleaning Up With Interactive Rebase</h2>
<p>Before opening a pull request, you can tidy your own commits:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#953800;--shiki-dark:#FFA657">git</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> rebase</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> -i</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> main</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>Git opens a list of your commits, oldest first. Change <code>pick</code> to:</p>
<div data-table-scroll><table>
<thead>
<tr>
<th>Word</th>
<th>Effect</th>
</tr>
</thead>
<tbody><tr>
<td><code>reword</code></td>
<td>Keep the commit, change its message</td>
</tr>
<tr>
<td><code>squash</code></td>
<td>Fold it into the previous one, keep both messages</td>
</tr>
<tr>
<td><code>fixup</code></td>
<td>Fold it into the previous one, drop its message</td>
</tr>
<tr>
<td><code>drop</code></td>
<td>Remove the commit</td>
</tr>
</tbody></table>
</div>
<p>Reorder lines to reorder commits. &quot;fix typo&quot; and &quot;oops&quot; commits disappear before anyone reviews them.</p>
<h2 id="which-one-to-use">Which One to Use</h2>
<p>A workflow that many teams use:</p>
<ol>
<li><strong>Update your own feature branch with rebase</strong>: <code>git pull --rebase</code> or <code>git rebase main</code>. Your commits stay on top, with no &quot;Merge branch &#39;main&#39; into feature&quot; noise.</li>
<li><strong>Bring a finished feature into <code>main</code> with a merge</strong>, often a squash merge through the pull request, so <code>main</code> gets one commit per feature.</li>
<li><strong>Never rebase <code>main</code></strong> or any branch others build on.</li>
</ol>
<p>If your team values a history that shows exactly what happened, merge everywhere: it&#39;s never wrong, just noisier. If it values a readable, linear log, rebase private branches. Either way, decide once and write it in the contributing guide.</p>
<h2 id="the-answer-in-short">The Answer in Short</h2>
<ol>
<li>Both combine branches; merge adds a merge commit, rebase replays your commits on top.</li>
<li>Merge keeps history true and never rewrites commits.</li>
<li>Rebase gives a linear history but creates new commits.</li>
<li>Only rebase commits nobody else has; push with <code>--force-with-lease</code>.</li>
<li>Use <code>git rebase -i</code> to clean up your commits before review.</li>
</ol>
`,headings:[{id:`the-starting-point`,text:`The Starting Point`},{id:`what-merge-does`,text:`What Merge Does`},{id:`what-rebase-does`,text:`What Rebase Does`},{id:`side-by-side`,text:`Side by Side`},{id:`the-golden-rule`,text:`The Golden Rule`},{id:`conflicts-during-a-rebase`,text:`Conflicts During a Rebase`},{id:`cleaning-up-with-interactive-rebase`,text:`Cleaning Up With Interactive Rebase`},{id:`which-one-to-use`,text:`Which One to Use`},{id:`the-answer-in-short`,text:`The Answer in Short`}],parents:[],related:[{title:`Backlinks Explained for Developers`,description:`What backlinks are, why search engines care, what nofollow, sponsored and ugc change, how to see who links to you, and honest ways for a developer to earn links without risking a penalty.`,date:`2026-11-19`,urlPath:`/blog/essentials/backlinks-explained/`},{title:`ROW_NUMBER in SQL, Explained with Examples`,description:`ROW_NUMBER gives each row a number, 1, 2, 3, starting over for each group. Learn its syntax, PARTITION BY and ORDER BY, how it differs from RANK and DENSE_RANK, and how to use it for top N per group, the latest row, duplicates and pagination.`,date:`2026-11-18`,urlPath:`/blog/essentials/row-number-in-sql/`},{title:`Claude Certified Associate (Foundations): A Study Guide`,description:`What the Claude Certified Associate – Foundations exam covers, domain by domain, with the ideas to know, exam tips, a study plan, and a free practice exam to check you're ready.`,date:`2026-11-17`,urlPath:`/blog/essentials/claude-certified-associate-foundations-study-guide/`},{title:`Delete Old Documents and Keep Only the Latest per Type`,description:`A user has many documents of different types and you only want the most recent one of each. Learn how to find and delete the older ones safely in PostgreSQL, MySQL and MongoDB, keep the last N, and stop duplicates from coming back.`,date:`2026-11-17`,urlPath:`/blog/essentials/delete-old-documents-keep-latest-per-type/`}],relatedPages:[{title:`Git Playground`,description:`Practice Git online, free: type git commit, branch, switch, merge, rebase, cherry-pick, reset and revert in your browser, see the commit graph change live, and solve exercises.`,urlPath:`/playgrounds/git/`},{title:`Git Quiz`,description:`How well do you know Git? Test yourself on commits, branches, merging, rebasing, and undoing mistakes.`,urlPath:`/quiz/git/`},{title:`Git interview questions`,description:`Practice Git interview questions on merge and rebase, reset and revert, fetch and pull, and stash, with clear answers.`,urlPath:`/interview/git/`}]}})})}));