import{C as e,S as t,t as n,x as r}from"./LoaderHider-1LGZUrKz.js";import{t as i}from"./BlogArticlePage-CdJBBEKR.js";var a=e(),o=t(),s=r();(0,o.createRoot)(document.getElementById(`root`)).render((0,s.jsx)(a.StrictMode,{children:(0,s.jsx)(n,{children:(0,s.jsx)(i,{article:{title:`Maven and Gradle Basics for Java Projects`,description:`What a build tool does for a Java project, and how to use the two most common ones. The standard folder layout, pom.xml and build.gradle.kts, dependencies and scopes, the commands you'll run every day, and the wrapper.`,date:`2026-11-24`,urlPath:`/blog/essentials/maven-and-gradle-basics/`,html:`<p>Compiling one Java file with <code>javac</code> is easy. A real project has hundreds of files, dozens of libraries, tests, and a JAR to produce. A <strong>build tool</strong> does all of that with one command, the same way on every machine. In Java, that&#39;s almost always Maven or Gradle.</p>
<h2 id="what-a-build-tool-does">What a Build Tool Does</h2>
<ul>
<li><strong>Downloads libraries</strong> (dependencies) and the libraries they need, from Maven Central.</li>
<li><strong>Compiles</strong> your code and your tests.</li>
<li><strong>Runs the tests</strong>, and stops the build if one fails.</li>
<li><strong>Packages</strong> the result, usually as a JAR file.</li>
<li>Makes the build <strong>repeatable</strong>: a new teammate or the CI server runs the same command and gets the same result.</li>
</ul>
<h2 id="the-standard-layout">The Standard Layout</h2>
<p>Both tools expect the same folders, so you rarely configure paths:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span>my-app/</span></span>
<span class="line"><span>├── pom.xml                (Maven)  or  build.gradle.kts (Gradle)</span></span>
<span class="line"><span>└── src/</span></span>
<span class="line"><span>    ├── main/</span></span>
<span class="line"><span>    │   ├── java/           your code: com/example/App.java</span></span>
<span class="line"><span>    │   └── resources/      config files, like application.properties</span></span>
<span class="line"><span>    └── test/</span></span>
<span class="line"><span>        └── java/           your tests: com/example/AppTest.java</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><h2 id="maven-pom-xml">Maven: pom.xml</h2>
<p>Maven describes the project in an XML file, the <strong>POM</strong> (Project Object Model):</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">&#x3C;</span><span style="color:#116329;--shiki-dark:#7EE787">project</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> xmlns</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">=</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"http://maven.apache.org/POM/4.0.0"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">></span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">  &#x3C;</span><span style="color:#116329;--shiki-dark:#7EE787">modelVersion</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">>4.0.0&#x3C;/</span><span style="color:#116329;--shiki-dark:#7EE787">modelVersion</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">  &#x3C;</span><span style="color:#116329;--shiki-dark:#7EE787">groupId</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">>com.example&#x3C;/</span><span style="color:#116329;--shiki-dark:#7EE787">groupId</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">></span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">  &#x3C;</span><span style="color:#116329;--shiki-dark:#7EE787">artifactId</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">>my-app&#x3C;/</span><span style="color:#116329;--shiki-dark:#7EE787">artifactId</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">></span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">  &#x3C;</span><span style="color:#116329;--shiki-dark:#7EE787">version</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">>1.0&#x3C;/</span><span style="color:#116329;--shiki-dark:#7EE787">version</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">  &#x3C;</span><span style="color:#116329;--shiki-dark:#7EE787">properties</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">></span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    &#x3C;</span><span style="color:#116329;--shiki-dark:#7EE787">maven.compiler.release</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">>21&#x3C;/</span><span style="color:#116329;--shiki-dark:#7EE787">maven.compiler.release</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">></span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    &#x3C;</span><span style="color:#116329;--shiki-dark:#7EE787">project.build.sourceEncoding</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">>UTF-8&#x3C;/</span><span style="color:#116329;--shiki-dark:#7EE787">project.build.sourceEncoding</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">></span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">  &#x3C;/</span><span style="color:#116329;--shiki-dark:#7EE787">properties</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">  &#x3C;</span><span style="color:#116329;--shiki-dark:#7EE787">dependencies</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">></span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    &#x3C;</span><span style="color:#116329;--shiki-dark:#7EE787">dependency</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">></span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">      &#x3C;</span><span style="color:#116329;--shiki-dark:#7EE787">groupId</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">>org.junit.jupiter&#x3C;/</span><span style="color:#116329;--shiki-dark:#7EE787">groupId</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">></span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">      &#x3C;</span><span style="color:#116329;--shiki-dark:#7EE787">artifactId</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">>junit-jupiter&#x3C;/</span><span style="color:#116329;--shiki-dark:#7EE787">artifactId</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">></span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">      &#x3C;</span><span style="color:#116329;--shiki-dark:#7EE787">version</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">>6.1.3&#x3C;/</span><span style="color:#116329;--shiki-dark:#7EE787">version</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">></span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">      &#x3C;</span><span style="color:#116329;--shiki-dark:#7EE787">scope</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">>test&#x3C;/</span><span style="color:#116329;--shiki-dark:#7EE787">scope</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">></span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    &#x3C;/</span><span style="color:#116329;--shiki-dark:#7EE787">dependency</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">></span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">  &#x3C;/</span><span style="color:#116329;--shiki-dark:#7EE787">dependencies</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">></span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">&#x3C;/</span><span style="color:#116329;--shiki-dark:#7EE787">project</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">></span></span></code></pre><button type="button" data-copy-code>Copy</button></div><ul>
<li><code>groupId</code>, <code>artifactId</code> and <code>version</code> identify your project, like a library&#39;s coordinates.</li>
<li><code>maven.compiler.release</code> sets the Java version.</li>
<li>Each <code>dependency</code> is a library, found by its coordinates on Maven Central.</li>
</ul>
<h3 id="maven-commands">Maven Commands</h3>
<div data-table-scroll><table>
<thead>
<tr>
<th>Command</th>
<th>Does</th>
</tr>
</thead>
<tbody><tr>
<td><code>mvn compile</code></td>
<td>Compiles the main code</td>
</tr>
<tr>
<td><code>mvn test</code></td>
<td>Compiles and runs the tests</td>
</tr>
<tr>
<td><code>mvn package</code></td>
<td>Tests, then builds the JAR in <code>target/</code></td>
</tr>
<tr>
<td><code>mvn install</code></td>
<td>Also copies the JAR to your local repository, for other projects</td>
</tr>
<tr>
<td><code>mvn clean</code></td>
<td>Deletes <code>target/</code>, for a fresh build</td>
</tr>
<tr>
<td><code>mvn dependency:tree</code></td>
<td>Shows every library and what brought it in</td>
</tr>
</tbody></table>
</div>
<p>Commands run a <strong>lifecycle</strong>: <code>mvn package</code> also runs <code>compile</code> and <code>test</code> first. <code>mvn clean package</code> is the usual &quot;build everything from scratch&quot;.</p>
<h2 id="gradle-build-gradle-kts">Gradle: build.gradle.kts</h2>
<p>Gradle describes the build in code, usually Kotlin (<code>build.gradle.kts</code>), sometimes Groovy (<code>build.gradle</code>):</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span>plugins {</span></span>
<span class="line"><span>    application</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>repositories {</span></span>
<span class="line"><span>    mavenCentral()</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>dependencies {</span></span>
<span class="line"><span>    implementation("com.google.guava:guava:33.4.5-jre")</span></span>
<span class="line"><span>    testImplementation("org.junit.jupiter:junit-jupiter:5.12.1")</span></span>
<span class="line"><span>    testRuntimeOnly("org.junit.platform:junit-platform-launcher")</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>java {</span></span>
<span class="line"><span>    toolchain {</span></span>
<span class="line"><span>        languageVersion = JavaLanguageVersion.of(21)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>application {</span></span>
<span class="line"><span>    mainClass = "com.example.App"</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>tasks.test {</span></span>
<span class="line"><span>    useJUnitPlatform()</span></span>
<span class="line"><span>}</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>The <code>java</code> toolchain even downloads the right JDK version if it isn&#39;t installed. <code>gradle init</code> creates a project like this for you.</p>
<h3 id="gradle-commands">Gradle Commands</h3>
<div data-table-scroll><table>
<thead>
<tr>
<th>Command</th>
<th>Does</th>
</tr>
</thead>
<tbody><tr>
<td><code>./gradlew build</code></td>
<td>Compiles, tests and packages (JAR in <code>build/libs/</code>)</td>
</tr>
<tr>
<td><code>./gradlew test</code></td>
<td>Runs the tests</td>
</tr>
<tr>
<td><code>./gradlew run</code></td>
<td>Runs the application</td>
</tr>
<tr>
<td><code>./gradlew clean</code></td>
<td>Deletes <code>build/</code></td>
</tr>
<tr>
<td><code>./gradlew dependencies</code></td>
<td>Shows the dependency tree</td>
</tr>
</tbody></table>
</div>
<p>Gradle only redoes what changed, and caches results, so repeat builds are fast.</p>
<h2 id="dependency-scopes">Dependency Scopes</h2>
<p>Not every library is needed everywhere:</p>
<div data-table-scroll><table>
<thead>
<tr>
<th>Needed for…</th>
<th>Maven scope</th>
<th>Gradle configuration</th>
</tr>
</thead>
<tbody><tr>
<td>Compiling and running the app</td>
<td><code>compile</code> (default)</td>
<td><code>implementation</code></td>
</tr>
<tr>
<td>Tests only</td>
<td><code>test</code></td>
<td><code>testImplementation</code></td>
</tr>
<tr>
<td>Running, not compiling (drivers)</td>
<td><code>runtime</code></td>
<td><code>runtimeOnly</code></td>
</tr>
<tr>
<td>Compiling, provided by the server</td>
<td><code>provided</code></td>
<td><code>compileOnly</code></td>
</tr>
</tbody></table>
</div>
<p>Putting JUnit in the test scope keeps it out of your production JAR.</p>
<h2 id="the-wrapper-mvnw-and-gradlew">The Wrapper: mvnw and gradlew</h2>
<p>Projects usually include a <strong>wrapper</strong> script (<code>./mvnw</code> or <code>./gradlew</code>) and commit it. It downloads the exact Maven or Gradle version the project needs, so nobody has to install anything, and everyone builds with the same version. Use the wrapper instead of a globally installed <code>mvn</code> or <code>gradle</code>.</p>
<h2 id="maven-or-gradle">Maven or Gradle?</h2>
<div data-table-scroll><table>
<thead>
<tr>
<th>Question</th>
<th>Maven</th>
<th>Gradle</th>
</tr>
</thead>
<tbody><tr>
<td>Configuration</td>
<td>XML, declarative, very uniform</td>
<td>Kotlin or Groovy code, flexible</td>
</tr>
<tr>
<td>Learning curve</td>
<td>Gentle</td>
<td>Steeper for custom builds</td>
</tr>
<tr>
<td>Build speed</td>
<td>Good</td>
<td>Faster on big projects (caching)</td>
</tr>
<tr>
<td>Common in</td>
<td>Enterprise and Spring projects</td>
<td>Android, large multi-module builds</td>
</tr>
</tbody></table>
</div>
<p>Both are excellent. Use whichever your team or project already uses. For a new Spring Boot app, either works; start.spring.io offers both.</p>
<h2 id="the-answer-in-short">The Answer in Short</h2>
<ol>
<li>A build tool downloads libraries, compiles, tests and packages your project with one command.</li>
<li>Both use the same layout: <code>src/main/java</code> for code, <code>src/test/java</code> for tests.</li>
<li>Maven uses <code>pom.xml</code> and commands like <code>mvn clean package</code>; Gradle uses <code>build.gradle.kts</code> and <code>./gradlew build</code>.</li>
<li>Use scopes so test libraries stay out of the production JAR.</li>
<li>Commit and use the wrapper, so everyone builds with the same version.</li>
</ol>
`,headings:[{id:`what-a-build-tool-does`,text:`What a Build Tool Does`},{id:`the-standard-layout`,text:`The Standard Layout`},{id:`maven-pom-xml`,text:`Maven: pom.xml`},{id:`gradle-build-gradle-kts`,text:`Gradle: build.gradle.kts`},{id:`dependency-scopes`,text:`Dependency Scopes`},{id:`the-wrapper-mvnw-and-gradlew`,text:`The Wrapper: mvnw and gradlew`},{id:`maven-or-gradle`,text:`Maven or Gradle?`},{id:`the-answer-in-short`,text:`The Answer in Short`}],parents:[],related:[{title:`Message Queues and Event Streaming Explained`,description:`Why systems put a queue between services. Queues vs event streams like Kafka, at-least-once delivery and idempotent consumers, retries and dead-letter queues, ordering, and backpressure.`,date:`2026-11-24`,urlPath:`/blog/essentials/message-queues-explained/`},{title:`Modern JavaScript for React: Arrow Functions, Destructuring, Spread and Modules`,description:`The JavaScript syntax on every line of React code, explained with before and after examples. Arrow functions, destructuring, spread and rest, immutable updates of arrays and objects, ?? and ?., and import and export.`,date:`2026-11-24`,urlPath:`/blog/essentials/modern-javascript-for-react/`},{title:`Promises and async/await Explained`,description:`How JavaScript waits for data without freezing the page. What a promise is, then and catch, async and await, error handling with try and catch, running requests in parallel with Promise.all, and the mistakes everyone makes.`,date:`2026-11-24`,urlPath:`/blog/essentials/promises-and-async-await-explained/`},{title:`React Components, JSX and Props Explained`,description:`How a React page is built from components. What JSX is and turns into, writing components, passing data down with props, children, rendering lists with keys, and conditional rendering.`,date:`2026-11-24`,urlPath:`/blog/essentials/react-components-jsx-and-props/`}],relatedPages:[{title:`Java Quiz`,description:`Test your Java basics: equality, strings, collections, exceptions, and the keywords that come up every day.`,urlPath:`/quiz/java/`},{title:`Unit Testing in Java With JUnit: A Beginner's Guide`,description:`Set up JUnit with Maven and write your first Java unit tests. Assertions, testing exceptions, @BeforeEach, parameterized tests, reading a failure and what makes a good test.`,urlPath:`/blog/essentials/unit-testing-java-with-junit/`}]}})})}));