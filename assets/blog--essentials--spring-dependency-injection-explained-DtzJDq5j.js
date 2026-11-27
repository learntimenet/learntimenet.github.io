import{C as e,S as t,t as n,x as r}from"./LoaderHider-BqfxMDPa.js";import{t as i}from"./BlogArticlePage-DFskzRNx.js";var a=e(),o=t(),s=r();(0,o.createRoot)(document.getElementById(`root`)).render((0,s.jsx)(a.StrictMode,{children:(0,s.jsx)(n,{children:(0,s.jsx)(i,{article:{title:`Dependency Injection in Spring, Explained`,description:`Why Spring creates your objects for you. Dependency injection and the container, beans with @Component and @Service, constructor injection, @Bean methods, choosing between implementations with @Primary and @Qualifier, scopes, and testing without Spring.`,date:`2026-11-24`,urlPath:`/blog/essentials/spring-dependency-injection-explained/`,html:`<p>In a Spring Boot app you almost never write <code>new OrderService(…)</code>. You declare what each class needs in its constructor, and Spring builds the objects and wires them together. That&#39;s <strong>dependency injection</strong>, the core idea of Spring. Once it clicks, the rest of Spring is just more beans.</p>
<h2 id="the-problem-it-solves">The Problem It Solves</h2>
<p>Here a class creates what it needs itself:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">public</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> class</span><span style="color:#953800;--shiki-dark:#FFA657"> WelcomeService</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    private</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> final</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> EmailNotifier</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> notifier</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> =</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> new</span><span style="color:#8250DF;--shiki-dark:#D2A8FF"> EmailNotifier</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">();   </span><span style="color:#6E7781;--shiki-dark:#8B949E">// hard-wired</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">}</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>It works, but:</p>
<ul>
<li>You can&#39;t switch to SMS without editing <code>WelcomeService</code>.</li>
<li>A test can&#39;t replace the notifier with a fake, so it sends real emails.</li>
<li>If <code>EmailNotifier</code> itself needs a mail server, settings and a template engine, <code>WelcomeService</code> has to build all of those too.</li>
</ul>
<h2 id="the-idea-ask-don-t-build">The Idea: Ask, Don&#39;t Build</h2>
<p>Instead, the class <strong>asks</strong> for what it needs, through its constructor, and depends on an interface:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">public</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> interface</span><span style="color:#953800;--shiki-dark:#FFA657"> Notifier</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    String </span><span style="color:#8250DF;--shiki-dark:#D2A8FF">send</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(String </span><span style="color:#953800;--shiki-dark:#FFA657">to</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, String </span><span style="color:#953800;--shiki-dark:#FFA657">message</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">);</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">public</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> class</span><span style="color:#953800;--shiki-dark:#FFA657"> WelcomeService</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    private</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> final</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> Notifier</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> notifier;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    public</span><span style="color:#8250DF;--shiki-dark:#D2A8FF"> WelcomeService</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(Notifier </span><span style="color:#953800;--shiki-dark:#FFA657">notifier</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">) {</span></span>
<span class="line"><span style="color:#0550AE;--shiki-dark:#79C0FF">        this</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">.notifier </span><span style="color:#CF222E;--shiki-dark:#FF7B72">=</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> notifier;</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    public</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> String </span><span style="color:#8250DF;--shiki-dark:#D2A8FF">welcome</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(String </span><span style="color:#953800;--shiki-dark:#FFA657">user</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">) {</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">        return</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> notifier.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">send</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(user, </span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"Welcome!"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">);</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    }</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">}</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>Someone else decides which <code>Notifier</code> to pass in. In a Spring app, that someone is the <strong>Spring container</strong>. This is also called <strong>inversion of control</strong>: your class no longer controls how its dependencies are made.</p>
<h2 id="beans-and-the-container">Beans and the Container</h2>
<p>A <strong>bean</strong> is an object that Spring creates and manages. Mark a class with a stereotype annotation, and Spring finds it at startup:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">@</span><span style="color:#CF222E;--shiki-dark:#FF7B72">Component</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">public</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> class</span><span style="color:#953800;--shiki-dark:#FFA657"> EmailNotifier</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> implements</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> Notifier</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> { … }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">@</span><span style="color:#CF222E;--shiki-dark:#FF7B72">Service</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">public</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> class</span><span style="color:#953800;--shiki-dark:#FFA657"> WelcomeService</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> { … }</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><div data-table-scroll><table>
<thead>
<tr>
<th>Annotation</th>
<th>Meaning</th>
</tr>
</thead>
<tbody><tr>
<td><code>@Component</code></td>
<td>A general bean</td>
</tr>
<tr>
<td><code>@Service</code></td>
<td>Business logic</td>
</tr>
<tr>
<td><code>@Repository</code></td>
<td>Data access (also translates DB errors)</td>
</tr>
<tr>
<td><code>@RestController</code></td>
<td>Web endpoints</td>
</tr>
<tr>
<td><code>@Configuration</code></td>
<td>A class of <code>@Bean</code> methods</td>
</tr>
</tbody></table>
</div>
<p>They all make a bean; the names say what the class is for.</p>
<p>At startup, Spring creates <code>EmailNotifier</code>, sees that <code>WelcomeService</code>&#39;s constructor needs a <code>Notifier</code>, and passes it in. With a single constructor, you don&#39;t even need <code>@Autowired</code>.</p>
<h2 id="constructor-injection-is-the-right-default">Constructor Injection Is the Right Default</h2>
<p>Spring can also inject into fields (<code>@Autowired private Notifier notifier;</code>), but constructor injection is better:</p>
<ul>
<li>Fields can be <code>final</code>: the object is complete as soon as it exists.</li>
<li>Dependencies are visible in one place; a constructor with 8 parameters tells you the class does too much.</li>
<li>Tests can create the class with <code>new</code>, without Spring.</li>
</ul>
<h2 id="bean-beans-from-classes-you-don-t-own">@Bean: Beans From Classes You Don&#39;t Own</h2>
<p>You can&#39;t put <code>@Component</code> on a JDK or library class. Create the bean in a <code>@Configuration</code> class instead:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">@</span><span style="color:#CF222E;--shiki-dark:#FF7B72">Configuration</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">public</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> class</span><span style="color:#953800;--shiki-dark:#FFA657"> ClockConfig</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    @</span><span style="color:#CF222E;--shiki-dark:#FF7B72">Bean</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    public</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> Clock </span><span style="color:#8250DF;--shiki-dark:#D2A8FF">clock</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">() {</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">        return</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> Clock.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">systemUTC</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">();</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    }</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">}</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>Any bean can now ask for a <code>Clock</code>. Injecting the clock instead of calling <code>Instant.now()</code> everywhere also makes time-based code testable.</p>
<h2 id="several-implementations-primary-and-qualifier">Several Implementations: @Primary and @Qualifier</h2>
<p>Add an <code>SmsNotifier</code>, and Spring has two beans for <code>Notifier</code>. Startup fails: which one should it inject? Tell it:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">@</span><span style="color:#CF222E;--shiki-dark:#FF7B72">Component</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">@</span><span style="color:#CF222E;--shiki-dark:#FF7B72">Primary</span><span style="color:#6E7781;--shiki-dark:#8B949E">                       // the default choice</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">public</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> class</span><span style="color:#953800;--shiki-dark:#FFA657"> EmailNotifier</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> implements</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> Notifier</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> { … }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">@</span><span style="color:#CF222E;--shiki-dark:#FF7B72">Component</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"sms"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">)</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">public</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> class</span><span style="color:#953800;--shiki-dark:#FFA657"> SmsNotifier</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> implements</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> Notifier</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> { … }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">@</span><span style="color:#CF222E;--shiki-dark:#FF7B72">Service</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">public</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> class</span><span style="color:#953800;--shiki-dark:#FFA657"> WelcomeService</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    public</span><span style="color:#8250DF;--shiki-dark:#D2A8FF"> WelcomeService</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(Notifier </span><span style="color:#953800;--shiki-dark:#FFA657">notifier</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, @</span><span style="color:#CF222E;--shiki-dark:#FF7B72">Qualifier</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"sms"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">) Notifier </span><span style="color:#953800;--shiki-dark:#FFA657">sms</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">) { … }</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">}</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p><code>notifier</code> gets the <code>@Primary</code> email notifier, and <code>sms</code> gets the bean named &quot;sms&quot;. You can also inject <code>List&lt;Notifier&gt;</code> to get all of them, for example to send on every channel.</p>
<h2 id="scopes">Scopes</h2>
<p>By default, a bean is a <strong>singleton</strong>: one instance for the whole application, shared by everyone. So beans must not keep per-request data in fields; two requests at the same time would overwrite each other. Keep beans stateless, and pass request data as method parameters.</p>
<p>Other scopes exist, like <code>prototype</code> (a new instance each time) and <code>request</code> (one per HTTP request), but you&#39;ll rarely need them.</p>
<h2 id="testing-without-spring">Testing Without Spring</h2>
<p>Because <code>WelcomeService</code> gets everything through its constructor, a unit test needs no Spring at all:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">Notifier</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> fake</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> =</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> (to, message) </span><span style="color:#CF222E;--shiki-dark:#FF7B72">-></span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> "fake "</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> +</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> to;</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">WelcomeService</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> service</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> =</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> new</span><span style="color:#8250DF;--shiki-dark:#D2A8FF"> WelcomeService</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(fake, fake, Clock.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">system</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(ZoneId.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">of</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"Europe/Paris"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">)));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8250DF;--shiki-dark:#D2A8FF">assertEquals</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"fake ben | fake ben | Europe/Paris"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, service.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">welcome</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"ben"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">));</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>That&#39;s fast, and tests exactly one class. Use <code>@SpringBootTest</code> only for tests that check how beans work together.</p>
<h2 id="common-mistakes">Common Mistakes</h2>
<ul>
<li><strong>Field injection</strong> with <code>@Autowired</code> on private fields: hides dependencies and makes tests need Spring.</li>
<li><strong>State in singleton beans</strong>: a <code>private User currentUser;</code> field in a service is shared by every request.</li>
<li><strong>Calling <code>new</code> on a bean</strong>: an object you create yourself isn&#39;t managed by Spring, so its dependencies and <code>@Transactional</code> don&#39;t work.</li>
<li><strong>Circular dependencies</strong>: A needs B and B needs A. Spring Boot refuses them by default; split the shared logic into a third bean.</li>
</ul>
<h2 id="the-answer-in-short">The Answer in Short</h2>
<ol>
<li>Dependency injection means a class asks for its dependencies instead of creating them.</li>
<li>Spring finds classes marked <code>@Component</code>, <code>@Service</code> and friends, creates them as beans, and wires them by constructor.</li>
<li>Use constructor injection with <code>final</code> fields; add <code>@Bean</code> methods for classes you don&#39;t own.</li>
<li>With several implementations, choose with <code>@Primary</code> and <code>@Qualifier</code>.</li>
<li>Beans are singletons by default: keep them stateless, and test them with plain <code>new</code> and fakes.</li>
</ol>
`,headings:[{id:`the-problem-it-solves`,text:`The Problem It Solves`},{id:`the-idea-ask-don-t-build`,text:`The Idea: Ask, Don't Build`},{id:`beans-and-the-container`,text:`Beans and the Container`},{id:`constructor-injection-is-the-right-default`,text:`Constructor Injection Is the Right Default`},{id:`bean-beans-from-classes-you-don-t-own`,text:`@Bean: Beans From Classes You Don't Own`},{id:`several-implementations-primary-and-qualifier`,text:`Several Implementations: @Primary and @Qualifier`},{id:`scopes`,text:`Scopes`},{id:`testing-without-spring`,text:`Testing Without Spring`},{id:`common-mistakes`,text:`Common Mistakes`},{id:`the-answer-in-short`,text:`The Answer in Short`}],parents:[],related:[{title:`Exceptions in Java: Checked, Unchecked and try-with-resources`,description:`How Java reports errors, and how to handle them well. try, catch and finally, checked vs unchecked exceptions, try-with-resources to always close files and connections, custom exceptions, wrapping causes, and the mistakes to avoid.`,date:`2026-11-24`,urlPath:`/blog/essentials/java-exceptions-explained/`},{title:`Fetching Data in React: Loading, Errors and Race Conditions`,description:`Load data from an API in React the right way. A fetch in useEffect with loading and error states, checking response.ok, aborting stale requests to avoid race conditions, a reusable hook, and when to use a library like TanStack Query.`,date:`2026-11-24`,urlPath:`/blog/essentials/fetching-data-in-react/`},{title:`Forms in React: Controlled Inputs and Validation`,description:`Read and check what users type in React. Controlled inputs with useState, handling submit, checkboxes and selects, one state object for many fields, validation with helpful, accessible error messages, and when to use a form library.`,date:`2026-11-24`,urlPath:`/blog/essentials/forms-in-react/`},{title:`How to Approach a System Design Interview`,description:`A repeatable plan for a 45-minute system design interview, from requirements and estimates to the high-level design, deep dives and trade-offs, with the mistakes that cost candidates the most.`,date:`2026-11-24`,urlPath:`/blog/essentials/how-to-approach-a-system-design-interview/`}],relatedPages:[{title:`Spring Boot Quiz`,description:`Test your Spring and Spring Boot knowledge: dependency injection, beans and scopes, auto-configuration, REST controllers, transactions and profiles.`,urlPath:`/quiz/spring/`},{title:`Spring interview questions`,description:`Practice Spring Boot and microservices interview questions on dependency injection, startup, transactions, error handling, HTTP clients, and REST or Kafka, with clear answers.`,urlPath:`/interview/spring/`},{title:`Build a REST API With Spring Boot, Step by Step`,description:`Build a small book API with Spring Boot 4. A controller, a service, a JPA entity and repository, validation, clear error responses and a test, then try it with curl.`,urlPath:`/blog/essentials/build-a-rest-api-with-spring-boot/`}]}})})}));