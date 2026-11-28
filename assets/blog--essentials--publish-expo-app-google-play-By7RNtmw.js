import{C as e,S as t,t as n,x as r}from"./LoaderHider-B2RGA5Hn.js";import{t as i}from"./BlogArticlePage-CY-ftdK2.js";var a=e(),o=t(),s=r();(0,o.createRoot)(document.getElementById(`root`)).render((0,s.jsx)(a.StrictMode,{children:(0,s.jsx)(n,{children:(0,s.jsx)(i,{article:{title:`How to Publish Your First Expo App on the Google Play Store`,description:`A step-by-step guide to ship an Expo React Native app on Google Play. Set up app.json, build an Android App Bundle with EAS Build, create the Play Console listing, pass the 12-tester closed test, release to production, and ship updates.`,date:`2026-11-26`,urlPath:`/blog/essentials/publish-expo-app-google-play/`,html:`<p>Your Expo app runs on your phone through Expo Go or a development build, and now you want it on Google Play, where anyone can install it. The process has more steps than a web deploy: a developer account, a signed build, a store listing, a few forms, and for new personal accounts, a two-week test with real testers. None of it is hard once you know the order.</p>
<p>This guide uses <strong>EAS</strong> (Expo Application Services) to build and sign the app, so you don&#39;t need Android Studio.</p>
<h2 id="what-you-need">What You Need</h2>
<ul>
<li>An Expo app that works on Android. Test it on a real device first.</li>
<li>A free <a href="https://expo.dev/signup">Expo account</a>.</li>
<li>A <strong>Google Play developer account</strong>: a one-time $25 fee, and Google verifies your identity, which can take a few days. Start this first.</li>
<li>A <strong>privacy policy</strong> URL. Google asks for one for every app, even one that collects nothing. A simple page on your website or a public document is enough.</li>
<li>Store images: a 512×512 PNG icon, a 1024×500 feature graphic, and at least two phone screenshots.</li>
</ul>
<h2 id="personal-or-organization-account">Personal or Organization Account?</h2>
<p>When you create the developer account, you choose between two types:</p>
<div data-table-scroll><table>
<thead>
<tr>
<th>Account type</th>
<th>Who it&#39;s for</th>
<th>Extra requirement</th>
</tr>
</thead>
<tbody><tr>
<td>Personal</td>
<td>Individuals and side projects</td>
<td>Closed test with at least 12 testers for 14 days before production</td>
</tr>
<tr>
<td>Organization</td>
<td>Companies, with a D-U-N-S number</td>
<td>No testing requirement, but company verification takes longer</td>
</tr>
</tbody></table>
</div>
<p>Most first apps go with a personal account. Plan for the closed test: it&#39;s the step that takes the longest.</p>
<h2 id="1-set-up-app-json">1. Set Up app.json</h2>
<p>Open <code>app.json</code> (or <code>app.config.js</code>) and check the Android fields:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">{</span></span>
<span class="line"><span style="color:#116329;--shiki-dark:#7EE787">  "expo"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">: {</span></span>
<span class="line"><span style="color:#116329;--shiki-dark:#7EE787">    "name"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">: </span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"Habit Tracker"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">,</span></span>
<span class="line"><span style="color:#116329;--shiki-dark:#7EE787">    "slug"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">: </span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"habit-tracker"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">,</span></span>
<span class="line"><span style="color:#116329;--shiki-dark:#7EE787">    "version"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">: </span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"1.0.0"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">,</span></span>
<span class="line"><span style="color:#116329;--shiki-dark:#7EE787">    "icon"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">: </span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"./assets/icon.png"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">,</span></span>
<span class="line"><span style="color:#116329;--shiki-dark:#7EE787">    "android"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">: {</span></span>
<span class="line"><span style="color:#116329;--shiki-dark:#7EE787">      "package"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">: </span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"com.yourname.habittracker"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">,</span></span>
<span class="line"><span style="color:#116329;--shiki-dark:#7EE787">      "adaptiveIcon"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">: {</span></span>
<span class="line"><span style="color:#116329;--shiki-dark:#7EE787">        "foregroundImage"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">: </span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"./assets/adaptive-icon.png"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">,</span></span>
<span class="line"><span style="color:#116329;--shiki-dark:#7EE787">        "backgroundColor"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">: </span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"#ffffff"</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">      },</span></span>
<span class="line"><span style="color:#116329;--shiki-dark:#7EE787">      "permissions"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">: []</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    }</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">  }</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">}</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><ul>
<li><strong><code>android.package</code></strong> is the app&#39;s permanent ID on Google Play. Pick it carefully: once you upload a build, it can never change. Use reverse domain style, lowercase, like <code>com.yourname.appname</code>.</li>
<li><strong><code>version</code></strong> is the version users see, like <code>1.0.0</code>.</li>
<li><strong><code>permissions</code></strong>: an empty list asks only for the permissions your libraries need. Every extra permission means more questions in the Play Console and less trust from users.</li>
</ul>
<p>Android also needs a <strong>version code</strong>, a whole number that must grow with every upload. You&#39;ll let EAS handle it in the next step.</p>
<h2 id="2-build-an-android-app-bundle-with-eas">2. Build an Android App Bundle With EAS</h2>
<p>Install the EAS CLI, log in, and create the build configuration:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#953800;--shiki-dark:#FFA657">npm</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> install</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> -g</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> eas-cli</span></span>
<span class="line"><span style="color:#953800;--shiki-dark:#FFA657">eas</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> login</span></span>
<span class="line"><span style="color:#953800;--shiki-dark:#FFA657">eas</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> build:configure</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>This creates <code>eas.json</code>. Make the production profile increase the version code on its own:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">{</span></span>
<span class="line"><span style="color:#116329;--shiki-dark:#7EE787">  "cli"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">: {</span></span>
<span class="line"><span style="color:#116329;--shiki-dark:#7EE787">    "appVersionSource"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">: </span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"remote"</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">  },</span></span>
<span class="line"><span style="color:#116329;--shiki-dark:#7EE787">  "build"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">: {</span></span>
<span class="line"><span style="color:#116329;--shiki-dark:#7EE787">    "preview"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">: {</span></span>
<span class="line"><span style="color:#116329;--shiki-dark:#7EE787">      "android"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">: { </span><span style="color:#116329;--shiki-dark:#7EE787">"buildType"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">: </span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"apk"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> }</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    },</span></span>
<span class="line"><span style="color:#116329;--shiki-dark:#7EE787">    "production"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">: {</span></span>
<span class="line"><span style="color:#116329;--shiki-dark:#7EE787">      "autoIncrement"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">: </span><span style="color:#0550AE;--shiki-dark:#79C0FF">true</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    }</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">  }</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">}</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>With <code>appVersionSource</code> set to <code>remote</code>, EAS stores the version code on its servers, and <code>autoIncrement</code> adds one for each production build. You never get the &quot;version code has already been used&quot; error.</p>
<p>Now build:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#953800;--shiki-dark:#FFA657">eas</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> build</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> --platform</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> android</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> --profile</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> production</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>The first time, EAS asks to <strong>generate a keystore</strong>: say yes. The keystore is the key that signs your app, and EAS keeps it safe on its servers. Google Play only accepts updates signed with the same key, so don&#39;t lose it if you ever manage it yourself.</p>
<p>The build runs in the cloud and takes 10 to 20 minutes, sometimes more on the free plan, which has a queue and a monthly build limit. At the end you get a link to an <strong><code>.aab</code> file</strong> (Android App Bundle), the format Google Play requires for new apps.</p>
<h3 id="test-the-real-build-first">Test the Real Build First</h3>
<p>The <code>preview</code> profile above builds an <strong><code>.apk</code></strong> you can install directly on any Android phone:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#953800;--shiki-dark:#FFA657">eas</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> build</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> --platform</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> android</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> --profile</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> preview</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>Open the link on your phone, install it, and test the app as a user would. A production build has no development menu and talks to your real backend, so bugs that never showed up in development often appear here.</p>
<h2 id="3-create-the-app-in-the-play-console">3. Create the App in the Play Console</h2>
<p>In the <a href="https://play.google.com/console">Google Play Console</a>, click <strong>Create app</strong>:</p>
<ol>
<li>Enter the app name, the default language, and choose <strong>App</strong> and <strong>Free</strong> (a free app can never become paid later).</li>
<li>Accept the declarations and create it.</li>
</ol>
<p>The dashboard now shows a checklist of setup tasks. Google renames menus from time to time, so if a page below has moved, follow that checklist. Two groups matter for the first release.</p>
<h3 id="store-listing">Store Listing</h3>
<p>On the <strong>Main store listing</strong> page (under Store presence), fill in:</p>
<div data-table-scroll><table>
<thead>
<tr>
<th>Field</th>
<th>Limit and tips</th>
</tr>
</thead>
<tbody><tr>
<td>App name</td>
<td>30 characters. The name people search for</td>
</tr>
<tr>
<td>Short description</td>
<td>80 characters. Shown first: say what the app does</td>
</tr>
<tr>
<td>Full description</td>
<td>4,000 characters. Features, who it&#39;s for, in plain words</td>
</tr>
<tr>
<td>App icon</td>
<td>512×512 PNG, up to 1 MB</td>
</tr>
<tr>
<td>Feature graphic</td>
<td>1024×500, shown at the top of your page</td>
</tr>
<tr>
<td>Phone screenshots</td>
<td>At least 2. Show the main screens, real content, no empty states</td>
</tr>
</tbody></table>
</div>
<h3 id="app-content">App Content</h3>
<p>On the <strong>App content</strong> page, Google asks a series of questions. Answer each one honestly, since a wrong answer is a common reason for rejection:</p>
<ul>
<li><strong>Privacy policy</strong>: the URL of your policy.</li>
<li><strong>App access</strong>: if parts of the app need a login, give the reviewers a test account.</li>
<li><strong>Ads</strong>: whether the app shows ads.</li>
<li><strong>Content rating</strong>: a questionnaire about violence, user content and so on. It gives your app its age rating.</li>
<li><strong>Target audience</strong>: the age groups. Choosing children adds strict extra rules.</li>
<li><strong>Data safety</strong>: what data the app and its libraries collect, why, and whether it&#39;s shared. Check what your analytics, crash reporting and login libraries collect, not just your own code.</li>
</ul>
<h2 id="4-upload-the-first-build-by-hand">4. Upload the First Build by Hand</h2>
<p>Google requires the <strong>first upload</strong> of an app to be done in the Play Console, not through the API. Download the <code>.aab</code> from the EAS build page, then:</p>
<ol>
<li>Open <strong>Testing → Internal testing</strong>, and create a release.</li>
<li>Accept <strong>Play App Signing</strong> when asked. Google then signs the app delivered to users, and your EAS key becomes the <em>upload key</em>. If you ever lose the upload key, Google can reset it, which wasn&#39;t possible in the old days.</li>
<li>Upload the <code>.aab</code>, add release notes like &quot;First release&quot;, and roll it out.</li>
<li>Under the <strong>Testers</strong> tab, add your own email in a list, and open the opt-in link on your phone.</li>
</ol>
<p>Internal testing is fast, often minutes, and lets you check the app installed from the real store before anyone else sees it.</p>
<h2 id="5-run-the-closed-test-personal-accounts">5. Run the Closed Test (Personal Accounts)</h2>
<p>For a personal account created after November 2023, Google won&#39;t open production until you&#39;ve run a <strong>closed test with at least 12 testers who stay opted in for 14 days in a row</strong>. Then you apply for production access and answer a few questions about the test.</p>
<ol>
<li>Open <strong>Testing → Closed testing</strong>, create a track, and promote your build or upload a new one.</li>
<li>Add testers by email list or Google Group. They need a Google account and an Android phone.</li>
<li>Share the opt-in link. Each tester must accept, then install the app from Google Play.</li>
<li>Wait 14 days. Testers must stay opted in for the whole time; if someone leaves, the count drops.</li>
</ol>
<p>Tips that save a restart:</p>
<ul>
<li><strong>Invite more than 12</strong>, say 15 to 20. Some will forget to opt in or uninstall.</li>
<li>Ask testers to actually <strong>use</strong> the app and send feedback. Google asks what you learned and changed, and an app nobody opened can be refused.</li>
<li>Ship one or two updates during the test, with the fixes they found. It shows the test was real.</li>
</ul>
<h2 id="6-release-to-production">6. Release to Production</h2>
<p>Once production access is granted:</p>
<ol>
<li>Open <strong>Production</strong>, and create a release with your latest build.</li>
<li>Choose the <strong>countries</strong> where the app is available.</li>
<li>Write release notes, review the summary, and click <strong>Send for review</strong>.</li>
</ol>
<p>The first review usually takes from a few hours to a few days, sometimes up to a week. You get an email when it&#39;s approved, and the app goes live shortly after. If it&#39;s rejected, the email says which policy: fix it, answer in the Console, and send it again.</p>
<h2 id="ship-updates">Ship Updates</h2>
<p>For every new version, raise <code>version</code> in <code>app.json</code> if you want users to see a new number, then build and submit:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#953800;--shiki-dark:#FFA657">eas</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> build</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> --platform</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> android</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> --profile</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> production</span></span>
<span class="line"><span style="color:#953800;--shiki-dark:#FFA657">eas</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> submit</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> --platform</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> android</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> --latest</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p><code>eas submit</code> uploads the latest build to Google Play for you. It needs a <strong>Google service account key</strong>: create a service account in Google Cloud, give it access in the Play Console under <strong>Users and permissions</strong>, and point EAS to its JSON key when asked. You can also keep uploading the <code>.aab</code> by hand.</p>
<h3 id="fix-javascript-without-a-store-review">Fix JavaScript Without a Store Review</h3>
<p>If a change touches only JavaScript, styles or images, <strong>EAS Update</strong> sends it straight to installed apps, with no new build:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#953800;--shiki-dark:#FFA657">npx</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> expo</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> install</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> expo-updates</span></span>
<span class="line"><span style="color:#953800;--shiki-dark:#FFA657">eas</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> update</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> --channel</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> production</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> --message</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> "Fix crash on empty list"</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>Users get the fix the next time they open the app. A change that adds a native library, a permission or a new Expo SDK version still needs a full build and a store review. Use updates for fixes, not to change what the app is about: store policies still apply.</p>
<h2 id="common-problems">Common Problems</h2>
<div data-table-scroll><table>
<thead>
<tr>
<th>Problem</th>
<th>What happened</th>
<th>Fix</th>
</tr>
</thead>
<tbody><tr>
<td>&quot;Version code has already been used&quot;</td>
<td>Same version code as an earlier upload</td>
<td>Set <code>appVersionSource: remote</code> and <code>autoIncrement: true</code></td>
</tr>
<tr>
<td>&quot;Package name already exists&quot;</td>
<td>Another app uses that <code>android.package</code></td>
<td>Choose a new, unique package name before the first upload</td>
</tr>
<tr>
<td>Upload rejected: wrong signing key</td>
<td>The build was signed with a different keystore</td>
<td>Build with the same EAS project, or ask Google to reset the upload key</td>
</tr>
<tr>
<td>App crashes only in the store build</td>
<td>Missing environment variables, or dev-only code</td>
<td>Test the <code>preview</code> APK; set variables in EAS for each profile</td>
</tr>
<tr>
<td>&quot;Target API level&quot; warning</td>
<td>Google raises the minimum Android version yearly</td>
<td>Upgrade to a recent Expo SDK, which targets a level Play accepts</td>
</tr>
<tr>
<td>Production access refused after closed test</td>
<td>Too few active testers, or no real feedback</td>
<td>Run the test again with more engaged testers and ship fixes</td>
</tr>
</tbody></table>
</div>
<h2 id="the-answer-in-short">The Answer in Short</h2>
<ol>
<li>Create a Google Play developer account first: it costs $25 once and verification takes days.</li>
<li>Set a permanent <code>android.package</code> in <code>app.json</code>, and let EAS manage the version code with <code>appVersionSource: remote</code> and <code>autoIncrement</code>.</li>
<li>Build an <code>.aab</code> with <code>eas build --platform android --profile production</code>, and test a <code>preview</code> APK on a real phone.</li>
<li>Create the app in the Play Console, fill in the store listing and every App content form honestly, and upload the first build by hand to internal testing.</li>
<li>With a personal account, run a closed test with at least 12 testers for 14 days, then apply for production and send the release for review.</li>
<li>Ship new versions with <code>eas build</code> and <code>eas submit</code>, and JavaScript-only fixes with <code>eas update</code>.</li>
</ol>
`,headings:[{id:`what-you-need`,text:`What You Need`},{id:`personal-or-organization-account`,text:`Personal or Organization Account?`},{id:`1-set-up-app-json`,text:`1. Set Up app.json`},{id:`2-build-an-android-app-bundle-with-eas`,text:`2. Build an Android App Bundle With EAS`},{id:`3-create-the-app-in-the-play-console`,text:`3. Create the App in the Play Console`},{id:`4-upload-the-first-build-by-hand`,text:`4. Upload the First Build by Hand`},{id:`5-run-the-closed-test-personal-accounts`,text:`5. Run the Closed Test (Personal Accounts)`},{id:`6-release-to-production`,text:`6. Release to Production`},{id:`ship-updates`,text:`Ship Updates`},{id:`common-problems`,text:`Common Problems`},{id:`the-answer-in-short`,text:`The Answer in Short`}],parents:[],related:[{title:`LEAD and LAG in SQL, Explained with Examples`,description:`LEAD() OVER reads a value from the next row, and LAG() from the previous one, without a self join. Learn the syntax, PARTITION BY and ORDER BY, the offset and default arguments, and how to use them for time between orders, month-over-month changes and finding the last row.`,date:`2026-11-25`,urlPath:`/blog/essentials/lead-and-lag-in-sql/`},{title:`Should You Scale Your Database Vertically or Horizontally?`,description:`Your database is the bottleneck. Should you buy a bigger machine or spread it over many? Compare vertical and horizontal database scaling on limits, cost, complexity and risk, and follow a step-by-step order that avoids sharding until you really need it.`,date:`2026-11-25`,urlPath:`/blog/essentials/scale-database-vertically-or-horizontally/`},{title:`Classes and Objects in Java`,description:`Model your own data in Java. Classes and objects, fields and methods, constructors and this, private fields with methods that protect the rules, static members, toString, and how object references work.`,date:`2026-11-24`,urlPath:`/blog/essentials/java-classes-and-objects/`},{title:`Control Flow in Java: if, switch and Loops`,description:`Make decisions and repeat work in Java. if and else, the ternary operator, the modern switch expression with patterns and guards, for, for-each, while and do-while loops, and break and continue.`,date:`2026-11-24`,urlPath:`/blog/essentials/java-control-flow-if-switch-loops/`}],relatedPages:[{title:`React Quiz`,description:`Test your React skills: components, props, state, hooks, effects, keys, and how rendering works.`,urlPath:`/quiz/react/`},{title:`Senior React developer interview questions`,description:`Practice the questions asked to a senior React developer: rendering and re-renders, hooks and effects, state and data fetching, performance and the React Compiler, Suspense and React 19, Server Components and streaming, TypeScript, accessibility and testing.`,urlPath:`/interview/senior-react-developer/`}]}})})}));