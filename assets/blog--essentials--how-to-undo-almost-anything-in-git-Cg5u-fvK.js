import{b as e,t,x as n,y as r}from"./LoaderHider-CvYrG1Rz.js";import{t as i}from"./BlogArticlePage-COYAltET.js";var a=n(),o=e(),s=r();(0,o.createRoot)(document.getElementById(`root`)).render((0,s.jsx)(a.StrictMode,{children:(0,s.jsx)(t,{children:(0,s.jsx)(i,{article:{title:`How to Undo Almost Anything in Git`,description:`Committed to the wrong branch, deleted a branch, or pushed something you shouldn't have? Here is how to undo common Git mistakes, from unstaged changes to lost commits, and which commands are safe on shared branches.`,date:`2026-11-12`,urlPath:`/blog/essentials/how-to-undo-almost-anything-in-git/`,html:`<p>Everyone who uses Git eventually types a command and feels their stomach drop. A commit on the wrong branch. A <code>reset --hard</code> that took an afternoon of work with it. A branch deleted by accident.</p>
<p>The good news is that Git almost never really deletes anything you committed. It just stops showing it to you. Once you know where to look, most mistakes take one or two commands to fix.</p>
<p>This guide goes from the smallest mistakes to the scariest. For each one, you get the command and what it actually does.</p>
<h2 id="before-anything-else-commit-or-stash">Before Anything Else: Commit or Stash</h2>
<p>If you&#39;re about to try a fix and you have uncommitted changes, put them somewhere safe first. Uncommitted work is the one thing Git really can lose, because it was never saved in a commit.</p>
<pre class="shiki github-light-default code-block" tabindex="0"><code><span class="line"><span style="color:#953800">git</span><span style="color:#0A3069"> stash</span><span style="color:#0A3069"> push</span><span style="color:#0550AE"> -u</span><span style="color:#0550AE"> -m</span><span style="color:#0A3069"> "before fixing my mess"</span></span></code></pre><p>The <code>-u</code> includes untracked files. You can bring everything back later with <code>git stash pop</code>.</p>
<h2 id="throw-away-changes-in-a-file">Throw Away Changes in a File</h2>
<p>You edited a file, it&#39;s not going well, and you want it back the way it was in the last commit:</p>
<pre class="shiki github-light-default code-block" tabindex="0"><code><span class="line"><span style="color:#953800">git</span><span style="color:#0A3069"> restore</span><span style="color:#0A3069"> src/app.js</span></span></code></pre><p>This one is final. The changes weren&#39;t committed, so there&#39;s no history to recover them from. Run <code>git diff src/app.js</code> first if you&#39;re not sure.</p>
<p>To throw away every unstaged change in the project, use <code>git restore .</code> instead.</p>
<p><code>git restore</code> arrived in Git 2.23. In older tutorials you&#39;ll see <code>git checkout -- src/app.js</code>, which does the same thing.</p>
<h2 id="unstage-a-file">Unstage a File</h2>
<p>You ran <code>git add .</code> and staged a file you didn&#39;t mean to commit. The changes are fine, you just don&#39;t want them in this commit:</p>
<pre class="shiki github-light-default code-block" tabindex="0"><code><span class="line"><span style="color:#953800">git</span><span style="color:#0A3069"> restore</span><span style="color:#0550AE"> --staged</span><span style="color:#0A3069"> config/local.env</span></span></code></pre><p>The file keeps its changes. It just leaves the staging area.</p>
<h2 id="fix-the-last-commit">Fix the Last Commit</h2>
<p>Typo in the commit message? Forgot to add a file? As long as you haven&#39;t pushed yet, amend the commit:</p>
<pre class="shiki github-light-default code-block" tabindex="0"><code><span class="line"><span style="color:#953800">git</span><span style="color:#0A3069"> add</span><span style="color:#0A3069"> forgotten-file.js</span></span>
<span class="line"><span style="color:#953800">git</span><span style="color:#0A3069"> commit</span><span style="color:#0550AE"> --amend</span><span style="color:#0550AE"> -m</span><span style="color:#0A3069"> "Add the login form"</span></span></code></pre><p><code>--amend</code> doesn&#39;t edit the old commit. It creates a new one that replaces it, with a new hash. That&#39;s why you shouldn&#39;t amend a commit you already pushed: your history and the remote&#39;s history now disagree, and you&#39;d have to force push.</p>
<p>To keep the message and only add the file, use <code>git commit --amend --no-edit</code>.</p>
<h2 id="undo-the-last-commit-keep-the-work">Undo the Last Commit, Keep the Work</h2>
<p>You committed too early, or you want to split the commit in two. Move the branch back one commit, and keep the changes:</p>
<pre class="shiki github-light-default code-block" tabindex="0"><code><span class="line"><span style="color:#953800">git</span><span style="color:#0A3069"> reset</span><span style="color:#0550AE"> --soft</span><span style="color:#0A3069"> HEAD~1</span></span></code></pre><p><code>HEAD~1</code> means &quot;one commit before the current one&quot;. The three flavors of <code>reset</code> differ only in what they do with the changes:</p>
<table>
<thead>
<tr>
<th>Command</th>
<th>The commit</th>
<th>The changes</th>
</tr>
</thead>
<tbody><tr>
<td><code>git reset --soft HEAD~1</code></td>
<td>Removed</td>
<td>Kept, and still staged</td>
</tr>
<tr>
<td><code>git reset HEAD~1</code></td>
<td>Removed</td>
<td>Kept, but unstaged</td>
</tr>
<tr>
<td><code>git reset --hard HEAD~1</code></td>
<td>Removed</td>
<td>Thrown away</td>
</tr>
</tbody></table>
<p>The default, without a flag, is the middle one. Use <code>--hard</code> only when you really want the work gone, and even then, read the reflog section below before you panic.</p>
<h2 id="undo-a-commit-you-already-pushed">Undo a Commit You Already Pushed</h2>
<p>Once a commit is on a shared branch, don&#39;t rewrite history. Your teammates may already have it, and <code>reset</code> plus a force push breaks their copies.</p>
<p>Use <code>revert</code> instead. It creates a new commit that does the opposite of the old one:</p>
<pre class="shiki github-light-default code-block" tabindex="0"><code><span class="line"><span style="color:#953800">git</span><span style="color:#0A3069"> revert</span><span style="color:#0A3069"> 3f2a91c</span></span>
<span class="line"><span style="color:#953800">git</span><span style="color:#0A3069"> push</span></span></code></pre><p>The bad commit stays in the history, followed by the commit that cancels it. That&#39;s a feature: everyone can see what happened, and nothing breaks.</p>
<p>Reverting a merge commit needs one more piece of information: which side of the merge to keep. Usually that&#39;s the branch you merged into, the first parent:</p>
<pre class="shiki github-light-default code-block" tabindex="0"><code><span class="line"><span style="color:#953800">git</span><span style="color:#0A3069"> revert</span><span style="color:#0550AE"> -m</span><span style="color:#0550AE"> 1</span><span style="color:#0A3069"> a81c7d0</span></span></code></pre><h2 id="committed-to-the-wrong-branch">Committed to the Wrong Branch</h2>
<p>You made two commits on <code>main</code> that belonged on a feature branch, and you haven&#39;t pushed. Create the branch where you are, then move <code>main</code> back:</p>
<pre class="shiki github-light-default code-block" tabindex="0"><code><span class="line"><span style="color:#953800">git</span><span style="color:#0A3069"> branch</span><span style="color:#0A3069"> feature/login</span></span>
<span class="line"><span style="color:#953800">git</span><span style="color:#0A3069"> reset</span><span style="color:#0550AE"> --hard</span><span style="color:#0A3069"> HEAD~2</span></span>
<span class="line"><span style="color:#953800">git</span><span style="color:#0A3069"> switch</span><span style="color:#0A3069"> feature/login</span></span></code></pre><p>The first line creates a branch that points to your latest commit, so the commits are safe there. The second moves <code>main</code> back two commits. The third takes you to the new branch, where your work is waiting.</p>
<p>If the commits should go on a branch that already exists, use <code>git cherry-pick</code> to copy them there, then reset <code>main</code> the same way.</p>
<h2 id="get-back-a-lost-commit-or-a-deleted-branch">Get Back a Lost Commit or a Deleted Branch</h2>
<p>This is the one that saves careers. Git keeps a private log of every position <code>HEAD</code> has been at, called the <strong>reflog</strong>:</p>
<pre class="shiki github-light-default code-block" tabindex="0"><code><span class="line"><span style="color:#953800">git</span><span style="color:#0A3069"> reflog</span></span></code></pre><pre class="shiki github-light-default code-block" tabindex="0"><code><span class="line"><span>a81c7d0 HEAD@{0}: reset: moving to HEAD~2</span></span>
<span class="line"><span>5e19b42 HEAD@{1}: commit: Add password reset</span></span>
<span class="line"><span>c03d6aa HEAD@{2}: commit: Add login form</span></span></code></pre><p>Find the line just before the mistake, and you have the hash of the commit you thought you&#39;d lost. Then put a branch on it:</p>
<pre class="shiki github-light-default code-block" tabindex="0"><code><span class="line"><span style="color:#953800">git</span><span style="color:#0A3069"> branch</span><span style="color:#0A3069"> rescued</span><span style="color:#0A3069"> 5e19b42</span></span></code></pre><p>This works after a <code>reset --hard</code>, a deleted branch, a rebase gone wrong, or a bad <code>--amend</code>. Entries stay in the reflog for 30 to 90 days by default, so you have time.</p>
<p>Two limits to know. The reflog is local: it only knows what happened in your copy of the repository. And it only tracks commits, so changes you never committed aren&#39;t in it.</p>
<h2 id="back-out-of-a-merge-or-a-rebase">Back Out of a Merge or a Rebase</h2>
<p>A merge or a rebase stopped on conflicts and you&#39;d rather not deal with them now:</p>
<pre class="shiki github-light-default code-block" tabindex="0"><code><span class="line"><span style="color:#953800">git</span><span style="color:#0A3069"> merge</span><span style="color:#0550AE"> --abort</span></span>
<span class="line"><span style="color:#953800">git</span><span style="color:#0A3069"> rebase</span><span style="color:#0550AE"> --abort</span></span></code></pre><p>Both put everything back the way it was before you started.</p>
<p>If the rebase already finished and the result is wrong, Git saved where you were before it started in <code>ORIG_HEAD</code>:</p>
<pre class="shiki github-light-default code-block" tabindex="0"><code><span class="line"><span style="color:#953800">git</span><span style="color:#0A3069"> reset</span><span style="color:#0550AE"> --hard</span><span style="color:#0A3069"> ORIG_HEAD</span></span></code></pre><p><code>ORIG_HEAD</code> changes with the next reset, merge or rebase, so do this right away. If it&#39;s too late, the reflog still has the old position.</p>
<h2 id="clean-out-untracked-files">Clean Out Untracked Files</h2>
<p>Build output and stray files are cluttering <code>git status</code>. Look before you delete:</p>
<pre class="shiki github-light-default code-block" tabindex="0"><code><span class="line"><span style="color:#953800">git</span><span style="color:#0A3069"> clean</span><span style="color:#0550AE"> -n</span><span style="color:#0550AE"> -d</span></span></code></pre><p><code>-n</code> only lists what would be removed. When the list looks right, run it for real with <code>-f</code> instead of <code>-n</code>. Add <code>-x</code> to also remove ignored files, like <code>node_modules</code>, if you want a truly fresh start.</p>
<h2 id="when-you-pushed-a-secret">When You Pushed a Secret</h2>
<p>You committed an API key or a password and pushed it. Undoing the commit is not enough, and it&#39;s not even the first step.</p>
<p><strong>Revoke the secret first.</strong> Generate a new key and disable the old one. Bots scan public repositories for keys within minutes, and anyone who cloned or forked the repository already has a copy. Rewriting history afterwards, with a tool like <code>git filter-repo</code>, only cleans up the record. It doesn&#39;t make the leaked key safe again.</p>
<p>Then add the file to <code>.gitignore</code>, so it doesn&#39;t happen twice.</p>
<h2 id="the-short-version">The Short Version</h2>
<table>
<thead>
<tr>
<th>Situation</th>
<th>Command</th>
</tr>
</thead>
<tbody><tr>
<td>Discard changes in a file</td>
<td><code>git restore &lt;file&gt;</code></td>
</tr>
<tr>
<td>Unstage a file</td>
<td><code>git restore --staged &lt;file&gt;</code></td>
</tr>
<tr>
<td>Fix the last commit, not pushed</td>
<td><code>git commit --amend</code></td>
</tr>
<tr>
<td>Undo the last commit, keep the work</td>
<td><code>git reset --soft HEAD~1</code></td>
</tr>
<tr>
<td>Undo a pushed commit</td>
<td><code>git revert &lt;hash&gt;</code></td>
</tr>
<tr>
<td>Find a lost commit or branch</td>
<td><code>git reflog</code>, then <code>git branch</code></td>
</tr>
<tr>
<td>Stop a merge or rebase</td>
<td><code>git merge --abort</code>, <code>git rebase --abort</code></td>
</tr>
<tr>
<td>Remove untracked files</td>
<td><code>git clean -n -d</code>, then <code>-f</code></td>
</tr>
</tbody></table>
<p>One rule covers most of it: rewrite history freely on your own branch before you push, and use <code>revert</code> once others can see it.</p>
<p>Keep the <a href="/blog/cheatsheet/git/">Git cheat sheet</a> open for the everyday commands, and try the <a href="/interview/git/">Git interview questions</a> to check that <code>reset</code>, <code>revert</code> and <code>rebase</code> really stick.</p>
`,headings:[{id:`before-anything-else-commit-or-stash`,text:`Before Anything Else: Commit or Stash`},{id:`throw-away-changes-in-a-file`,text:`Throw Away Changes in a File`},{id:`unstage-a-file`,text:`Unstage a File`},{id:`fix-the-last-commit`,text:`Fix the Last Commit`},{id:`undo-the-last-commit-keep-the-work`,text:`Undo the Last Commit, Keep the Work`},{id:`undo-a-commit-you-already-pushed`,text:`Undo a Commit You Already Pushed`},{id:`committed-to-the-wrong-branch`,text:`Committed to the Wrong Branch`},{id:`get-back-a-lost-commit-or-a-deleted-branch`,text:`Get Back a Lost Commit or a Deleted Branch`},{id:`back-out-of-a-merge-or-a-rebase`,text:`Back Out of a Merge or a Rebase`},{id:`clean-out-untracked-files`,text:`Clean Out Untracked Files`},{id:`when-you-pushed-a-secret`,text:`When You Pushed a Secret`},{id:`the-short-version`,text:`The Short Version`}],parents:[],related:[{title:`Big O Notation Explained, With Examples`,description:`Learn Big O notation the simple way. See O(1), O(log n), O(n), O(n log n), O(n²) and O(2ⁿ) with JavaScript examples, a cheat sheet table, and visualizers you can watch.`,date:`2026-11-11`,urlPath:`/blog/essentials/big-o-notation-explained/`},{title:`12 Practical Web Projects to Master HTML, CSS & JavaScript`,description:`Build & deploy 12 real-world web apps: Todo List, Weather App, Music Player, QR Generator, and more. Perfect for portfolios with complete source code!`,date:`2025-04-16`,urlPath:`/blog/essentials/12-practical-web-projects-using-html-css-and-javascript/`}]}})})}));