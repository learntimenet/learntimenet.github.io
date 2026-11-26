import{C as e,S as t,t as n,x as r}from"./LoaderHider-Cnf8ShMN.js";import{t as i}from"./BlogArticlePage-BntAd276.js";var a=e(),o=t(),s=r();(0,o.createRoot)(document.getElementById(`root`)).render((0,s.jsx)(a.StrictMode,{children:(0,s.jsx)(n,{children:(0,s.jsx)(i,{article:{title:`Linux Command Line Cheat Sheet`,description:`The Linux and macOS terminal commands developers use every day, on one page: moving around, files and folders, viewing and searching text, pipes and redirection, permissions, processes, networking, archives, SSH and handy shortcuts, with examples.`,date:`2026-11-26`,urlPath:`/blog/cheatsheet/linux-command-line/`,html:`<p>The terminal commands you need every day as a developer, with examples. They work in Linux and macOS terminals, and in WSL on Windows. Add <code>--help</code> to any command, or run <code>man command</code>, for all its options.</p>
<h2 id="moving-around">Moving Around</h2>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#0550AE;--shiki-dark:#79C0FF">pwd</span><span style="color:#6E7781;--shiki-dark:#8B949E">                  # where am I?</span></span>
<span class="line"><span style="color:#953800;--shiki-dark:#FFA657">ls</span><span style="color:#6E7781;--shiki-dark:#8B949E">                   # list files</span></span>
<span class="line"><span style="color:#953800;--shiki-dark:#FFA657">ls</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> -la</span><span style="color:#6E7781;--shiki-dark:#8B949E">               # all files, with details and hidden ones</span></span>
<span class="line"><span style="color:#0550AE;--shiki-dark:#79C0FF">cd</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> projects/app</span><span style="color:#6E7781;--shiki-dark:#8B949E">      # go into a folder</span></span>
<span class="line"><span style="color:#0550AE;--shiki-dark:#79C0FF">cd</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> ..</span><span style="color:#6E7781;--shiki-dark:#8B949E">                # one level up</span></span>
<span class="line"><span style="color:#0550AE;--shiki-dark:#79C0FF">cd</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> ~</span><span style="color:#6E7781;--shiki-dark:#8B949E">                 # home folder (or just cd)</span></span>
<span class="line"><span style="color:#0550AE;--shiki-dark:#79C0FF">cd</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> -</span><span style="color:#6E7781;--shiki-dark:#8B949E">                 # back to the previous folder</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><div data-table-scroll><table>
<thead>
<tr>
<th>Path</th>
<th>Means</th>
</tr>
</thead>
<tbody><tr>
<td><code>/</code></td>
<td>The root of the file system</td>
</tr>
<tr>
<td><code>~</code></td>
<td>Your home folder</td>
</tr>
<tr>
<td><code>.</code></td>
<td>The current folder</td>
</tr>
<tr>
<td><code>..</code></td>
<td>The parent folder</td>
</tr>
<tr>
<td><code>/etc</code></td>
<td>System configuration</td>
</tr>
<tr>
<td><code>/var/log</code></td>
<td>Log files</td>
</tr>
<tr>
<td><code>/tmp</code></td>
<td>Temporary files</td>
</tr>
</tbody></table>
</div>
<h2 id="files-and-folders">Files and Folders</h2>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#953800;--shiki-dark:#FFA657">mkdir</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> notes</span><span style="color:#6E7781;--shiki-dark:#8B949E">                  # create a folder</span></span>
<span class="line"><span style="color:#953800;--shiki-dark:#FFA657">mkdir</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> -p</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> src/utils/tests</span><span style="color:#6E7781;--shiki-dark:#8B949E">     # create nested folders</span></span>
<span class="line"><span style="color:#953800;--shiki-dark:#FFA657">touch</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> todo.txt</span><span style="color:#6E7781;--shiki-dark:#8B949E">               # create an empty file</span></span>
<span class="line"><span style="color:#953800;--shiki-dark:#FFA657">cp</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> todo.txt</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> backup.txt</span><span style="color:#6E7781;--shiki-dark:#8B949E">       # copy</span></span>
<span class="line"><span style="color:#953800;--shiki-dark:#FFA657">cp</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> -r</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> src</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> src-copy</span><span style="color:#6E7781;--shiki-dark:#8B949E">           # copy a folder</span></span>
<span class="line"><span style="color:#953800;--shiki-dark:#FFA657">mv</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> todo.txt</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> done.txt</span><span style="color:#6E7781;--shiki-dark:#8B949E">         # rename or move</span></span>
<span class="line"><span style="color:#953800;--shiki-dark:#FFA657">rm</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> old.txt</span><span style="color:#6E7781;--shiki-dark:#8B949E">                   # delete a file (no trash!)</span></span>
<span class="line"><span style="color:#953800;--shiki-dark:#FFA657">rm</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> -r</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> build</span><span style="color:#6E7781;--shiki-dark:#8B949E">                  # delete a folder and its contents</span></span>
<span class="line"><span style="color:#953800;--shiki-dark:#FFA657">ln</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> -s</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> /opt/app/current</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> app</span><span style="color:#6E7781;--shiki-dark:#8B949E">   # symbolic link</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p><code>rm</code> doesn&#39;t ask and there&#39;s no undo. Double-check paths, and add <code>-i</code> to confirm each file.</p>
<h2 id="viewing-files">Viewing Files</h2>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#953800;--shiki-dark:#FFA657">cat</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> file.txt</span><span style="color:#6E7781;--shiki-dark:#8B949E">         # print the whole file</span></span>
<span class="line"><span style="color:#953800;--shiki-dark:#FFA657">less</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> big.log</span><span style="color:#6E7781;--shiki-dark:#8B949E">         # scroll; q to quit, /word to search</span></span>
<span class="line"><span style="color:#953800;--shiki-dark:#FFA657">head</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> -n</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> 20</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> file.txt</span><span style="color:#6E7781;--shiki-dark:#8B949E">  # first 20 lines</span></span>
<span class="line"><span style="color:#953800;--shiki-dark:#FFA657">tail</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> -n</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> 20</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> file.txt</span><span style="color:#6E7781;--shiki-dark:#8B949E">  # last 20 lines</span></span>
<span class="line"><span style="color:#953800;--shiki-dark:#FFA657">tail</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> -f</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> app.log</span><span style="color:#6E7781;--shiki-dark:#8B949E">      # follow new lines as they're written</span></span>
<span class="line"><span style="color:#953800;--shiki-dark:#FFA657">wc</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> -l</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> file.txt</span><span style="color:#6E7781;--shiki-dark:#8B949E">       # count lines</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><h2 id="searching">Searching</h2>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#953800;--shiki-dark:#FFA657">grep</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> "error"</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> app.log</span><span style="color:#6E7781;--shiki-dark:#8B949E">            # lines containing "error"</span></span>
<span class="line"><span style="color:#953800;--shiki-dark:#FFA657">grep</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> -i</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> "error"</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> app.log</span><span style="color:#6E7781;--shiki-dark:#8B949E">         # ignore case</span></span>
<span class="line"><span style="color:#953800;--shiki-dark:#FFA657">grep</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> -rn</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> "TODO"</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> src/</span><span style="color:#6E7781;--shiki-dark:#8B949E">            # search a folder, show line numbers</span></span>
<span class="line"><span style="color:#953800;--shiki-dark:#FFA657">grep</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> -v</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> "debug"</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> app.log</span><span style="color:#6E7781;--shiki-dark:#8B949E">         # lines NOT containing "debug"</span></span>
<span class="line"><span style="color:#953800;--shiki-dark:#FFA657">grep</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> -c</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> "error"</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> app.log</span><span style="color:#6E7781;--shiki-dark:#8B949E">         # count matching lines</span></span>
<span class="line"></span>
<span class="line"><span style="color:#953800;--shiki-dark:#FFA657">find</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> .</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> -name</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> "*.js"</span><span style="color:#6E7781;--shiki-dark:#8B949E">             # files by name</span></span>
<span class="line"><span style="color:#953800;--shiki-dark:#FFA657">find</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> .</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> -type</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> d</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> -name</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> node_modules</span><span style="color:#6E7781;--shiki-dark:#8B949E">  # folders by name</span></span>
<span class="line"><span style="color:#953800;--shiki-dark:#FFA657">find</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> .</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> -mtime</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> -1</span><span style="color:#6E7781;--shiki-dark:#8B949E">                # changed in the last 24 hours</span></span>
<span class="line"><span style="color:#953800;--shiki-dark:#FFA657">find</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> .</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> -size</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> +100M</span><span style="color:#6E7781;--shiki-dark:#8B949E">              # bigger than 100 MB</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>If you have them, <code>rg</code> (ripgrep) and <code>fd</code> are faster, simpler versions of <code>grep -r</code> and <code>find</code>.</p>
<h2 id="pipes-and-redirection">Pipes and Redirection</h2>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#953800;--shiki-dark:#FFA657">ls</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> |</span><span style="color:#953800;--shiki-dark:#FFA657"> wc</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> -l</span><span style="color:#6E7781;--shiki-dark:#8B949E">                      # pipe: output of one into the next</span></span>
<span class="line"><span style="color:#953800;--shiki-dark:#FFA657">cat</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> access.log</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> |</span><span style="color:#953800;--shiki-dark:#FFA657"> sort</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> |</span><span style="color:#953800;--shiki-dark:#FFA657"> uniq</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> -c</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> |</span><span style="color:#953800;--shiki-dark:#FFA657"> sort</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> -rn</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> |</span><span style="color:#953800;--shiki-dark:#FFA657"> head</span><span style="color:#6E7781;--shiki-dark:#8B949E">  # most common lines</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0550AE;--shiki-dark:#79C0FF">echo</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> "hello"</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> ></span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> out.txt</span><span style="color:#6E7781;--shiki-dark:#8B949E">          # write to a file (replaces it)</span></span>
<span class="line"><span style="color:#0550AE;--shiki-dark:#79C0FF">echo</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> "again"</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> >></span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> out.txt</span><span style="color:#6E7781;--shiki-dark:#8B949E">         # append</span></span>
<span class="line"><span style="color:#0550AE;--shiki-dark:#79C0FF">command</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> 2></span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> errors.txt</span><span style="color:#6E7781;--shiki-dark:#8B949E">           # errors only</span></span>
<span class="line"><span style="color:#0550AE;--shiki-dark:#79C0FF">command</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> ></span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> all.txt</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> 2>&#x26;1</span><span style="color:#6E7781;--shiki-dark:#8B949E">          # output and errors</span></span>
<span class="line"><span style="color:#0550AE;--shiki-dark:#79C0FF">command</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> ></span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> /dev/null</span><span style="color:#6E7781;--shiki-dark:#8B949E">             # discard output</span></span>
<span class="line"></span>
<span class="line"><span style="color:#953800;--shiki-dark:#FFA657">cut</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> -d,</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> -f2</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> data.csv</span><span style="color:#6E7781;--shiki-dark:#8B949E">            # second column of a CSV</span></span>
<span class="line"><span style="color:#953800;--shiki-dark:#FFA657">sort</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> names.txt</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> |</span><span style="color:#953800;--shiki-dark:#FFA657"> uniq</span><span style="color:#6E7781;--shiki-dark:#8B949E">           # unique sorted lines</span></span>
<span class="line"><span style="color:#953800;--shiki-dark:#FFA657">sed</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> 's/old/new/g'</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> file.txt</span><span style="color:#6E7781;--shiki-dark:#8B949E">      # replace text (prints the result)</span></span>
<span class="line"><span style="color:#953800;--shiki-dark:#FFA657">awk</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> '{print $1}'</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> access.log</span><span style="color:#6E7781;--shiki-dark:#8B949E">     # first word of each line</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><h2 id="permissions">Permissions</h2>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#953800;--shiki-dark:#FFA657">ls</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> -l</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> script.sh</span><span style="color:#6E7781;--shiki-dark:#8B949E">                 # -rwxr-xr-- 1 ada staff ...</span></span>
<span class="line"><span style="color:#953800;--shiki-dark:#FFA657">chmod</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> +x</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> script.sh</span><span style="color:#6E7781;--shiki-dark:#8B949E">              # make it executable</span></span>
<span class="line"><span style="color:#953800;--shiki-dark:#FFA657">chmod</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> 644</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> notes.txt</span><span style="color:#6E7781;--shiki-dark:#8B949E">             # rw-r--r--</span></span>
<span class="line"><span style="color:#953800;--shiki-dark:#FFA657">chmod</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> 755</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> deploy.sh</span><span style="color:#6E7781;--shiki-dark:#8B949E">             # rwxr-xr-x</span></span>
<span class="line"><span style="color:#953800;--shiki-dark:#FFA657">chmod</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> -R</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> u+w</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> folder</span><span style="color:#6E7781;--shiki-dark:#8B949E">             # add write for the owner, recursively</span></span>
<span class="line"><span style="color:#953800;--shiki-dark:#FFA657">sudo</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> chown</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> ada:staff</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> file.txt</span><span style="color:#6E7781;--shiki-dark:#8B949E">   # change owner and group</span></span>
<span class="line"><span style="color:#953800;--shiki-dark:#FFA657">sudo</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> command</span><span style="color:#6E7781;--shiki-dark:#8B949E">                    # run as administrator</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><div data-table-scroll><table>
<thead>
<tr>
<th>Digit</th>
<th>Permission</th>
<th>Letters</th>
</tr>
</thead>
<tbody><tr>
<td>7</td>
<td>read, write, execute</td>
<td><code>rwx</code></td>
</tr>
<tr>
<td>6</td>
<td>read, write</td>
<td><code>rw-</code></td>
</tr>
<tr>
<td>5</td>
<td>read, execute</td>
<td><code>r-x</code></td>
</tr>
<tr>
<td>4</td>
<td>read</td>
<td><code>r--</code></td>
</tr>
<tr>
<td>0</td>
<td>nothing</td>
<td><code>---</code></td>
</tr>
</tbody></table>
</div>
<p>The three digits are for the owner, the group and everyone else. Work them out with the <a href="/tools/chmod-calculator/">chmod calculator</a>.</p>
<h2 id="processes">Processes</h2>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#953800;--shiki-dark:#FFA657">ps</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> aux</span><span style="color:#6E7781;--shiki-dark:#8B949E">                  # all running processes</span></span>
<span class="line"><span style="color:#953800;--shiki-dark:#FFA657">ps</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> aux</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> |</span><span style="color:#953800;--shiki-dark:#FFA657"> grep</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> node</span><span style="color:#6E7781;--shiki-dark:#8B949E">      # find one</span></span>
<span class="line"><span style="color:#953800;--shiki-dark:#FFA657">top</span><span style="color:#6E7781;--shiki-dark:#8B949E">                     # live view (htop is nicer if installed)</span></span>
<span class="line"><span style="color:#0550AE;--shiki-dark:#79C0FF">kill</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> 1234</span><span style="color:#6E7781;--shiki-dark:#8B949E">               # ask process 1234 to stop</span></span>
<span class="line"><span style="color:#0550AE;--shiki-dark:#79C0FF">kill</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> -9</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> 1234</span><span style="color:#6E7781;--shiki-dark:#8B949E">            # force it to stop</span></span>
<span class="line"><span style="color:#953800;--shiki-dark:#FFA657">pkill</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> node</span><span style="color:#6E7781;--shiki-dark:#8B949E">              # stop by name</span></span>
<span class="line"><span style="color:#0550AE;--shiki-dark:#79C0FF">command</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> &#x26;               </span><span style="color:#6E7781;--shiki-dark:#8B949E"># run in the background</span></span>
<span class="line"><span style="color:#0550AE;--shiki-dark:#79C0FF">jobs</span><span style="color:#6E7781;--shiki-dark:#8B949E">                    # background jobs of this shell</span></span>
<span class="line"><span style="color:#953800;--shiki-dark:#FFA657">Ctrl+C</span><span style="color:#6E7781;--shiki-dark:#8B949E">                  # stop the running command</span></span>
<span class="line"><span style="color:#953800;--shiki-dark:#FFA657">Ctrl+Z,</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> then</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> bg</span><span style="color:#6E7781;--shiki-dark:#8B949E">         # pause it, then continue in the background</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><h2 id="disk-and-system">Disk and System</h2>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#953800;--shiki-dark:#FFA657">df</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> -h</span><span style="color:#6E7781;--shiki-dark:#8B949E">                   # free disk space</span></span>
<span class="line"><span style="color:#953800;--shiki-dark:#FFA657">du</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> -sh</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> *</span><span style="color:#6E7781;--shiki-dark:#8B949E">                # size of each item in this folder</span></span>
<span class="line"><span style="color:#953800;--shiki-dark:#FFA657">du</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> -sh</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> node_modules</span><span style="color:#6E7781;--shiki-dark:#8B949E">     # size of one folder</span></span>
<span class="line"><span style="color:#953800;--shiki-dark:#FFA657">free</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> -h</span><span style="color:#6E7781;--shiki-dark:#8B949E">                 # memory (Linux)</span></span>
<span class="line"><span style="color:#953800;--shiki-dark:#FFA657">uname</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> -a</span><span style="color:#6E7781;--shiki-dark:#8B949E">                # system info</span></span>
<span class="line"><span style="color:#953800;--shiki-dark:#FFA657">uptime</span><span style="color:#6E7781;--shiki-dark:#8B949E">                  # how long it's been running, and load</span></span>
<span class="line"><span style="color:#953800;--shiki-dark:#FFA657">whoami</span><span style="color:#6E7781;--shiki-dark:#8B949E">                  # current user</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><h2 id="networking">Networking</h2>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#953800;--shiki-dark:#FFA657">curl</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> https://api.example.com/users</span><span style="color:#6E7781;--shiki-dark:#8B949E">          # GET request</span></span>
<span class="line"><span style="color:#953800;--shiki-dark:#FFA657">curl</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> -i</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> https://example.com</span><span style="color:#6E7781;--shiki-dark:#8B949E">                 # show response headers</span></span>
<span class="line"><span style="color:#953800;--shiki-dark:#FFA657">curl</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> -X</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> POST</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> -H</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> "Content-Type: application/json"</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> \\</span></span>
<span class="line"><span style="color:#0550AE;--shiki-dark:#79C0FF">  -d</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> '{"name":"Ada"}'</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> https://api.example.com/users</span></span>
<span class="line"><span style="color:#953800;--shiki-dark:#FFA657">curl</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> -o</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> file.zip</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> https://example.com/file.zip</span><span style="color:#6E7781;--shiki-dark:#8B949E">   # save to a file</span></span>
<span class="line"><span style="color:#953800;--shiki-dark:#FFA657">ping</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> example.com</span><span style="color:#6E7781;--shiki-dark:#8B949E">                            # is it reachable?</span></span>
<span class="line"><span style="color:#953800;--shiki-dark:#FFA657">dig</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> example.com</span><span style="color:#6E7781;--shiki-dark:#8B949E">                             # DNS lookup</span></span>
<span class="line"><span style="color:#953800;--shiki-dark:#FFA657">ss</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> -tlnp</span><span style="color:#6E7781;--shiki-dark:#8B949E">                                    # ports listening (Linux)</span></span>
<span class="line"><span style="color:#953800;--shiki-dark:#FFA657">lsof</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> -i</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> :3000</span><span style="color:#6E7781;--shiki-dark:#8B949E">                               # what uses port 3000</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><h2 id="archives">Archives</h2>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#953800;--shiki-dark:#FFA657">tar</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> -czf</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> backup.tar.gz</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> folder/</span><span style="color:#6E7781;--shiki-dark:#8B949E">     # create a .tar.gz</span></span>
<span class="line"><span style="color:#953800;--shiki-dark:#FFA657">tar</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> -xzf</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> backup.tar.gz</span><span style="color:#6E7781;--shiki-dark:#8B949E">             # extract</span></span>
<span class="line"><span style="color:#953800;--shiki-dark:#FFA657">tar</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> -tzf</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> backup.tar.gz</span><span style="color:#6E7781;--shiki-dark:#8B949E">             # list contents</span></span>
<span class="line"><span style="color:#953800;--shiki-dark:#FFA657">zip</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> -r</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> site.zip</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> public/</span><span style="color:#6E7781;--shiki-dark:#8B949E">            # create a .zip</span></span>
<span class="line"><span style="color:#953800;--shiki-dark:#FFA657">unzip</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> site.zip</span><span style="color:#6E7781;--shiki-dark:#8B949E">                     # extract a .zip</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>For <code>tar</code>: <strong>c</strong>reate, e<strong>x</strong>tract, <strong>t</strong> list, <strong>z</strong> gzip, <strong>f</strong> file name.</p>
<h2 id="ssh-and-copying-files">SSH and Copying Files</h2>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#953800;--shiki-dark:#FFA657">ssh</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> ada@server.example.com</span><span style="color:#6E7781;--shiki-dark:#8B949E">                  # connect</span></span>
<span class="line"><span style="color:#953800;--shiki-dark:#FFA657">ssh</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> -i</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> ~/.ssh/key.pem</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> ubuntu@1.2.3.4</span><span style="color:#6E7781;--shiki-dark:#8B949E">        # with a key file</span></span>
<span class="line"><span style="color:#953800;--shiki-dark:#FFA657">ssh-keygen</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> -t</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> ed25519</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> -C</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> "ada@example.com"</span><span style="color:#6E7781;--shiki-dark:#8B949E">  # create a key pair</span></span>
<span class="line"><span style="color:#953800;--shiki-dark:#FFA657">ssh-copy-id</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> ada@server.example.com</span><span style="color:#6E7781;--shiki-dark:#8B949E">          # install your key on a server</span></span>
<span class="line"><span style="color:#953800;--shiki-dark:#FFA657">scp</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> report.pdf</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> ada@server:/tmp/</span><span style="color:#6E7781;--shiki-dark:#8B949E">             # copy a file to a server</span></span>
<span class="line"><span style="color:#953800;--shiki-dark:#FFA657">scp</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> -r</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> ada@server:/var/log/app</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> ./logs</span><span style="color:#6E7781;--shiki-dark:#8B949E">       # copy a folder from it</span></span>
<span class="line"><span style="color:#953800;--shiki-dark:#FFA657">rsync</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> -av</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> --delete</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> dist/</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> ada@server:/var/www/</span><span style="color:#6E7781;--shiki-dark:#8B949E">  # sync, copying only changes</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><h2 id="environment-variables">Environment Variables</h2>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#0550AE;--shiki-dark:#79C0FF">echo</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> $HOME                     </span><span style="color:#6E7781;--shiki-dark:#8B949E"># print a variable</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">export</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> API_URL</span><span style="color:#CF222E;--shiki-dark:#FF7B72">=</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">http://localhost:8080   </span><span style="color:#6E7781;--shiki-dark:#8B949E"># set it for this session</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">API_URL</span><span style="color:#CF222E;--shiki-dark:#FF7B72">=</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">http://x</span><span style="color:#953800;--shiki-dark:#FFA657"> node</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> app.js</span><span style="color:#6E7781;--shiki-dark:#8B949E">   # set it for one command only</span></span>
<span class="line"><span style="color:#953800;--shiki-dark:#FFA657">env</span><span style="color:#6E7781;--shiki-dark:#8B949E">                            # list all</span></span>
<span class="line"><span style="color:#0550AE;--shiki-dark:#79C0FF">which</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> node</span><span style="color:#6E7781;--shiki-dark:#8B949E">                     # where a command lives</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>Add <code>export</code> lines to <code>~/.bashrc</code> or <code>~/.zshrc</code> to keep them in new terminals.</p>
<h2 id="shortcuts-and-history">Shortcuts and History</h2>
<div data-table-scroll><table>
<thead>
<tr>
<th>Keys / command</th>
<th>Does</th>
</tr>
</thead>
<tbody><tr>
<td>Tab</td>
<td>Complete a file or command name</td>
</tr>
<tr>
<td>↑ / ↓</td>
<td>Previous / next command</td>
</tr>
<tr>
<td>Ctrl+R</td>
<td>Search command history</td>
</tr>
<tr>
<td>Ctrl+A / Ctrl+E</td>
<td>Start / end of the line</td>
</tr>
<tr>
<td>Ctrl+U</td>
<td>Delete to the start of the line</td>
</tr>
<tr>
<td>Ctrl+L</td>
<td>Clear the screen</td>
</tr>
<tr>
<td><code>!!</code></td>
<td>Repeat the last command (<code>sudo !!</code>)</td>
</tr>
<tr>
<td><code>history</code></td>
<td>List past commands</td>
</tr>
<tr>
<td><code>alias ll=&#39;ls -la&#39;</code></td>
<td>Create a shortcut</td>
</tr>
</tbody></table>
</div>
`,headings:[{id:`moving-around`,text:`Moving Around`},{id:`files-and-folders`,text:`Files and Folders`},{id:`viewing-files`,text:`Viewing Files`},{id:`searching`,text:`Searching`},{id:`pipes-and-redirection`,text:`Pipes and Redirection`},{id:`permissions`,text:`Permissions`},{id:`processes`,text:`Processes`},{id:`disk-and-system`,text:`Disk and System`},{id:`networking`,text:`Networking`},{id:`archives`,text:`Archives`},{id:`ssh-and-copying-files`,text:`SSH and Copying Files`},{id:`environment-variables`,text:`Environment Variables`},{id:`shortcuts-and-history`,text:`Shortcuts and History`}],parents:[{title:`CheatSheet Hub`,description:`Explore a complete hub of developer cheat sheets—quick, reliable references for JavaScript, Java, SQL, HTML, and more. Ideal for all levels of programmers.`,date:`2025-04-05`,urlPath:`/blog/cheatsheet/`}],related:[{title:`Python Cheat Sheet`,description:`Python on one page: variables and types, strings and f-strings, lists, dicts and sets, comprehensions, functions and arguments, classes and dataclasses, files, exceptions, and the standard library modules you use most, with short examples.`,date:`2026-11-26`,urlPath:`/blog/cheatsheet/python/`},{title:`React Hooks Cheat Sheet`,description:`Every built-in React hook on one page, with a short example and when to use it: useState, useEffect, useRef, useContext, useReducer, useMemo, useCallback, useId, useTransition, useDeferredValue, React 19's use and useActionState, and custom hooks.`,date:`2026-11-26`,urlPath:`/blog/cheatsheet/react-hooks/`},{title:`Regex Cheat Sheet`,description:`Regular expressions on one page: characters, classes, quantifiers, anchors, groups, lookarounds and flags, with ready-to-use patterns for emails, dates, numbers and more, and how to use them in JavaScript and Python.`,date:`2026-11-21`,urlPath:`/blog/cheatsheet/regex/`},{title:`SQL Cheat Sheet`,description:`The SQL you use every day on one page: SELECT, filtering, sorting, joins, grouping, subqueries, CTEs, window functions, inserts, updates, deletes, tables, indexes and transactions, with short examples.`,date:`2026-11-21`,urlPath:`/blog/cheatsheet/sql/`}],relatedPages:[{title:`Chmod Calculator`,description:`Calculate Linux and Unix file permissions online for free: tick read, write and execute, or type 755 or rwxr-xr-x, and get the chmod command and a plain English explanation.`,urlPath:`/tools/chmod-calculator/`},{title:`Cron Expression Explainer`,description:`Explain cron expressions in plain English online for free, and see when they run next, in your time zone or UTC. Supports ranges, steps, names and @daily.`,urlPath:`/tools/cron-explainer/`},{title:`Git Playground`,description:`Practice Git online, free: type git commit, branch, switch, merge, rebase, cherry-pick, reset and revert in your browser, see the commit graph change live, and solve exercises.`,urlPath:`/playgrounds/git/`}]}})})}));