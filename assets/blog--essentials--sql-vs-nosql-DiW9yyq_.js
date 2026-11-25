import{E as e,T as t,t as n,w as r}from"./LoaderHider-DMADG9b0.js";import{t as i}from"./BlogArticlePage-BJ9m-mmZ.js";var a=e(),o=t(),s=r();(0,o.createRoot)(document.getElementById(`root`)).render((0,s.jsx)(a.StrictMode,{children:(0,s.jsx)(n,{children:(0,s.jsx)(i,{article:{title:`SQL vs NoSQL: How to Choose a Database`,description:`Relational, document, key-value, wide-column and graph databases, what each is good at, and a simple way to choose. Spoiler, PostgreSQL is the right default more often than you'd think.`,date:`2026-11-24`,urlPath:`/blog/essentials/sql-vs-nosql/`,html:`<p>&quot;Should we use SQL or NoSQL?&quot; comes up in every design. The honest answer starts with what your data looks like and how you read it, not with what&#39;s popular. Here are the main kinds of databases, what each does well, and how to pick.</p>
<h2 id="relational-sql-databases">Relational (SQL) Databases</h2>
<p>PostgreSQL, MySQL, SQL Server, Oracle. Data lives in <strong>tables with a fixed schema</strong>, linked by keys, and you ask questions in SQL.</p>
<p>They&#39;re good at:</p>
<ul>
<li><strong>Relationships:</strong> customers, orders and products, joined in one query.</li>
<li><strong>Transactions:</strong> move money between two accounts, all or nothing (ACID).</li>
<li><strong>Constraints:</strong> unique emails, foreign keys, <code>NOT NULL</code>. The database refuses bad data.</li>
<li><strong>Questions you didn&#39;t plan for:</strong> any filter, group or join, later, with an index.</li>
</ul>
<p>Their limit: one database server takes all the writes. They scale up well, and reads scale with replicas, but spreading writes over many machines (sharding) is hard work.</p>
<h2 id="nosql-four-different-families">NoSQL: Four Different Families</h2>
<p>&quot;NoSQL&quot; isn&#39;t one thing. It&#39;s four families built for different access patterns.</p>
<h3 id="document-databases">Document Databases</h3>
<p>MongoDB, Couchbase, Firestore. Each record is a <strong>JSON-like document</strong> that can hold nested data, and documents in one collection can have different fields.</p>
<p>Good for data you read as a whole, like a product with its variants and attributes, or a user profile. Less good when you need to join across collections often.</p>
<h3 id="key-value-stores">Key-Value Stores</h3>
<p>Redis, DynamoDB (also more than that), Memcached. A giant dictionary: give a <strong>key</strong>, get a <strong>value</strong>, in a millisecond or less.</p>
<p>Good for caches, sessions, counters, rate limits and shopping carts. You can only look things up by key, so plan your keys carefully.</p>
<h3 id="wide-column-stores">Wide-Column Stores</h3>
<p>Cassandra, ScyllaDB, HBase, Bigtable. Rows are grouped by a <strong>partition key</strong> and sorted within it, spread over many machines.</p>
<p>Good for huge write volumes: sensor data, logs, messages, activity feeds. You design the tables around the exact queries you&#39;ll run, and other queries are slow or impossible.</p>
<h3 id="graph-databases">Graph Databases</h3>
<p>Neo4j, Amazon Neptune. Data is <strong>nodes and the edges between them</strong>.</p>
<p>Good when the relationships are the point: &quot;friends of friends who like this&quot;, fraud rings, recommendations. Overkill for everything else.</p>
<h2 id="side-by-side">Side by Side</h2>
<div data-table-scroll><table>
<thead>
<tr>
<th>Need</th>
<th>Good fit</th>
</tr>
</thead>
<tbody><tr>
<td>Related data, transactions, flexible queries</td>
<td>Relational (PostgreSQL, MySQL)</td>
</tr>
<tr>
<td>Self-contained records with varying fields</td>
<td>Document (MongoDB)</td>
</tr>
<tr>
<td>Very fast lookups by key, caching, sessions</td>
<td>Key-value (Redis, DynamoDB)</td>
</tr>
<tr>
<td>Massive writes, queries known in advance</td>
<td>Wide-column (Cassandra)</td>
</tr>
<tr>
<td>Deep relationship queries</td>
<td>Graph (Neo4j)</td>
</tr>
</tbody></table>
</div>
<h2 id="how-to-choose">How to Choose</h2>
<p>Ask these questions, in order:</p>
<ol>
<li><strong>Do you need transactions across several records?</strong> Payments, stock, bookings: start relational.</li>
<li><strong>Do you know all your queries in advance?</strong> If not, relational gives you room to change your mind.</li>
<li><strong>Will writes outgrow one big server?</strong> Hundreds of thousands of writes per second, all the time: consider wide-column or a sharded store.</li>
<li><strong>Is it mostly lookups by one key?</strong> A key-value store, often as a cache in front of the main database.</li>
</ol>
<p>For most applications, the answer is <strong>a relational database, plus Redis as a cache</strong>. Modern PostgreSQL also stores and indexes JSON (<code>jsonb</code>), so &quot;my data has some flexible fields&quot; isn&#39;t a reason to leave it.</p>
<p>Many real systems use several: PostgreSQL for orders, Redis for sessions, Elasticsearch for search, and a wide-column store for the activity feed. That&#39;s called <strong>polyglot persistence</strong>: each kind of data in the store that suits it.</p>
<h2 id="myths-to-drop">Myths to Drop</h2>
<ul>
<li><strong>&quot;NoSQL is faster.&quot;</strong> It&#39;s faster for the access pattern it was built for, and slower or impossible for others.</li>
<li><strong>&quot;NoSQL has no schema.&quot;</strong> The schema moves into your code, and you still have to handle old and new shapes of data.</li>
<li><strong>&quot;SQL doesn&#39;t scale.&quot;</strong> Large companies run huge PostgreSQL and MySQL fleets. It scales with more effort for writes.</li>
</ul>
<h2 id="the-answer-in-short">The Answer in Short</h2>
<ol>
<li>Relational databases give you relationships, transactions, constraints and flexible queries.</li>
<li>NoSQL is four families: document, key-value, wide-column and graph, each for one access pattern.</li>
<li>Choose from your data and your queries: transactions and unknown queries mean SQL; massive writes on known queries can mean wide-column.</li>
<li>The usual default: PostgreSQL plus Redis.</li>
<li>Using several databases for different data is normal.</li>
</ol>
`,headings:[{id:`relational-sql-databases`,text:`Relational (SQL) Databases`},{id:`nosql-four-different-families`,text:`NoSQL: Four Different Families`},{id:`side-by-side`,text:`Side by Side`},{id:`how-to-choose`,text:`How to Choose`},{id:`myths-to-drop`,text:`Myths to Drop`},{id:`the-answer-in-short`,text:`The Answer in Short`}],parents:[],related:[{title:`State in React: useState and Re-renders`,description:`Why changing a variable doesn't update the screen, and how state does. useState, re-renders, the state snapshot and functional updates, updating objects and arrays without mutating them, derived values, and lifting state up.`,date:`2026-11-24`,urlPath:`/blog/essentials/react-state-usestate/`},{title:`Testing React Components with Testing Library`,description:`Test what users see, not how components are built. Set up Vitest and React Testing Library, find elements by role and label, simulate clicks and typing with user-event, test async data with findBy, mock fetch, and avoid the common mistakes.`,date:`2026-11-24`,urlPath:`/blog/essentials/testing-react-components/`},{title:`The CAP Theorem and Consistency Models, Explained`,description:`What the CAP theorem really says, why "pick two of three" is misleading, and the consistency models you'll actually choose between, from strong consistency to eventual consistency, with PACELC.`,date:`2026-11-24`,urlPath:`/blog/essentials/cap-theorem-and-consistency-models/`},{title:`The DOM Explained: Select, Change and Listen`,description:`How JavaScript changes a web page. What the DOM is, selecting elements with querySelector, changing text, classes and attributes, creating and removing elements, listening to events, event delegation, forms, and why React exists.`,date:`2026-11-24`,urlPath:`/blog/essentials/the-dom-explained/`}],relatedPages:[{title:`SQL Playground`,description:`Practice SQL online, free: run real SQLite queries in your browser on a sample shop database, see the rows instantly, and solve exercises from SELECT to JOIN, GROUP BY and UPDATE.`,urlPath:`/playgrounds/sql/`},{title:`Databases and JPA interview questions`,description:`Practice database and JPA interview questions on the N+1 problem, lost updates and locking, Hibernate caches, indexes, and ACID, with clear answers and code.`,urlPath:`/interview/databases-jpa/`},{title:`System design interview questions`,description:`Practice system design interview questions: a payment system, a rate limiter, notifications, a URL shortener, a chat application, and an e-commerce checkout.`,urlPath:`/interview/system-design/`}]}})})}));