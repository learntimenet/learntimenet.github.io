import{b as e,t,x as n,y as r}from"./LoaderHider-xy4zb6lH.js";import{t as i}from"./InterviewTopicPage-BH2TXhO6.js";var a=n(),o=e(),s=r();(0,o.createRoot)(document.getElementById(`root`)).render((0,s.jsx)(a.StrictMode,{children:(0,s.jsx)(t,{children:(0,s.jsx)(i,{topic:{slug:`algorithms`,name:`Data structures and algorithms`,category:`technology`,accentClassName:`bg-pink-500`,codeLanguage:`java`,description:`Practice coding interview questions: an LRU cache, the maximum subarray, cycle detection, merging sorted lists, and course schedules, with Java solutions.`,keywords:`dsa interview questions, coding interview, lru cache, kadane algorithm, maximum subarray, linked list cycle, merge k sorted lists, course schedule, topological sort, java`,questions:[{id:`lru-cache`,question:`Implement an LRU cache.`,level:`mid`,shortAnswer:"Combine a hash map with a doubly linked list ordered by use, so `get` and `put` are both O(1).",answer:["An LRU (least recently used) cache has a fixed capacity and, when full, evicts the entry that was used longest ago. Both `get` and `put` should take O(1) time.",`Combine a hash map, which finds an entry by key in O(1), with a doubly linked list ordered by use: the most recent entry first, the least recent last. Every access moves the entry to the front, and when the cache is full the entry at the back is removed, all in O(1). Sentinel head and tail nodes avoid special cases for an empty list.`,"In real Java code, `LinkedHashMap` does this for you: create it with `accessOrder = true` and override `removeEldestEntry()` to return `size() > capacity`. Interviewers usually want the version below, then ask how to make it thread-safe, for example with a lock around both methods."],code:`class LruCache<K, V> {
    private final int capacity;
    private final Map<K, Node<K, V>> nodes = new HashMap<>();
    private final Node<K, V> head = new Node<>(null, null); // Most recent after it.
    private final Node<K, V> tail = new Node<>(null, null); // Least recent before it.

    LruCache(int capacity) {
        this.capacity = capacity;
        head.next = tail;
        tail.prev = head;
    }

    V get(K key) {
        Node<K, V> node = nodes.get(key);
        if (node == null) return null;
        unlink(node);
        addFirst(node);
        return node.value;
    }

    void put(K key, V value) {
        Node<K, V> node = nodes.get(key);
        if (node != null) {
            node.value = value;
            unlink(node);
        } else {
            if (nodes.size() == capacity) {
                Node<K, V> eldest = tail.prev;
                unlink(eldest);
                nodes.remove(eldest.key);
            }
            node = new Node<>(key, value);
            nodes.put(key, node);
        }
        addFirst(node);
    }

    private void addFirst(Node<K, V> node) {
        node.prev = head;
        node.next = head.next;
        head.next.prev = node;
        head.next = node;
    }

    private void unlink(Node<K, V> node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    private static final class Node<K, V> {
        final K key;
        V value;
        Node<K, V> prev, next;

        Node(K key, V value) {
            this.key = key;
            this.value = value;
        }
    }
}`,codeHtml:`<pre class="shiki github-light-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E">class</span><span style="color:#953800"> LruCache</span><span style="color:#1F2328">&#x3C;</span><span style="color:#CF222E">K</span><span style="color:#1F2328">, </span><span style="color:#CF222E">V</span><span style="color:#1F2328">> {</span></span>
<span class="line"><span style="color:#CF222E">    private</span><span style="color:#CF222E"> final</span><span style="color:#CF222E"> int</span><span style="color:#1F2328"> capacity;</span></span>
<span class="line"><span style="color:#CF222E">    private</span><span style="color:#CF222E"> final</span><span style="color:#1F2328"> Map</span><span style="color:#953800">&#x3C;</span><span style="color:#CF222E">K</span><span style="color:#953800">, </span><span style="color:#1F2328">Node</span><span style="color:#953800">&#x3C;</span><span style="color:#CF222E">K</span><span style="color:#953800">, </span><span style="color:#CF222E">V</span><span style="color:#953800">>> </span><span style="color:#1F2328">nodes</span><span style="color:#CF222E"> =</span><span style="color:#CF222E"> new</span><span style="color:#1F2328"> HashMap&#x3C;>();</span></span>
<span class="line"><span style="color:#CF222E">    private</span><span style="color:#CF222E"> final</span><span style="color:#1F2328"> Node</span><span style="color:#953800">&#x3C;</span><span style="color:#CF222E">K</span><span style="color:#953800">, </span><span style="color:#CF222E">V</span><span style="color:#953800">> </span><span style="color:#1F2328">head</span><span style="color:#CF222E"> =</span><span style="color:#CF222E"> new</span><span style="color:#1F2328"> Node&#x3C;>(</span><span style="color:#0550AE">null</span><span style="color:#1F2328">, </span><span style="color:#0550AE">null</span><span style="color:#1F2328">); </span><span style="color:#6E7781">// Most recent after it.</span></span>
<span class="line"><span style="color:#CF222E">    private</span><span style="color:#CF222E"> final</span><span style="color:#1F2328"> Node</span><span style="color:#953800">&#x3C;</span><span style="color:#CF222E">K</span><span style="color:#953800">, </span><span style="color:#CF222E">V</span><span style="color:#953800">> </span><span style="color:#1F2328">tail</span><span style="color:#CF222E"> =</span><span style="color:#CF222E"> new</span><span style="color:#1F2328"> Node&#x3C;>(</span><span style="color:#0550AE">null</span><span style="color:#1F2328">, </span><span style="color:#0550AE">null</span><span style="color:#1F2328">); </span><span style="color:#6E7781">// Least recent before it.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8250DF">    LruCache</span><span style="color:#1F2328">(</span><span style="color:#CF222E">int</span><span style="color:#953800"> capacity</span><span style="color:#1F2328">) {</span></span>
<span class="line"><span style="color:#0550AE">        this</span><span style="color:#1F2328">.capacity </span><span style="color:#CF222E">=</span><span style="color:#1F2328"> capacity;</span></span>
<span class="line"><span style="color:#1F2328">        head.next </span><span style="color:#CF222E">=</span><span style="color:#1F2328"> tail;</span></span>
<span class="line"><span style="color:#1F2328">        tail.prev </span><span style="color:#CF222E">=</span><span style="color:#1F2328"> head;</span></span>
<span class="line"><span style="color:#1F2328">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#1F2328">    V </span><span style="color:#8250DF">get</span><span style="color:#1F2328">(K </span><span style="color:#953800">key</span><span style="color:#1F2328">) {</span></span>
<span class="line"><span style="color:#1F2328">        Node</span><span style="color:#953800">&#x3C;</span><span style="color:#CF222E">K</span><span style="color:#953800">, </span><span style="color:#CF222E">V</span><span style="color:#953800">> </span><span style="color:#1F2328">node</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> nodes.</span><span style="color:#8250DF">get</span><span style="color:#1F2328">(key);</span></span>
<span class="line"><span style="color:#CF222E">        if</span><span style="color:#1F2328"> (node </span><span style="color:#CF222E">==</span><span style="color:#0550AE"> null</span><span style="color:#1F2328">) </span><span style="color:#CF222E">return</span><span style="color:#0550AE"> null</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#8250DF">        unlink</span><span style="color:#1F2328">(node);</span></span>
<span class="line"><span style="color:#8250DF">        addFirst</span><span style="color:#1F2328">(node);</span></span>
<span class="line"><span style="color:#CF222E">        return</span><span style="color:#1F2328"> node.value;</span></span>
<span class="line"><span style="color:#1F2328">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">    void</span><span style="color:#8250DF"> put</span><span style="color:#1F2328">(K </span><span style="color:#953800">key</span><span style="color:#1F2328">, V </span><span style="color:#953800">value</span><span style="color:#1F2328">) {</span></span>
<span class="line"><span style="color:#1F2328">        Node</span><span style="color:#953800">&#x3C;</span><span style="color:#CF222E">K</span><span style="color:#953800">, </span><span style="color:#CF222E">V</span><span style="color:#953800">> </span><span style="color:#1F2328">node</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> nodes.</span><span style="color:#8250DF">get</span><span style="color:#1F2328">(key);</span></span>
<span class="line"><span style="color:#CF222E">        if</span><span style="color:#1F2328"> (node </span><span style="color:#CF222E">!=</span><span style="color:#0550AE"> null</span><span style="color:#1F2328">) {</span></span>
<span class="line"><span style="color:#1F2328">            node.value </span><span style="color:#CF222E">=</span><span style="color:#1F2328"> value;</span></span>
<span class="line"><span style="color:#8250DF">            unlink</span><span style="color:#1F2328">(node);</span></span>
<span class="line"><span style="color:#1F2328">        } </span><span style="color:#CF222E">else</span><span style="color:#1F2328"> {</span></span>
<span class="line"><span style="color:#CF222E">            if</span><span style="color:#1F2328"> (nodes.</span><span style="color:#8250DF">size</span><span style="color:#1F2328">() </span><span style="color:#CF222E">==</span><span style="color:#1F2328"> capacity) {</span></span>
<span class="line"><span style="color:#1F2328">                Node</span><span style="color:#953800">&#x3C;</span><span style="color:#CF222E">K</span><span style="color:#953800">, </span><span style="color:#CF222E">V</span><span style="color:#953800">> </span><span style="color:#1F2328">eldest</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> tail.prev;</span></span>
<span class="line"><span style="color:#8250DF">                unlink</span><span style="color:#1F2328">(eldest);</span></span>
<span class="line"><span style="color:#1F2328">                nodes.</span><span style="color:#8250DF">remove</span><span style="color:#1F2328">(eldest.key);</span></span>
<span class="line"><span style="color:#1F2328">            }</span></span>
<span class="line"><span style="color:#1F2328">            node </span><span style="color:#CF222E">=</span><span style="color:#CF222E"> new</span><span style="color:#1F2328"> Node&#x3C;>(key, value);</span></span>
<span class="line"><span style="color:#1F2328">            nodes.</span><span style="color:#8250DF">put</span><span style="color:#1F2328">(key, node);</span></span>
<span class="line"><span style="color:#1F2328">        }</span></span>
<span class="line"><span style="color:#8250DF">        addFirst</span><span style="color:#1F2328">(node);</span></span>
<span class="line"><span style="color:#1F2328">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">    private</span><span style="color:#CF222E"> void</span><span style="color:#8250DF"> addFirst</span><span style="color:#1F2328">(Node&#x3C;</span><span style="color:#CF222E">K</span><span style="color:#1F2328">, </span><span style="color:#CF222E">V</span><span style="color:#1F2328">> </span><span style="color:#953800">node</span><span style="color:#1F2328">) {</span></span>
<span class="line"><span style="color:#1F2328">        node.prev </span><span style="color:#CF222E">=</span><span style="color:#1F2328"> head;</span></span>
<span class="line"><span style="color:#1F2328">        node.next </span><span style="color:#CF222E">=</span><span style="color:#1F2328"> head.next;</span></span>
<span class="line"><span style="color:#1F2328">        head.next.prev </span><span style="color:#CF222E">=</span><span style="color:#1F2328"> node;</span></span>
<span class="line"><span style="color:#1F2328">        head.next </span><span style="color:#CF222E">=</span><span style="color:#1F2328"> node;</span></span>
<span class="line"><span style="color:#1F2328">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">    private</span><span style="color:#CF222E"> void</span><span style="color:#8250DF"> unlink</span><span style="color:#1F2328">(Node&#x3C;</span><span style="color:#CF222E">K</span><span style="color:#1F2328">, </span><span style="color:#CF222E">V</span><span style="color:#1F2328">> </span><span style="color:#953800">node</span><span style="color:#1F2328">) {</span></span>
<span class="line"><span style="color:#1F2328">        node.prev.next </span><span style="color:#CF222E">=</span><span style="color:#1F2328"> node.next;</span></span>
<span class="line"><span style="color:#1F2328">        node.next.prev </span><span style="color:#CF222E">=</span><span style="color:#1F2328"> node.prev;</span></span>
<span class="line"><span style="color:#1F2328">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E">    private</span><span style="color:#CF222E"> static</span><span style="color:#CF222E"> final</span><span style="color:#CF222E"> class</span><span style="color:#953800"> Node</span><span style="color:#1F2328">&#x3C;</span><span style="color:#CF222E">K</span><span style="color:#1F2328">, </span><span style="color:#CF222E">V</span><span style="color:#1F2328">> {</span></span>
<span class="line"><span style="color:#CF222E">        final</span><span style="color:#1F2328"> K</span><span style="color:#1F2328"> key;</span></span>
<span class="line"><span style="color:#1F2328">        V</span><span style="color:#1F2328"> value;</span></span>
<span class="line"><span style="color:#1F2328">        Node</span><span style="color:#953800">&#x3C;</span><span style="color:#CF222E">K</span><span style="color:#953800">, </span><span style="color:#CF222E">V</span><span style="color:#953800">> </span><span style="color:#1F2328">prev</span><span style="color:#953800">, </span><span style="color:#1F2328">next;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8250DF">        Node</span><span style="color:#1F2328">(K </span><span style="color:#953800">key</span><span style="color:#1F2328">, V </span><span style="color:#953800">value</span><span style="color:#1F2328">) {</span></span>
<span class="line"><span style="color:#0550AE">            this</span><span style="color:#1F2328">.key </span><span style="color:#CF222E">=</span><span style="color:#1F2328"> key;</span></span>
<span class="line"><span style="color:#0550AE">            this</span><span style="color:#1F2328">.value </span><span style="color:#CF222E">=</span><span style="color:#1F2328"> value;</span></span>
<span class="line"><span style="color:#1F2328">        }</span></span>
<span class="line"><span style="color:#1F2328">    }</span></span>
<span class="line"><span style="color:#1F2328">}</span></span></code></pre>`},{id:`maximum-subarray`,question:`Find the maximum sum of any contiguous subarray.`,level:`mid`,shortAnswer:`Kadane's algorithm: keep the best sum ending at each element, and the best overall, in one O(n) pass.`,answer:[`Kadane's algorithm solves it in one pass, in O(n) time and O(1) memory. Walking through the array, keep the best sum of a subarray ending at the current element: either the element alone, or the element added to the best sum ending just before it. A negative running sum can only lower what follows, so you start again from the current element.`,`Keep the highest of those sums as the answer. Starting from the first element instead of 0 makes it work when every number is negative: the answer is then the largest single number. To return the subarray itself, also remember where the current run started whenever you restart.`],code:`int maxSubarraySum(int[] numbers) {
    int best = numbers[0];
    int current = numbers[0];
    for (int i = 1; i < numbers.length; i++) {
        // Extend the previous subarray, or start a new one here.
        current = Math.max(numbers[i], current + numbers[i]);
        best = Math.max(best, current);
    }
    return best;
}

// maxSubarraySum(new int[] {-2, 1, -3, 4, -1, 2, 1, -5, 4}) == 6, for {4, -1, 2, 1}`,codeHtml:`<pre class="shiki github-light-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E">int</span><span style="color:#8250DF"> maxSubarraySum</span><span style="color:#1F2328">(</span><span style="color:#CF222E">int</span><span style="color:#1F2328">[] numbers) {</span></span>
<span class="line"><span style="color:#CF222E">    int</span><span style="color:#1F2328"> best</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> numbers[</span><span style="color:#0550AE">0</span><span style="color:#1F2328">];</span></span>
<span class="line"><span style="color:#CF222E">    int</span><span style="color:#1F2328"> current</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> numbers[</span><span style="color:#0550AE">0</span><span style="color:#1F2328">];</span></span>
<span class="line"><span style="color:#CF222E">    for</span><span style="color:#1F2328"> (</span><span style="color:#CF222E">int</span><span style="color:#1F2328"> i</span><span style="color:#CF222E"> =</span><span style="color:#0550AE"> 1</span><span style="color:#1F2328">; i </span><span style="color:#CF222E">&#x3C;</span><span style="color:#1F2328"> numbers.length; i</span><span style="color:#CF222E">++</span><span style="color:#1F2328">) {</span></span>
<span class="line"><span style="color:#6E7781">        // Extend the previous subarray, or start a new one here.</span></span>
<span class="line"><span style="color:#1F2328">        current </span><span style="color:#CF222E">=</span><span style="color:#1F2328"> Math.</span><span style="color:#8250DF">max</span><span style="color:#1F2328">(numbers[i], current </span><span style="color:#CF222E">+</span><span style="color:#1F2328"> numbers[i]);</span></span>
<span class="line"><span style="color:#1F2328">        best </span><span style="color:#CF222E">=</span><span style="color:#1F2328"> Math.</span><span style="color:#8250DF">max</span><span style="color:#1F2328">(best, current);</span></span>
<span class="line"><span style="color:#1F2328">    }</span></span>
<span class="line"><span style="color:#CF222E">    return</span><span style="color:#1F2328"> best;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6E7781">// maxSubarraySum(new int[] {-2, 1, -3, 4, -1, 2, 1, -5, 4}) == 6, for {4, -1, 2, 1}</span></span></code></pre>`},{id:`linked-list-cycle`,question:`Detect whether a linked list contains a cycle.`,level:`junior`,shortAnswer:`Floyd's tortoise and hare: a slow and a fast pointer meet only if there is a cycle. O(n) time, O(1) memory.`,answer:[`Use Floyd's tortoise and hare: two pointers start at the head, one moving one node at a time, the other two nodes at a time. If the list ends, there is no cycle. If there is a cycle, the fast pointer enters it and gains one node on the slow pointer at every step, so they must meet. That takes O(n) time and O(1) memory, where a set of visited nodes would need O(n) memory.`,`A common follow-up is to find where the cycle starts. After they meet, move one pointer back to the head, then advance both one node at a time: they meet again exactly at the first node of the cycle.`],code:`boolean hasCycle(ListNode head) {
    ListNode slow = head;
    ListNode fast = head;
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow == fast) return true;
    }
    return false; // The fast pointer reached the end.
}`,codeHtml:`<pre class="shiki github-light-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E">boolean</span><span style="color:#8250DF"> hasCycle</span><span style="color:#1F2328">(ListNode head) {</span></span>
<span class="line"><span style="color:#1F2328">    ListNode</span><span style="color:#1F2328"> slow</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> head;</span></span>
<span class="line"><span style="color:#1F2328">    ListNode</span><span style="color:#1F2328"> fast</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> head;</span></span>
<span class="line"><span style="color:#CF222E">    while</span><span style="color:#1F2328"> (fast </span><span style="color:#CF222E">!=</span><span style="color:#0550AE"> null</span><span style="color:#CF222E"> &#x26;&#x26;</span><span style="color:#1F2328"> fast.next </span><span style="color:#CF222E">!=</span><span style="color:#0550AE"> null</span><span style="color:#1F2328">) {</span></span>
<span class="line"><span style="color:#1F2328">        slow </span><span style="color:#CF222E">=</span><span style="color:#1F2328"> slow.next;</span></span>
<span class="line"><span style="color:#1F2328">        fast </span><span style="color:#CF222E">=</span><span style="color:#1F2328"> fast.next.next;</span></span>
<span class="line"><span style="color:#CF222E">        if</span><span style="color:#1F2328"> (slow </span><span style="color:#CF222E">==</span><span style="color:#1F2328"> fast) </span><span style="color:#CF222E">return</span><span style="color:#0550AE"> true</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">    }</span></span>
<span class="line"><span style="color:#CF222E">    return</span><span style="color:#0550AE"> false</span><span style="color:#1F2328">; </span><span style="color:#6E7781">// The fast pointer reached the end.</span></span>
<span class="line"><span style="color:#1F2328">}</span></span></code></pre>`},{id:`merge-k-sorted-lists`,question:`Merge k sorted linked lists into one sorted list.`,level:`senior`,shortAnswer:`Keep each list's head in a min-heap and repeatedly take the smallest node, in O(N log k).`,answer:["Keep the current head of each list in a min-heap (`PriorityQueue`). Repeatedly take the smallest node, append it to the result, and push the next node of its list. The heap never holds more than k nodes, so with N nodes in total this takes O(N log k) time and O(k) extra memory.",`Merging the lists one after the other into a growing result is simpler, but costs O(N × k). Merging them in pairs, like merge sort (lists 1 and 2, 3 and 4, then the results), also reaches O(N log k) without a heap. Mention the edge cases: no lists, and lists that are empty.`],code:`ListNode mergeKLists(ListNode[] lists) {
    PriorityQueue<ListNode> heap =
        new PriorityQueue<>(Comparator.comparingInt(node -> node.val));
    for (ListNode list : lists) {
        if (list != null) heap.add(list);
    }
    ListNode dummy = new ListNode(0);
    ListNode tail = dummy;
    while (!heap.isEmpty()) {
        ListNode smallest = heap.poll();
        tail.next = smallest;
        tail = smallest;
        if (smallest.next != null) heap.add(smallest.next);
    }
    return dummy.next;
}`,codeHtml:`<pre class="shiki github-light-default code-block" tabindex="0"><code><span class="line"><span style="color:#1F2328">ListNode </span><span style="color:#8250DF">mergeKLists</span><span style="color:#1F2328">(</span><span style="color:#CF222E">ListNode</span><span style="color:#1F2328">[] lists) {</span></span>
<span class="line"><span style="color:#1F2328">    PriorityQueue</span><span style="color:#953800">&#x3C;</span><span style="color:#CF222E">ListNode</span><span style="color:#953800">> </span><span style="color:#1F2328">heap</span><span style="color:#CF222E"> =</span></span>
<span class="line"><span style="color:#CF222E">        new</span><span style="color:#1F2328"> PriorityQueue&#x3C;>(Comparator.</span><span style="color:#8250DF">comparingInt</span><span style="color:#1F2328">(node </span><span style="color:#CF222E">-></span><span style="color:#1F2328"> node.val));</span></span>
<span class="line"><span style="color:#CF222E">    for</span><span style="color:#1F2328"> (ListNode</span><span style="color:#1F2328"> list</span><span style="color:#CF222E"> :</span><span style="color:#1F2328"> lists) {</span></span>
<span class="line"><span style="color:#CF222E">        if</span><span style="color:#1F2328"> (list </span><span style="color:#CF222E">!=</span><span style="color:#0550AE"> null</span><span style="color:#1F2328">) heap.</span><span style="color:#8250DF">add</span><span style="color:#1F2328">(list);</span></span>
<span class="line"><span style="color:#1F2328">    }</span></span>
<span class="line"><span style="color:#1F2328">    ListNode</span><span style="color:#1F2328"> dummy</span><span style="color:#CF222E"> =</span><span style="color:#CF222E"> new</span><span style="color:#8250DF"> ListNode</span><span style="color:#1F2328">(</span><span style="color:#0550AE">0</span><span style="color:#1F2328">);</span></span>
<span class="line"><span style="color:#1F2328">    ListNode</span><span style="color:#1F2328"> tail</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> dummy;</span></span>
<span class="line"><span style="color:#CF222E">    while</span><span style="color:#1F2328"> (</span><span style="color:#CF222E">!</span><span style="color:#1F2328">heap.</span><span style="color:#8250DF">isEmpty</span><span style="color:#1F2328">()) {</span></span>
<span class="line"><span style="color:#1F2328">        ListNode</span><span style="color:#1F2328"> smallest</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> heap.</span><span style="color:#8250DF">poll</span><span style="color:#1F2328">();</span></span>
<span class="line"><span style="color:#1F2328">        tail.next </span><span style="color:#CF222E">=</span><span style="color:#1F2328"> smallest;</span></span>
<span class="line"><span style="color:#1F2328">        tail </span><span style="color:#CF222E">=</span><span style="color:#1F2328"> smallest;</span></span>
<span class="line"><span style="color:#CF222E">        if</span><span style="color:#1F2328"> (smallest.next </span><span style="color:#CF222E">!=</span><span style="color:#0550AE"> null</span><span style="color:#1F2328">) heap.</span><span style="color:#8250DF">add</span><span style="color:#1F2328">(smallest.next);</span></span>
<span class="line"><span style="color:#1F2328">    }</span></span>
<span class="line"><span style="color:#CF222E">    return</span><span style="color:#1F2328"> dummy.next;</span></span>
<span class="line"><span style="color:#1F2328">}</span></span></code></pre>`},{id:`course-schedule`,question:`Given course prerequisites, determine whether all courses can be finished.`,level:`mid`,shortAnswer:`Model the prerequisites as a directed graph: all courses can be finished if it has no cycle, which a topological sort detects.`,answer:[`Model the courses as a directed graph, with an edge from each prerequisite to the course that needs it. All courses can be finished exactly when the graph has no cycle: if A needs B and B needs A, neither can ever be taken.`,`Kahn's algorithm (a topological sort) checks this. Count the missing prerequisites of each course, and start with the courses that have none. Taking a course removes it as a prerequisite of the courses after it; any course whose count drops to 0 becomes available. If you manage to take every course, there is no cycle. It runs in O(V + E), for V courses and E prerequisites.`,`A depth-first search that marks courses as being visited or done works too: reaching a course that is still being visited means a cycle. The order in which Kahn's algorithm takes the courses is also a valid study plan.`],code:`boolean canFinish(int courseCount, int[][] prerequisites) {
    List<List<Integer>> unlocks = new ArrayList<>();
    for (int i = 0; i < courseCount; i++) unlocks.add(new ArrayList<>());
    int[] missing = new int[courseCount]; // Prerequisites not taken yet.
    for (int[] pair : prerequisites) {    // pair = {course, prerequisite}
        unlocks.get(pair[1]).add(pair[0]);
        missing[pair[0]]++;
    }

    Deque<Integer> available = new ArrayDeque<>();
    for (int course = 0; course < courseCount; course++) {
        if (missing[course] == 0) available.add(course);
    }
    int taken = 0;
    while (!available.isEmpty()) {
        int course = available.poll();
        taken++;
        for (int next : unlocks.get(course)) {
            if (--missing[next] == 0) available.add(next);
        }
    }
    return taken == courseCount; // The courses left are part of a cycle.
}`,codeHtml:`<pre class="shiki github-light-default code-block" tabindex="0"><code><span class="line"><span style="color:#CF222E">boolean</span><span style="color:#8250DF"> canFinish</span><span style="color:#1F2328">(</span><span style="color:#CF222E">int</span><span style="color:#1F2328"> courseCount, </span><span style="color:#CF222E">int</span><span style="color:#1F2328">[][] prerequisites) {</span></span>
<span class="line"><span style="color:#1F2328">    List</span><span style="color:#953800">&#x3C;</span><span style="color:#1F2328">List</span><span style="color:#953800">&#x3C;</span><span style="color:#CF222E">Integer</span><span style="color:#953800">>> </span><span style="color:#1F2328">unlocks</span><span style="color:#CF222E"> =</span><span style="color:#CF222E"> new</span><span style="color:#1F2328"> ArrayList&#x3C;>();</span></span>
<span class="line"><span style="color:#CF222E">    for</span><span style="color:#1F2328"> (</span><span style="color:#CF222E">int</span><span style="color:#1F2328"> i</span><span style="color:#CF222E"> =</span><span style="color:#0550AE"> 0</span><span style="color:#1F2328">; i </span><span style="color:#CF222E">&#x3C;</span><span style="color:#1F2328"> courseCount; i</span><span style="color:#CF222E">++</span><span style="color:#1F2328">) unlocks.</span><span style="color:#8250DF">add</span><span style="color:#1F2328">(</span><span style="color:#CF222E">new</span><span style="color:#1F2328"> ArrayList&#x3C;>());</span></span>
<span class="line"><span style="color:#CF222E">    int</span><span style="color:#953800">[] </span><span style="color:#1F2328">missing</span><span style="color:#CF222E"> =</span><span style="color:#CF222E"> new</span><span style="color:#CF222E"> int</span><span style="color:#1F2328">[courseCount]; </span><span style="color:#6E7781">// Prerequisites not taken yet.</span></span>
<span class="line"><span style="color:#CF222E">    for</span><span style="color:#1F2328"> (</span><span style="color:#CF222E">int</span><span style="color:#953800">[] </span><span style="color:#1F2328">pair</span><span style="color:#CF222E"> :</span><span style="color:#1F2328"> prerequisites) {    </span><span style="color:#6E7781">// pair = {course, prerequisite}</span></span>
<span class="line"><span style="color:#1F2328">        unlocks.</span><span style="color:#8250DF">get</span><span style="color:#1F2328">(pair[</span><span style="color:#0550AE">1</span><span style="color:#1F2328">]).</span><span style="color:#8250DF">add</span><span style="color:#1F2328">(pair[</span><span style="color:#0550AE">0</span><span style="color:#1F2328">]);</span></span>
<span class="line"><span style="color:#1F2328">        missing[pair[</span><span style="color:#0550AE">0</span><span style="color:#1F2328">]]</span><span style="color:#CF222E">++</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#1F2328">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#1F2328">    Deque</span><span style="color:#953800">&#x3C;</span><span style="color:#CF222E">Integer</span><span style="color:#953800">> </span><span style="color:#1F2328">available</span><span style="color:#CF222E"> =</span><span style="color:#CF222E"> new</span><span style="color:#1F2328"> ArrayDeque&#x3C;>();</span></span>
<span class="line"><span style="color:#CF222E">    for</span><span style="color:#1F2328"> (</span><span style="color:#CF222E">int</span><span style="color:#1F2328"> course</span><span style="color:#CF222E"> =</span><span style="color:#0550AE"> 0</span><span style="color:#1F2328">; course </span><span style="color:#CF222E">&#x3C;</span><span style="color:#1F2328"> courseCount; course</span><span style="color:#CF222E">++</span><span style="color:#1F2328">) {</span></span>
<span class="line"><span style="color:#CF222E">        if</span><span style="color:#1F2328"> (missing[course] </span><span style="color:#CF222E">==</span><span style="color:#0550AE"> 0</span><span style="color:#1F2328">) available.</span><span style="color:#8250DF">add</span><span style="color:#1F2328">(course);</span></span>
<span class="line"><span style="color:#1F2328">    }</span></span>
<span class="line"><span style="color:#CF222E">    int</span><span style="color:#1F2328"> taken</span><span style="color:#CF222E"> =</span><span style="color:#0550AE"> 0</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#CF222E">    while</span><span style="color:#1F2328"> (</span><span style="color:#CF222E">!</span><span style="color:#1F2328">available.</span><span style="color:#8250DF">isEmpty</span><span style="color:#1F2328">()) {</span></span>
<span class="line"><span style="color:#CF222E">        int</span><span style="color:#1F2328"> course</span><span style="color:#CF222E"> =</span><span style="color:#1F2328"> available.</span><span style="color:#8250DF">poll</span><span style="color:#1F2328">();</span></span>
<span class="line"><span style="color:#1F2328">        taken</span><span style="color:#CF222E">++</span><span style="color:#1F2328">;</span></span>
<span class="line"><span style="color:#CF222E">        for</span><span style="color:#1F2328"> (</span><span style="color:#CF222E">int</span><span style="color:#1F2328"> next</span><span style="color:#CF222E"> :</span><span style="color:#1F2328"> unlocks.</span><span style="color:#8250DF">get</span><span style="color:#1F2328">(course)) {</span></span>
<span class="line"><span style="color:#CF222E">            if</span><span style="color:#1F2328"> (</span><span style="color:#CF222E">--</span><span style="color:#1F2328">missing[next] </span><span style="color:#CF222E">==</span><span style="color:#0550AE"> 0</span><span style="color:#1F2328">) available.</span><span style="color:#8250DF">add</span><span style="color:#1F2328">(next);</span></span>
<span class="line"><span style="color:#1F2328">        }</span></span>
<span class="line"><span style="color:#1F2328">    }</span></span>
<span class="line"><span style="color:#CF222E">    return</span><span style="color:#1F2328"> taken </span><span style="color:#CF222E">==</span><span style="color:#1F2328"> courseCount; </span><span style="color:#6E7781">// The courses left are part of a cycle.</span></span>
<span class="line"><span style="color:#1F2328">}</span></span></code></pre>`}]},otherTopics:[{slug:`git`,name:`Git`,category:`technology`,accentClassName:`bg-accent-coral`,description:`Practice Git interview questions on merge and rebase, reset and revert, fetch and pull, and stash, with clear answers.`,questionCount:4,levels:{junior:2,mid:2,senior:0},url:`/interview/git/`},{slug:`docker`,name:`Docker`,category:`technology`,accentClassName:`bg-blue-500`,description:`Practice Docker interview questions on images and containers, layers and caching, CMD and ENTRYPOINT, and volumes, with clear answers.`,questionCount:4,levels:{junior:2,mid:2,senior:0},url:`/interview/docker/`},{slug:`javascript`,name:`JavaScript`,category:`technology`,accentClassName:`bg-yellow-400`,description:`Practice JavaScript interview questions on closures, the event loop, equality, this, and variable scope, with clear answers and code.`,questionCount:5,levels:{junior:3,mid:2,senior:0},url:`/interview/javascript/`},{slug:`typescript`,name:`TypeScript`,category:`technology`,accentClassName:`bg-sky-600`,description:`Practice TypeScript interview questions on interfaces and types, any, unknown and never, generics, and narrowing, with clear answers and code.`,questionCount:4,levels:{junior:2,mid:2,senior:0},url:`/interview/typescript/`},{slug:`angular`,name:`Angular`,category:`technology`,accentClassName:`bg-red-500`,description:`Practice Angular interview questions on change detection, signals, dependency injection, and standalone components, with clear answers.`,questionCount:4,levels:{junior:2,mid:2,senior:0},url:`/interview/angular/`}]})})}));