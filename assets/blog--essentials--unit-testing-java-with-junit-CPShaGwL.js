import{D as e,E as t,T as n,t as r}from"./LoaderHider-BUpf6H2R.js";import{t as i}from"./BlogArticlePage-DkTsHkUW.js";var a=e(),o=t(),s=n();(0,o.createRoot)(document.getElementById(`root`)).render((0,s.jsx)(a.StrictMode,{children:(0,s.jsx)(r,{children:(0,s.jsx)(i,{article:{title:`Unit Testing in Java With JUnit: A Beginner's Guide`,description:`Set up JUnit with Maven and write your first Java unit tests. Assertions, testing exceptions, @BeforeEach, parameterized tests, reading a failure and what makes a good test.`,date:`2026-11-23`,urlPath:`/blog/essentials/unit-testing-java-with-junit/`,html:`<p>A unit test is a small piece of code that runs a piece of your code and checks the result. Run them after every change, and in about a second they tell you whether you broke something. That lets you change code without fear. JUnit is the standard tool for writing them in Java.</p>
<h2 id="set-up-junit-with-maven">Set Up JUnit With Maven</h2>
<p>The current version is JUnit 6, which needs Java 17 or later. Its testing API is called JUnit Jupiter. JUnit 5 uses the same Jupiter API, so everything below also works on JUnit 5 projects.</p>
<p>Add this to your <code>pom.xml</code>. The <code>junit-bom</code> entry picks matching versions for every JUnit part, so you only write the version once.</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">&#x3C;</span><span style="color:#116329;--shiki-dark:#7EE787">dependencyManagement</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">></span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">  &#x3C;</span><span style="color:#116329;--shiki-dark:#7EE787">dependencies</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">></span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    &#x3C;</span><span style="color:#116329;--shiki-dark:#7EE787">dependency</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">></span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">      &#x3C;</span><span style="color:#116329;--shiki-dark:#7EE787">groupId</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">>org.junit&#x3C;/</span><span style="color:#116329;--shiki-dark:#7EE787">groupId</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">></span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">      &#x3C;</span><span style="color:#116329;--shiki-dark:#7EE787">artifactId</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">>junit-bom&#x3C;/</span><span style="color:#116329;--shiki-dark:#7EE787">artifactId</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">></span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">      &#x3C;</span><span style="color:#116329;--shiki-dark:#7EE787">version</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">>6.1.3&#x3C;/</span><span style="color:#116329;--shiki-dark:#7EE787">version</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">></span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">      &#x3C;</span><span style="color:#116329;--shiki-dark:#7EE787">type</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">>pom&#x3C;/</span><span style="color:#116329;--shiki-dark:#7EE787">type</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">></span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">      &#x3C;</span><span style="color:#116329;--shiki-dark:#7EE787">scope</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">>import&#x3C;/</span><span style="color:#116329;--shiki-dark:#7EE787">scope</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">></span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    &#x3C;/</span><span style="color:#116329;--shiki-dark:#7EE787">dependency</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">></span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">  &#x3C;/</span><span style="color:#116329;--shiki-dark:#7EE787">dependencies</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">></span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">&#x3C;/</span><span style="color:#116329;--shiki-dark:#7EE787">dependencyManagement</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">&#x3C;</span><span style="color:#116329;--shiki-dark:#7EE787">dependencies</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">></span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">  &#x3C;</span><span style="color:#116329;--shiki-dark:#7EE787">dependency</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">></span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    &#x3C;</span><span style="color:#116329;--shiki-dark:#7EE787">groupId</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">>org.junit.jupiter&#x3C;/</span><span style="color:#116329;--shiki-dark:#7EE787">groupId</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">></span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    &#x3C;</span><span style="color:#116329;--shiki-dark:#7EE787">artifactId</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">>junit-jupiter&#x3C;/</span><span style="color:#116329;--shiki-dark:#7EE787">artifactId</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">></span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    &#x3C;</span><span style="color:#116329;--shiki-dark:#7EE787">scope</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">>test&#x3C;/</span><span style="color:#116329;--shiki-dark:#7EE787">scope</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">></span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">  &#x3C;/</span><span style="color:#116329;--shiki-dark:#7EE787">dependency</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">></span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">&#x3C;/</span><span style="color:#116329;--shiki-dark:#7EE787">dependencies</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">&#x3C;</span><span style="color:#116329;--shiki-dark:#7EE787">build</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">></span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">  &#x3C;</span><span style="color:#116329;--shiki-dark:#7EE787">plugins</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">></span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    &#x3C;</span><span style="color:#116329;--shiki-dark:#7EE787">plugin</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">></span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">      &#x3C;</span><span style="color:#116329;--shiki-dark:#7EE787">groupId</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">>org.apache.maven.plugins&#x3C;/</span><span style="color:#116329;--shiki-dark:#7EE787">groupId</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">></span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">      &#x3C;</span><span style="color:#116329;--shiki-dark:#7EE787">artifactId</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">>maven-surefire-plugin&#x3C;/</span><span style="color:#116329;--shiki-dark:#7EE787">artifactId</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">></span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">      &#x3C;</span><span style="color:#116329;--shiki-dark:#7EE787">version</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">>3.6.1&#x3C;/</span><span style="color:#116329;--shiki-dark:#7EE787">version</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">></span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    &#x3C;/</span><span style="color:#116329;--shiki-dark:#7EE787">plugin</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">></span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">  &#x3C;/</span><span style="color:#116329;--shiki-dark:#7EE787">plugins</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">></span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">&#x3C;/</span><span style="color:#116329;--shiki-dark:#7EE787">build</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">></span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>The Surefire plugin is what runs the tests during <code>mvn test</code>. Spring Boot projects already include JUnit through <code>spring-boot-starter-test</code>, so you can skip this step there.</p>
<p>Your code goes in <code>src/main/java</code>, and tests go in <code>src/test/java</code>, in the same package.</p>
<h2 id="the-code-to-test">The Code to Test</h2>
<p>A small shopping cart: it adds prices, refuses negative ones, and gives 10% off from 100.</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">package</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> com.example;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">import</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> java.util.ArrayList;</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">import</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> java.util.List;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">public</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> class</span><span style="color:#953800;--shiki-dark:#FFA657"> Cart</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> {</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    private</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> final</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> List</span><span style="color:#953800;--shiki-dark:#FFA657">&#x3C;</span><span style="color:#CF222E;--shiki-dark:#FF7B72">Double</span><span style="color:#953800;--shiki-dark:#FFA657">> </span><span style="color:#1F2328;--shiki-dark:#E6EDF3">prices</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> =</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> new</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> ArrayList&#x3C;>();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    public</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> void</span><span style="color:#8250DF;--shiki-dark:#D2A8FF"> add</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#CF222E;--shiki-dark:#FF7B72">double</span><span style="color:#953800;--shiki-dark:#FFA657"> price</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">) {</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">        if</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> (price </span><span style="color:#CF222E;--shiki-dark:#FF7B72">&#x3C;</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> 0</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">) {</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">            throw</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> new</span><span style="color:#8250DF;--shiki-dark:#D2A8FF"> IllegalArgumentException</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"price can't be negative: "</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> +</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> price);</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">        }</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">        prices.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">add</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(price);</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    public</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> int</span><span style="color:#8250DF;--shiki-dark:#D2A8FF"> size</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">() {</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">        return</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> prices.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">size</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">();</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6E7781;--shiki-dark:#8B949E">    /** The total, with 10% off from 100. */</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    public</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> double</span><span style="color:#8250DF;--shiki-dark:#D2A8FF"> total</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">() {</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">        double</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> sum</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> =</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> prices.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">stream</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">().</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">mapToDouble</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(Double</span><span style="color:#CF222E;--shiki-dark:#FF7B72">::</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">doubleValue).</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">sum</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">();</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">        return</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> sum </span><span style="color:#CF222E;--shiki-dark:#FF7B72">>=</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> 100</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> ?</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> sum </span><span style="color:#CF222E;--shiki-dark:#FF7B72">*</span><span style="color:#0550AE;--shiki-dark:#79C0FF"> 0.9</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> :</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> sum;</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    }</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">}</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><h2 id="your-first-test">Your First Test</h2>
<p>A test is a method marked <code>@Test</code> in a test class. By convention the class is named after the class it tests, plus <code>Test</code>:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">package</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> com.example;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">import</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> static</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> org.junit.jupiter.api.Assertions.assertEquals;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">import</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> org.junit.jupiter.api.Test;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">class</span><span style="color:#953800;--shiki-dark:#FFA657"> CartTest</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    @</span><span style="color:#CF222E;--shiki-dark:#FF7B72">Test</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    void</span><span style="color:#8250DF;--shiki-dark:#D2A8FF"> emptyCartCostsNothing</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">() {</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">        Cart</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> cart</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> =</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> new</span><span style="color:#8250DF;--shiki-dark:#D2A8FF"> Cart</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8250DF;--shiki-dark:#D2A8FF">        assertEquals</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#0550AE;--shiki-dark:#79C0FF">0.0</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, cart.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">total</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">());</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    }</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">}</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>Run <code>mvn test</code>, or click the green arrow next to the method in your editor. <code>assertEquals(expected, actual)</code> passes when both are equal and fails the test when they aren&#39;t. Put the expected value first: the failure message depends on it.</p>
<h2 id="arrange-act-assert">Arrange, Act, Assert</h2>
<p>Most good tests have three short parts, often separated by a blank line:</p>
<ol>
<li><strong>Arrange</strong>: create the objects and data you need.</li>
<li><strong>Act</strong>: call the one method you&#39;re testing.</li>
<li><strong>Assert</strong>: check the result.</li>
</ol>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">@</span><span style="color:#CF222E;--shiki-dark:#FF7B72">Test</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">void</span><span style="color:#8250DF;--shiki-dark:#D2A8FF"> addsUpThePrices</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">() {</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    Cart</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> cart</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> =</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> new</span><span style="color:#8250DF;--shiki-dark:#D2A8FF"> Cart</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">();     </span><span style="color:#6E7781;--shiki-dark:#8B949E">// arrange</span></span>
<span class="line"></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    cart.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">add</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#0550AE;--shiki-dark:#79C0FF">20.0</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">);             </span><span style="color:#6E7781;--shiki-dark:#8B949E">// act</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    cart.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">add</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#0550AE;--shiki-dark:#79C0FF">30.0</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8250DF;--shiki-dark:#D2A8FF">    assertEquals</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#0550AE;--shiki-dark:#79C0FF">50.0</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, cart.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">total</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(), </span><span style="color:#0550AE;--shiki-dark:#79C0FF">0.001</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">); </span><span style="color:#6E7781;--shiki-dark:#8B949E">// assert</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">}</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>The third argument, <code>0.001</code>, is a tolerance. Decimal numbers like <code>double</code> aren&#39;t always exact: <code>0.1 + 0.2</code> is <code>0.30000000000000004</code> in Java. Always compare <code>double</code> values with a tolerance. For money in real code, use <code>BigDecimal</code> or whole cents.</p>
<h2 id="the-assertions-you-ll-use-most">The Assertions You&#39;ll Use Most</h2>
<div data-table-scroll><table>
<thead>
<tr>
<th>Assertion</th>
<th>Passes when</th>
</tr>
</thead>
<tbody><tr>
<td><code>assertEquals(expected, actual)</code></td>
<td>Both are equal (<code>equals</code>)</td>
</tr>
<tr>
<td><code>assertEquals(expected, actual, delta)</code></td>
<td>Two decimals are close enough</td>
</tr>
<tr>
<td><code>assertTrue(condition)</code> / <code>assertFalse(...)</code></td>
<td>The condition is true / false</td>
</tr>
<tr>
<td><code>assertNull(value)</code> / <code>assertNotNull(...)</code></td>
<td>The value is / isn&#39;t <code>null</code></td>
</tr>
<tr>
<td><code>assertThrows(Type.class, () -&gt; ...)</code></td>
<td>The code throws that exception</td>
</tr>
<tr>
<td><code>assertAll(() -&gt; ..., () -&gt; ...)</code></td>
<td>Every check passes; reports them all</td>
</tr>
</tbody></table>
</div>
<p><code>assertAll</code> runs every check even when the first one fails, so you see every problem at once:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#8250DF;--shiki-dark:#D2A8FF">assertAll</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    () </span><span style="color:#CF222E;--shiki-dark:#FF7B72">-></span><span style="color:#8250DF;--shiki-dark:#D2A8FF"> assertEquals</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#0550AE;--shiki-dark:#79C0FF">2</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, cart.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">size</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">()),</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    () </span><span style="color:#CF222E;--shiki-dark:#FF7B72">-></span><span style="color:#8250DF;--shiki-dark:#D2A8FF"> assertEquals</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#0550AE;--shiki-dark:#79C0FF">50.0</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, cart.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">total</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(), </span><span style="color:#0550AE;--shiki-dark:#79C0FF">0.001</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">));</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><h2 id="testing-exceptions">Testing Exceptions</h2>
<p>To check that bad input is refused, wrap the call in a lambda. <code>assertThrows</code> returns the exception, so you can check its message too:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">@</span><span style="color:#CF222E;--shiki-dark:#FF7B72">Test</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">void</span><span style="color:#8250DF;--shiki-dark:#D2A8FF"> refusesNegativePrices</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">() {</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    Cart</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> cart</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> =</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> new</span><span style="color:#8250DF;--shiki-dark:#D2A8FF"> Cart</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    IllegalArgumentException</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> error</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> =</span></span>
<span class="line"><span style="color:#8250DF;--shiki-dark:#D2A8FF">        assertThrows</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(IllegalArgumentException.class, () </span><span style="color:#CF222E;--shiki-dark:#FF7B72">-></span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> cart.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">add</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#CF222E;--shiki-dark:#FF7B72">-</span><span style="color:#0550AE;--shiki-dark:#79C0FF">5.0</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8250DF;--shiki-dark:#D2A8FF">    assertEquals</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"price can't be negative: -5.0"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, error.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">getMessage</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">());</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">}</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><h2 id="setting-up-before-each-test">Setting Up Before Each Test</h2>
<p>When every test starts the same way, move that code into a method marked <code>@BeforeEach</code>. JUnit runs it before every test, with a new instance of the test class each time, so tests never share state:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">class</span><span style="color:#953800;--shiki-dark:#FFA657"> CartTest</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    private</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> Cart</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> cart;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    @</span><span style="color:#CF222E;--shiki-dark:#FF7B72">BeforeEach</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    void</span><span style="color:#8250DF;--shiki-dark:#D2A8FF"> setUp</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">() {</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">        cart </span><span style="color:#CF222E;--shiki-dark:#FF7B72">=</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> new</span><span style="color:#8250DF;--shiki-dark:#D2A8FF"> Cart</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">();</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    @</span><span style="color:#CF222E;--shiki-dark:#FF7B72">Test</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    @</span><span style="color:#CF222E;--shiki-dark:#FF7B72">DisplayName</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#0A3069;--shiki-dark:#A5D6FF">"gives 10% off from 100"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">)</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">    void</span><span style="color:#8250DF;--shiki-dark:#D2A8FF"> discountFrom100</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">() {</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">        cart.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">add</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#0550AE;--shiki-dark:#79C0FF">60.0</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">);</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">        cart.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">add</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#0550AE;--shiki-dark:#79C0FF">40.0</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8250DF;--shiki-dark:#D2A8FF">        assertEquals</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#0550AE;--shiki-dark:#79C0FF">90.0</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">, cart.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">total</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(), </span><span style="color:#0550AE;--shiki-dark:#79C0FF">0.001</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">);</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    }</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">}</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p><code>@DisplayName</code> gives a test a readable name in reports. There&#39;s also <code>@AfterEach</code> for clean-up, and <code>@BeforeAll</code> / <code>@AfterAll</code> (on <code>static</code> methods) for slow set-up done once per class.</p>
<h2 id="one-test-many-inputs">One Test, Many Inputs</h2>
<p>To check the same behavior with several values, write a parameterized test instead of copying the method. Each row of <code>@CsvSource</code> runs as its own test:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">@</span><span style="color:#CF222E;--shiki-dark:#FF7B72">ParameterizedTest</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#0550AE;--shiki-dark:#79C0FF">name</span><span style="color:#CF222E;--shiki-dark:#FF7B72"> =</span><span style="color:#0A3069;--shiki-dark:#A5D6FF"> "{0} costs {1}"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">)</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">@</span><span style="color:#CF222E;--shiki-dark:#FF7B72">CsvSource</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">({</span></span>
<span class="line"><span style="color:#0A3069;--shiki-dark:#A5D6FF">    "99.99, 99.99"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">,</span></span>
<span class="line"><span style="color:#0A3069;--shiki-dark:#A5D6FF">    "100.0, 90.0"</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">,</span></span>
<span class="line"><span style="color:#0A3069;--shiki-dark:#A5D6FF">    "200.0, 180.0"</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">})</span></span>
<span class="line"><span style="color:#CF222E;--shiki-dark:#FF7B72">void</span><span style="color:#8250DF;--shiki-dark:#D2A8FF"> appliesTheDiscountAtTheRightAmount</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(</span><span style="color:#CF222E;--shiki-dark:#FF7B72">double</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> price, </span><span style="color:#CF222E;--shiki-dark:#FF7B72">double</span><span style="color:#1F2328;--shiki-dark:#E6EDF3"> expected) {</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">    cart.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">add</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(price);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8250DF;--shiki-dark:#D2A8FF">    assertEquals</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(expected, cart.</span><span style="color:#8250DF;--shiki-dark:#D2A8FF">total</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">(), </span><span style="color:#0550AE;--shiki-dark:#79C0FF">0.001</span><span style="color:#1F2328;--shiki-dark:#E6EDF3">);</span></span>
<span class="line"><span style="color:#1F2328;--shiki-dark:#E6EDF3">}</span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>Notice the rows: just below 100, exactly 100, and above it. Bugs love the edges, so test the values right around every limit.</p>
<h2 id="reading-a-failure">Reading a Failure</h2>
<p>Say someone changes <code>sum &gt;= 100</code> to <code>sum &gt; 100</code>. Two tests now fail, and Maven prints:</p>
<div data-code-panel><pre class="shiki shiki-themes github-light-default github-dark-default code-block" tabindex="0"><code><span class="line"><span>[ERROR] Tests run: 7, Failures: 2, Errors: 0, Skipped: 0</span></span>
<span class="line"><span>[ERROR] com.example.CartTest.discountFrom100 &#x3C;&#x3C;&#x3C; FAILURE!</span></span>
<span class="line"><span>org.opentest4j.AssertionFailedError: expected: &#x3C;90.0> but was: &#x3C;100.0></span></span></code></pre><button type="button" data-copy-code>Copy</button></div><p>You get the test&#39;s name, what it expected, and what it got. That&#39;s often enough to find the bug without a debugger. A <strong>failure</strong> means an assertion didn&#39;t hold. An <strong>error</strong> means the test threw an exception you didn&#39;t expect: read its stack trace from the top.</p>
<h2 id="what-makes-a-good-test">What Makes a Good Test</h2>
<ul>
<li><strong>One behavior per test</strong>, with a name that says what it is: <code>refusesNegativePrices</code>, not <code>test3</code>.</li>
<li><strong>Fast and independent</strong>: no real database, network or clock, and no test depends on another one running first.</li>
<li><strong>Test what the code does, not how</strong>: call public methods and check results, so you can rewrite the inside without changing the tests.</li>
<li><strong>Test the edges</strong>: empty lists, zero, negative numbers, <code>null</code>, and the values around every limit.</li>
<li><strong>Watch it fail once</strong>: break the code on purpose, or write the test first. A test that has never failed might not test anything.</li>
</ul>
<p>When your class needs another object that is slow or hard to set up, like a payment service, the usual tool is Mockito: it creates a fake version whose answers you choose in the test.</p>
<h2 id="the-answer-in-short">The Answer in Short</h2>
<ol>
<li>Add <code>junit-jupiter</code> with the <code>junit-bom</code>, and the Surefire plugin, to <code>pom.xml</code>. Tests go in <code>src/test/java</code>.</li>
<li>Mark test methods with <code>@Test</code>, and check results with <code>assertEquals(expected, actual)</code>.</li>
<li>Write each test as arrange, act, assert, and compare decimals with a tolerance.</li>
<li>Use <code>assertThrows</code> for errors, <code>@BeforeEach</code> for shared set-up and <code>@ParameterizedTest</code> for many inputs.</li>
<li>Keep tests small, fast and independent, and test the edges.</li>
</ol>
`,headings:[{id:`set-up-junit-with-maven`,text:`Set Up JUnit With Maven`},{id:`the-code-to-test`,text:`The Code to Test`},{id:`your-first-test`,text:`Your First Test`},{id:`arrange-act-assert`,text:`Arrange, Act, Assert`},{id:`the-assertions-you-ll-use-most`,text:`The Assertions You'll Use Most`},{id:`testing-exceptions`,text:`Testing Exceptions`},{id:`setting-up-before-each-test`,text:`Setting Up Before Each Test`},{id:`one-test-many-inputs`,text:`One Test, Many Inputs`},{id:`reading-a-failure`,text:`Reading a Failure`},{id:`what-makes-a-good-test`,text:`What Makes a Good Test`},{id:`the-answer-in-short`,text:`The Answer in Short`}],parents:[],related:[{title:`HTTP Caching Explained: Cache-Control, ETag and Friends`,description:`How browsers and CDNs decide whether to reuse a response, with Cache-Control, ETag, Last-Modified and 304 Not Modified. Plus the settings that work for HTML, versioned assets, APIs and private data.`,date:`2026-11-21`,urlPath:`/blog/essentials/http-caching-explained/`},{title:`REST API Design: 10 Rules That Age Well`,description:`Resource names, HTTP methods, status codes, errors, pagination, filtering, versioning and idempotency. Ten practical rules for APIs that clients find easy to use and you find easy to change.`,date:`2026-11-21`,urlPath:`/blog/essentials/rest-api-design-best-practices/`},{title:`SQL Joins Explained With One Small Example`,description:`INNER, LEFT, RIGHT, FULL and CROSS joins, plus self joins and anti joins, all on the same two tiny tables, so you can see exactly which rows each one returns.`,date:`2026-11-21`,urlPath:`/blog/essentials/sql-joins-explained/`},{title:`The JavaScript Event Loop, Explained`,description:`Why setTimeout(fn, 0) doesn't run right away, why promises run before timers, and how one thread handles clicks, network calls and rendering. With examples you can predict line by line.`,date:`2026-11-21`,urlPath:`/blog/essentials/javascript-event-loop-explained/`}],relatedPages:[{title:`Java Quiz`,description:`Test your Java basics: equality, strings, collections, exceptions, and the keywords that come up every day.`,urlPath:`/quiz/java/`},{title:`Java interview questions`,description:`Practice Java interview questions on HashMap and ConcurrentHashMap, JVM memory, garbage collection, concurrency, and records, with clear answers and code.`,urlPath:`/interview/java/`}]}})})}));