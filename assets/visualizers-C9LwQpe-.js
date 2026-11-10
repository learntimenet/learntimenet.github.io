function e(e,t){return{kind:`grid`,rows:e.rows,cols:e.cols,walls:e.walls,start:e.start,end:e.end,marks:t.marks,panels:t.panels??[],line:t.line,message:t.message}}function t({rows:e,cols:t,walls:n},r){let i=Math.floor(r/t),a=r%t;return[i>0?r-t:-1,a<t-1?r+1:-1,i<e-1?r+t:-1,a>0?r-1:-1].filter(e=>e>=0&&!n.includes(e))}function n(e,t){let n=[];for(let r=t;r!=null;r=e.get(r))n.unshift(r);return n}var r=12,i=20,a=(e,t)=>e*i+t,o={rows:r,cols:i,start:a(5,2),end:a(6,17),walls:[...[0,1,2,3,4,5,6,7,8].map(e=>a(e,7)),...[3,4,5,6,7,8,9,10,11].map(e=>a(e,12)),...[13,14,15].map(e=>a(3,e))]},s={slug:`a-star`,name:`A* pathfinding`,category:`Grids`,keyLabel:`Current cell`,markLabels:{frontier:`Open`,visited:`Explored`,path:`Shortest path`},description:`Draw walls on a grid, then watch A* head straight for the end, guided by the distance left, and still find a shortest path.`,keywords:`a star visualization, a* pathfinding, a star algorithm animation, heuristic search, pathfinding visualizer, maze solver`,explanation:[`A* is a search that knows where it is going. For each open cell it adds the steps taken so far, g, to an estimate of the steps left, h: here the Manhattan distance to the end, ignoring walls. It always explores the open cell with the lowest g + h, so it heads towards the end instead of spreading out in every direction.`,`As long as the estimate never overestimates the real distance, A* still finds a shortest path, while exploring far fewer cells than breadth-first search. Compare the two on the same walls. It is the pathfinding behind most games and route planners.`],complexity:{best:`O(d)`,average:`O(n log n)`,worst:`O(n log n)`,space:`O(n)`},codeLanguage:`javascript`,code:`function aStar(grid, start, end) {
  const cost = new Map([[start, 0]]);
  const previous = new Map([[start, null]]);
  const open = [start];
  while (open.length > 0) {
    const cell = lowest(open, (c) => cost.get(c) + distance(c, end));
    if (cell === end) return pathTo(end, previous);
    open.splice(open.indexOf(cell), 1);
    for (const next of neighbors(grid, cell)) {
      const through = cost.get(cell) + 1;
      if (through < (cost.get(next) ?? Infinity)) {
        cost.set(next, through);
        previous.set(next, cell);
        if (!open.includes(next)) open.push(next);
      }
    }
  }
  return null;
}`,input:`grid`,grid:o,run(r){let i=[],a=e=>Math.abs(Math.floor(e/r.cols)-Math.floor(r.end/r.cols))+Math.abs(e%r.cols-r.end%r.cols),o=new Map([[r.start,0]]),s=new Map([[r.start,null]]),c=[r.start],l=new Set,u=(t,n,a,o=[])=>{let s={};for(let e of l)s[e]=`visited`;for(let e of c)s[e]=`frontier`;a!==void 0&&(s[a]=`key`);for(let e of o)s[e]=`path`;i.push(e(r,{line:t,message:n,marks:s,panels:[{label:`Explored`,items:[`${l.size} cells`]},{label:`Open`,items:[`${c.length} cells`]}]}))};for(u(4,`Start: the start cell is open, with g = 0 and h = ${a(r.start)}.`);c.length>0;){let e=c[0];for(let t of c)o.get(t)+a(t)<o.get(e)+a(e)&&(e=t);if(e===r.end){let t=n(s,r.end);return l.add(e),c.splice(c.indexOf(e),1),u(7,`Reached the end: the shortest path takes ${t.length-1} steps.`,void 0,t),i}c.splice(c.indexOf(e),1),l.add(e);for(let n of t(r,e)){let t=o.get(e)+1;t<(o.get(n)??1/0)&&(o.set(n,t),s.set(n,e),c.includes(n)||c.push(n))}let d=o.get(e),f=a(e);u(9,`Explore the open cell with the lowest g + h = ${d} + ${f} = ${d+f}, and open its neighbors.`,e)}return u(18,`No open cell left: the walls cut the end off from the start.`),i}},c={slug:`binary-heap`,name:`Binary heap`,category:`Data structures`,keyLabel:`New value`,markLabels:{compare:`Compared with its parent`,swap:`Swapped`,found:`Smallest`},description:`Watch values go into a min-heap: each one is added at the bottom, then swapped with its parent until the parent is smaller.`,keywords:`binary heap visualization, min heap, heap insert, sift up, priority queue, heap animation, data structures visualizer`,explanation:[`A min-heap is a complete binary tree where every parent is smaller than or equal to its children, so the smallest value is always at the root. It is stored in a plain array: the children of position i are at 2i + 1 and 2i + 2.`,`To insert, add the value at the end of the array, the next free spot in the tree, then sift it up: swap it with its parent while the parent is bigger. The tree's height is log n, so insertion takes O(log n). Heaps are how priority queues work, and they are the core of heap sort and Dijkstra's algorithm.`],complexity:{best:`O(1)`,average:`O(log n)`,worst:`O(log n)`,space:`O(1)`},codeLanguage:`javascript`,code:`function insert(heap, value) {
  heap.push(value);
  let i = heap.length - 1;
  while (i > 0) {
    const parent = Math.floor((i - 1) / 2);
    if (heap[parent] <= heap[i]) break;
    [heap[parent], heap[i]] = [heap[i], heap[parent]];
    i = parent;
  }
}`,input:`values`,defaultValues:[42,17,88,5,63,29,71,12],maxValues:10,run(e){let t=[],n=[],r=0,i=80+Math.floor(Math.log2(Math.max(1,e.length)))*75,a=e=>{let t=Math.floor(Math.log2(e+1));return{x:(e-(2**t-1)+.5)*600/2**t,y:40+t*75}},o=(o,s,c={},l=!1)=>t.push({kind:`graph`,height:i,nodes:n.map((e,t)=>({id:`p${t}`,label:String(e),...a(t),shape:`circle`,mark:c[t],done:l&&!c[t]})),edges:n.slice(1).map((e,t)=>({from:`p${Math.floor(t/2)}`,to:`p${t+1}`,directed:!1})),panels:[{label:`As an array`,items:n.map(String)},{label:`To insert`,items:e.slice(r).map(String)}],line:o,message:s});o(1,`Start with an empty heap.`);for(let t of e){n.push(t),r++;let e=n.length-1;for(o(2,`Add ${t} at the end: the next free spot in the tree.`,{[e]:`key`});e>0;){let t=Math.floor((e-1)/2),r=n[t]<=n[e];if(o(6,r?`${n[t]} ≤ ${n[e]}: the parent is smaller, so ${n[e]} stays here.`:`${n[t]} > ${n[e]}: the parent is bigger.`,{[e]:`key`,[t]:`compare`}),r)break;[n[t],n[e]]=[n[e],n[t]],o(7,`Swap them: ${n[t]} moves up.`,{[t]:`swap`,[e]:`swap`}),e=t}e===0&&n.length>1&&o(4,`${n[0]} reached the root: it is the new smallest value.`,{0:`key`})}return o(10,`Done. The smallest value, ${n[0]}, is at the root.`,{0:`found`},!0),t}};function l(e){let t=[...e],n=new Set,r=[];return{values:t,steps:r,markDone:(...e)=>{for(let t of e)n.add(t)},markAllDone:()=>t.forEach((e,t)=>n.add(t)),record:(e,i,a={})=>{r.push({kind:`array`,values:[...t],marks:a.marks??{},done:[...n].sort((e,t)=>e-t),range:a.range,line:e,message:i})}}}var u={slug:`binary-search`,name:`Binary search`,category:`Searching`,keyLabel:`Middle`,description:`Watch binary search find a value in a sorted array by checking the middle and throwing away half of the values at every step.`,keywords:`binary search visualization, binary search animation, binary search algorithm, searching algorithm visualizer, binary search step by step`,explanation:[`Binary search works on a sorted array. It checks the middle value: if it is the target, the search is over; if it is smaller, the target can only be in the right half, otherwise only in the left half. Each step halves the range.`,`A million values need at most 20 steps, against up to a million for a linear search. The catch is that the array must be sorted, and stay sorted as values are added.`],complexity:{best:`O(1)`,average:`O(log n)`,worst:`O(log n)`,space:`O(1)`},codeLanguage:`javascript`,input:`values`,code:`function binarySearch(values, target) {
  let low = 0;
  let high = values.length - 1;
  while (low <= high) {
    const middle = Math.floor((low + high) / 2);
    if (values[middle] === target) return middle;
    if (values[middle] < target) low = middle + 1;
    else high = middle - 1;
  }
  return -1;
}`,defaultValues:[5,12,17,29,36,42,54,63,71,88],defaultTarget:63,needsSortedValues:!0,run(e,t=0){let{values:n,steps:r,record:i}=l(e),a=0,o=n.length-1;for(i(2,`Look for ${t} anywhere in the array.`,{range:[a,o]});a<=o;){let e=Math.floor((a+o)/2),s=[a,o];if(i(5,`The middle of positions ${a}–${o} is ${e}: check ${n[e]}.`,{marks:{[e]:`key`},range:s}),n[e]===t)return i(6,`Found ${t} at position ${e}.`,{marks:{[e]:`found`},range:[e,e]}),r;n[e]<t?(i(7,`${n[e]} is smaller than ${t}: keep the right half.`,{marks:{[e]:`compare`},range:s}),a=e+1):(i(8,`${n[e]} is bigger than ${t}: keep the left half.`,{marks:{[e]:`compare`},range:s}),o=e-1)}return i(10,`The range is empty: ${t} is not in the array.`),r}},d={slug:`binary-search-tree`,name:`Binary search tree`,category:`Data structures`,keyLabel:`Inserted`,markLabels:{compare:`Compared`,path:`Path taken`},description:`Watch values go into a binary search tree: smaller ones to the left, bigger ones to the right, until each finds an empty spot.`,keywords:`binary search tree visualization, bst insertion, binary tree animation, bst insert, data structures visualizer`,explanation:[`In a binary search tree, every node's left subtree holds smaller values and its right subtree bigger ones (here, equal values go right). To insert a value, start at the root and go left or right at each node until you reach an empty spot.`,`Searching follows the same path, so both take time proportional to the tree's height: O(log n) when it is balanced, but O(n) when values arrive in sorted order and the tree becomes a long chain. Try typing sorted values to see it. Self-balancing trees, such as red-black trees, avoid that.`],complexity:{best:`O(log n)`,average:`O(log n)`,worst:`O(n)`,space:`O(n)`},codeLanguage:`javascript`,code:`function insert(root, value) {
  if (root === null) return { value, left: null, right: null };
  if (value < root.value) root.left = insert(root.left, value);
  else root.right = insert(root.right, value);
  return root;
}`,input:`values`,defaultValues:[50,30,70,20,40,60,85,35],maxValues:10,run(e){let t=[],n=[];for(let[r,i]of e.entries()){let e=null,a=t.length>0?0:null;for(;a!==null;)e=a,a=i<t[a].value?t[a].left:t[a].right;t.push({value:i,left:null,right:null,depth:e===null?0:t[e].depth+1}),n.push(e),e!==null&&(i<t[e].value?t[e].left=r:t[e].right=r)}let r=[],i=e=>{e!==null&&(i(t[e].left),r.push(e),i(t[e].right))};i(t.length>0?0:null);let a=new Map(r.map((e,t)=>[e,r.length===1?300:40+t*520/(r.length-1)])),o=90+Math.max(0,...t.map(({depth:e})=>e))*70,s=[],c=(i,c,l,u={},d=!1)=>s.push({kind:`graph`,height:o,nodes:t.slice(0,l).map(({value:e,depth:t},n)=>({id:`n${n}`,label:String(e),x:a.get(n),y:40+t*70,shape:`circle`,mark:u[n],done:d})),edges:n.slice(0,l).flatMap((e,t)=>e===null?[]:[{from:`n${e}`,to:`n${t}`,directed:!1,mark:u[t]===`write`||u[t]===`path`?`path`:void 0}]),panels:[{label:`To insert`,items:e.slice(l).map(String)},{label:d?`In-order walk: sorted`:`Inserted`,items:d?r.map(e=>String(t[e].value)):e.slice(0,l).map(String)}],line:i,message:c});c(1,`Start with an empty tree.`,0);for(let[n,r]of e.entries()){let e={},i=n>0?0:null;for(;i!==null&&i<n;){let a=t[i],o=r<a.value;c(o?3:4,o?`${r} < ${a.value}: go left.`:`${r} ≥ ${a.value}: go right.`,n,{...e,[i]:`compare`}),e[i]=`path`,i=o?a.left:a.right}c(2,n===0?`The tree is empty: ${r} becomes the root.`:`Empty spot: put ${r} here.`,n+1,{...e,[n]:`write`})}return c(5,`Done. An in-order walk, left subtree, node, right subtree, visits the values in sorted order.`,t.length,{},!0),s}},f=(e,t)=>e<t?`${e}-${t}`:`${t}-${e}`;function p(e,t){return{kind:`graph`,height:e.height,nodes:e.nodes.map(({id:e,x:n,y:r})=>({id:e,label:e,x:n,y:r,shape:`circle`,mark:t.nodeMarks?.[e],note:t.notes?.[e]})),edges:e.edges.map(({from:e,to:n,weight:r})=>({from:e,to:n,directed:!1,label:t.showWeights&&r!==void 0?String(r):void 0,mark:t.edgeMarks?.[f(e,n)]})),panels:t.panels??[],line:t.line,message:t.message}}function m({edges:e},t){return e.flatMap(({from:e,to:n,weight:r=1})=>e===t?[{id:n,weight:r}]:n===t?[{id:e,weight:r}]:[]).sort((e,t)=>e.id.localeCompare(t.id))}var h={height:360,nodes:[{id:`A`,x:60,y:180},{id:`B`,x:180,y:70},{id:`C`,x:180,y:290},{id:`D`,x:320,y:70},{id:`E`,x:320,y:290},{id:`F`,x:440,y:180},{id:`G`,x:550,y:70},{id:`H`,x:550,y:290}],edges:[{from:`A`,to:`B`,weight:4},{from:`A`,to:`C`,weight:2},{from:`B`,to:`C`,weight:1},{from:`B`,to:`D`,weight:5},{from:`C`,to:`E`,weight:8},{from:`D`,to:`E`,weight:2},{from:`D`,to:`F`,weight:3},{from:`E`,to:`F`,weight:6},{from:`E`,to:`H`,weight:7},{from:`F`,to:`G`,weight:1},{from:`F`,to:`H`,weight:4},{from:`G`,to:`H`,weight:2}]},g=[{slug:`bubble-sort`,name:`Bubble sort`,category:`Sorting`,keyLabel:`Key`,description:`Watch bubble sort compare neighbors and swap them, so that the largest values bubble up to the end, one pass at a time.`,keywords:`bubble sort visualization, bubble sort animation, bubble sort algorithm, sorting algorithm visualizer, bubble sort step by step`,explanation:[`Bubble sort walks through the array and compares each pair of neighbors, swapping them when they are in the wrong order. At the end of a pass, the largest value has bubbled up to the end, so the next pass can stop one place earlier.`,`When a whole pass makes no swap, the array is sorted and the algorithm stops early. That makes it fast on arrays that are already almost sorted, but with O(n²) comparisons in general, it is mostly used to teach sorting.`],complexity:{best:`O(n)`,average:`O(n²)`,worst:`O(n²)`,space:`O(1)`},codeLanguage:`javascript`,input:`values`,code:`function bubbleSort(values) {
  for (let end = values.length - 1; end > 0; end--) {
    let swapped = false;
    for (let i = 0; i < end; i++) {
      if (values[i] > values[i + 1]) {
        [values[i], values[i + 1]] = [values[i + 1], values[i]];
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return values;
}`,defaultValues:[42,17,88,5,63,29,71,12,54,36],run(e){let{values:t,steps:n,record:r,markDone:i,markAllDone:a}=l(e);r(1,`Start: each pass moves the largest remaining value to the end.`);for(let e=t.length-1;e>0;e--){let n=!1;for(let i=0;i<e;i++){let e=t[i],a=t[i+1];r(5,`Compare ${e} and ${a}.`,{marks:{[i]:`compare`,[i+1]:`compare`}}),e>a&&([t[i],t[i+1]]=[a,e],n=!0,r(6,`${e} is bigger than ${a}: swap them.`,{marks:{[i]:`swap`,[i+1]:`swap`}}))}if(i(e),!n){a(),r(10,`No swap in this pass: the array is sorted.`);break}r(2,`${t[e]} is in its final place.`)}return a(),r(12,`Done: the array is sorted.`),n}},{slug:`insertion-sort`,name:`Insertion sort`,category:`Sorting`,keyLabel:`Current value`,description:`Watch insertion sort take each value and slide it left into its place among the values before it, like sorting cards in your hand.`,keywords:`insertion sort visualization, insertion sort animation, insertion sort algorithm, sorting algorithm visualizer, insertion sort step by step`,explanation:[`Insertion sort keeps the left part of the array sorted. It takes the next value, then shifts every bigger value before it one place to the right, and drops the value into the gap.`,`On an almost sorted array, few values move, so it runs in nearly O(n). That is why fast library sorts, such as Timsort, switch to insertion sort for small pieces of an array.`],complexity:{best:`O(n)`,average:`O(n²)`,worst:`O(n²)`,space:`O(1)`},codeLanguage:`javascript`,input:`values`,code:`function insertionSort(values) {
  for (let i = 1; i < values.length; i++) {
    const current = values[i];
    let j = i - 1;
    while (j >= 0 && values[j] > current) {
      values[j + 1] = values[j];
      j--;
    }
    values[j + 1] = current;
  }
  return values;
}`,defaultValues:[42,17,88,5,63,29,71,12,54,36],run(e){let{values:t,steps:n,record:r,markAllDone:i}=l(e);r(1,`Start: the first value alone is already sorted.`);for(let e=1;e<t.length;e++){let n=t[e];r(3,`Take ${n} and find its place among the values before it.`,{marks:{[e]:`key`},range:[0,e]});let i=e-1;for(;i>=0&&(r(5,`Compare ${t[i]} with ${n}.`,{marks:{[i]:`compare`,[i+1]:`key`},range:[0,e]}),!(t[i]<=n));)t[i+1]=t[i],t[i]=n,r(6,`${t[i+1]} is bigger: shift it one place to the right.`,{marks:{[i]:`key`,[i+1]:`write`},range:[0,e]}),i--;t[i+1]=n,r(9,`Put ${n} at position ${i+1}.`,{marks:{[i+1]:`write`},range:[0,e]})}return i(),r(11,`Done: the array is sorted.`),n}},{slug:`selection-sort`,name:`Selection sort`,category:`Sorting`,keyLabel:`Smallest so far`,description:`Watch selection sort scan for the smallest remaining value and swap it into place, building the sorted array from the left.`,keywords:`selection sort visualization, selection sort animation, selection sort algorithm, sorting algorithm visualizer, selection sort step by step`,explanation:[`Selection sort scans the unsorted part of the array for its smallest value, then swaps it with the first unsorted value. After each pass, one more value is in its final place.`,`It always makes O(n²) comparisons, even on a sorted array, but at most n - 1 swaps. That can matter when writing to memory is much slower than reading it.`],complexity:{best:`O(n²)`,average:`O(n²)`,worst:`O(n²)`,space:`O(1)`},codeLanguage:`javascript`,input:`values`,code:`function selectionSort(values) {
  for (let i = 0; i < values.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < values.length; j++) {
      if (values[j] < values[min]) min = j;
    }
    [values[i], values[min]] = [values[min], values[i]];
  }
  return values;
}`,defaultValues:[42,17,88,5,63,29,71,12,54,36],run(e){let{values:t,steps:n,record:r,markDone:i,markAllDone:a}=l(e);r(1,`Start: find the smallest value, then the next smallest, and so on.`);for(let e=0;e<t.length-1;e++){let n=e,a=[e,t.length-1];r(3,`The smallest so far is ${t[n]}.`,{marks:{[n]:`key`},range:a});for(let i=e+1;i<t.length;i++){let e=t[i]<t[n];r(5,e?`${t[i]} is smaller than ${t[n]}: it is the new smallest.`:`${t[i]} is not smaller than ${t[n]}.`,{marks:{[n]:`key`,[i]:`compare`},range:a}),e&&(n=i)}[t[e],t[n]]=[t[n],t[e]],i(e),r(7,n===e?`${t[e]} is already in its place.`:`Swap ${t[e]} into position ${e}.`,{marks:n===e?{[e]:`write`}:{[e]:`swap`,[n]:`swap`}})}return a(),r(9,`Done: the array is sorted.`),n}},{slug:`merge-sort`,name:`Merge sort`,category:`Sorting`,keyLabel:`Split point`,description:`Watch merge sort split the array in halves until single values remain, then merge the sorted halves back together.`,keywords:`merge sort visualization, merge sort animation, merge sort algorithm, divide and conquer, sorting algorithm visualizer`,explanation:[`Merge sort divides and conquers: it splits the array in two, sorts each half the same way, then merges the two sorted halves by repeatedly taking the smaller of their first values.`,`It always takes O(n log n) time, whatever the input, and it is stable: equal values keep their order. The price is O(n) extra memory for the halves being merged.`],complexity:{best:`O(n log n)`,average:`O(n log n)`,worst:`O(n log n)`,space:`O(n)`},codeLanguage:`javascript`,input:`values`,code:`function mergeSort(values, low = 0, high = values.length - 1) {
  if (low >= high) return values;
  const middle = Math.floor((low + high) / 2);
  mergeSort(values, low, middle);
  mergeSort(values, middle + 1, high);
  merge(values, low, middle, high);
  return values;
}

function merge(values, low, middle, high) {
  const left = values.slice(low, middle + 1);
  const right = values.slice(middle + 1, high + 1);
  let i = 0, j = 0, k = low;
  while (i < left.length && j < right.length) {
    values[k++] = left[i] <= right[j] ? left[i++] : right[j++];
  }
  while (i < left.length) values[k++] = left[i++];
  while (j < right.length) values[k++] = right[j++];
}`,defaultValues:[42,17,88,5,63,29,71,12,54,36],run(e){let{values:t,steps:n,record:r,markAllDone:i}=l(e),a=(e,n,i)=>{let a=t.slice(e,n+1),o=t.slice(n+1,i+1),s=[e,i],c=[],l=()=>t.splice(e,i-e+1,...c,...a.slice(u),...o.slice(d));r(11,`Merge [${a.join(`, `)}] and [${o.join(`, `)}].`,{range:s});let u=0,d=0;for(;u<a.length&&d<o.length;){let t=a[u]<=o[d],n=t?a[u++]:o[d++],i=t?o[d]:a[u];c.push(n),l(),r(15,`${n} is smaller than ${i}: take ${n}.`,{marks:{[e+c.length-1]:`write`},range:s})}for(;u<a.length||d<o.length;){let t=u<a.length;c.push(t?a[u++]:o[d++]),l(),r(t?17:18,`Copy the remaining ${c.at(-1)}.`,{marks:{[e+c.length-1]:`write`},range:s})}},o=(e,t)=>{if(e>=t)return;let n=Math.floor((e+t)/2);r(3,`Split positions ${e}–${t} in two at ${n}.`,{marks:{[n]:`key`},range:[e,t]}),o(e,n),o(n+1,t),a(e,n,t)};return r(1,`Start: split the array in halves until single values remain.`),o(0,t.length-1),i(),r(7,`Done: the array is sorted.`),n}},{slug:`quick-sort`,name:`Quick sort`,category:`Sorting`,keyLabel:`Pivot`,description:`Watch quick sort pick a pivot, move the smaller values before it and the bigger ones after it, then sort each side the same way.`,keywords:`quick sort visualization, quicksort animation, quick sort algorithm, partition, pivot, sorting algorithm visualizer`,explanation:[`Quick sort picks a pivot, here the last value of the range, and partitions the range: every value smaller than the pivot moves before it, so the pivot lands in its final place. It then sorts the two sides the same way.`,`On average it takes O(n log n) time and sorts in place, which makes it one of the fastest sorts in practice. A bad pivot every time, such as the last value of an already sorted array, makes it O(n²); real implementations pick a random or median pivot to avoid that.`],complexity:{best:`O(n log n)`,average:`O(n log n)`,worst:`O(n²)`,space:`O(log n)`},codeLanguage:`javascript`,input:`values`,code:`function quickSort(values, low = 0, high = values.length - 1) {
  if (low >= high) return values;
  const p = partition(values, low, high);
  quickSort(values, low, p - 1);
  quickSort(values, p + 1, high);
  return values;
}

function partition(values, low, high) {
  const pivot = values[high];
  let i = low;
  for (let j = low; j < high; j++) {
    if (values[j] < pivot) {
      [values[i], values[j]] = [values[j], values[i]];
      i++;
    }
  }
  [values[i], values[high]] = [values[high], values[i]];
  return i;
}`,defaultValues:[42,17,88,5,63,29,71,12,54,36],run(e){let{values:t,steps:n,record:r,markDone:i,markAllDone:a}=l(e),o=(e,n)=>{let a=t[n],o=[e,n];r(10,`The pivot is ${a}, the last value of the range.`,{marks:{[n]:`key`},range:o});let s=e;for(let i=e;i<n;i++){let e=t[i]<a;r(13,e?`${t[i]} is smaller than the pivot ${a}.`:`${t[i]} is not smaller than the pivot ${a}: leave it.`,{marks:{[i]:`compare`,[n]:`key`},range:o}),e&&([t[s],t[i]]=[t[i],t[s]],r(14,s===i?`${t[s]} is already with the smaller values.`:`Swap ${t[s]} into the smaller side.`,{marks:s===i?{[s]:`write`,[n]:`key`}:{[s]:`swap`,[i]:`swap`,[n]:`key`},range:o}),s++)}return[t[s],t[n]]=[t[n],t[s]],i(s),r(18,`Put the pivot ${a} between the two sides: its final place.`,{marks:{[s]:`swap`,[n]:`swap`},range:o}),s},s=(e,n)=>{if(e>n)return;if(e===n){i(e),r(2,`${t[e]} is alone in its range: it is in place.`,{range:[e,n]});return}let a=o(e,n);s(e,a-1),s(a+1,n)};return r(1,`Start: partition around a pivot, then sort each side.`),s(0,t.length-1),a(),r(6,`Done: the array is sorted.`),n}},u,{slug:`stack`,name:`Stack`,category:`Data structures`,keyLabel:`Top`,markLabels:{write:`Pushed`,swap:`Popped`},description:`Watch values pile up on a stack and come back off in reverse order: the last one pushed is the first one popped.`,keywords:`stack visualization, stack data structure, push pop, lifo, last in first out, stack animation`,explanation:[`A stack is like a pile of plates: you add (push) and remove (pop) only at the top. So the last value pushed is always the first one popped, which is called LIFO, last in, first out.`,`Both operations take O(1) time. Stacks are everywhere: the call stack of a program, undo history, the back button, checking matching brackets, and depth-first search.`],complexity:{best:`O(1)`,average:`O(1)`,worst:`O(1)`,space:`O(n)`},codeLanguage:`javascript`,code:`class Stack {
  items = [];
  push(value) {
    this.items.push(value);
  }
  pop() {
    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
}`,input:`values`,defaultValues:[42,17,88,5,63],maxValues:8,run(e){let t=[],n=[],r=[],i=70+e.length*48,a=(e,a,o)=>t.push({kind:`graph`,height:i,nodes:n.map((e,t)=>({id:`i${t}`,label:String(e),x:300,y:i-40-t*48,shape:`box`,mark:t===n.length-1?o:void 0,note:t===n.length-1?`top`:void 0})),edges:[],panels:[{label:`Stack, bottom to top`,items:n.map(String)},{label:`Popped`,items:r.map(String)}],line:e,message:a});a(2,`Start with an empty stack.`);for(let t of e)n.push(t),a(4,`Push ${t}: it goes on top.`,`write`);for(a(10,`Peek: the top is ${n.at(-1)}, the last value pushed.`,`key`);n.length>0;)a(7,`Pop ${n.at(-1)} off the top.`,`swap`),r.push(n.pop());return a(7,`The stack is empty. The values came out in reverse order: last in, first out.`),t}},{slug:`queue`,name:`Queue`,category:`Data structures`,keyLabel:`Front`,markLabels:{write:`Enqueued`,swap:`Dequeued`},description:`Watch values join the back of a queue and leave from the front, in the order they arrived: first in, first out.`,keywords:`queue visualization, queue data structure, enqueue dequeue, fifo, first in first out, queue animation`,explanation:[`A queue works like a line at a checkout: values join at the back (enqueue) and leave from the front (dequeue). The first value in is the first one out, which is called FIFO.`,`With a linked list or a ring buffer, both operations take O(1) time. This short version uses an array's shift(), which moves every remaining value and takes O(n). Queues schedule jobs, buffer messages, and drive breadth-first search.`],complexity:{best:`O(1)`,average:`O(1)`,worst:`O(1)`,space:`O(n)`},codeLanguage:`javascript`,code:`class Queue {
  items = [];
  enqueue(value) {
    this.items.push(value);
  }
  dequeue() {
    return this.items.shift();
  }
  peek() {
    return this.items[0];
  }
}`,input:`values`,defaultValues:[42,17,88,5,63],maxValues:9,run(e){let t=[],n=[],r=[],i=(e,i,a={})=>t.push({kind:`graph`,height:130,nodes:n.map((e,t)=>{let r=t===0,i=t===n.length-1;return{id:`i${t}`,label:String(e),x:50+t*62,y:55,shape:`box`,mark:r&&a.front?a.front:i?a.back:void 0,note:[r&&`front`,i&&`back`].filter(Boolean).join(` · `)||void 0}}),edges:[],panels:[{label:`Queue, front to back`,items:n.map(String)},{label:`Dequeued`,items:r.map(String)}],line:e,message:i});i(2,`Start with an empty queue.`);for(let t of e)n.push(t),i(4,`Enqueue ${t}: it joins the back.`,{back:`write`});for(i(10,`Peek: the front is ${n[0]}, the first value that arrived.`,{front:`key`});n.length>0;)i(7,`Dequeue ${n[0]} from the front.`,{front:`swap`}),r.push(n.shift());return i(7,`The queue is empty. The values came out in the order they went in: first in, first out.`),t}},{slug:`reverse-linked-list`,name:`Reverse a linked list`,category:`Data structures`,keyLabel:`Current node`,markLabels:{write:`Pointer changed`,done:`Reversed`},description:`Watch three pointers, prev, current and next, walk along a linked list and turn every arrow around, in one pass.`,keywords:`reverse linked list, linked list visualization, linked list reversal, pointers, coding interview, linked list animation`,explanation:[`In a linked list, each node only knows the next one. To reverse it, walk along the list with two pointers: current, the node being turned around, and prev, the node before it. Save current's next node first, because changing current.next loses it, then point current back at prev and move both pointers one step forward.`,`When current falls off the end, prev is the last node, which is the new head. It takes one pass, O(n), and no extra memory: a classic coding interview question.`],complexity:{best:`O(n)`,average:`O(n)`,worst:`O(n)`,space:`O(1)`},codeLanguage:`javascript`,code:`function reverse(head) {
  let prev = null;
  let current = head;
  while (current !== null) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
}`,input:`values`,defaultValues:[42,17,88,5,63],maxValues:8,run(e){let t=[],n=e.map((t,n)=>n+1<e.length?n+1:null),r=t=>t===null?`null`:String(e[t]),i=(r,i,a,o)=>t.push({kind:`graph`,height:120,nodes:e.map((e,t)=>({id:`n${t}`,label:String(e),x:40+t*74,y:50,shape:`box`,mark:t===a.current?`key`:void 0,done:a.current===null||a.prev!==null&&t<=a.prev,note:[t===a.head&&`head`,t===a.prev&&`prev`,t===a.current&&`current`,a.next!==void 0&&t===a.next&&`next`].filter(Boolean).join(` · `)||void 0})),edges:n.flatMap((e,t)=>e===null?[]:[{from:`n${t}`,to:`n${e}`,directed:!0,mark:t===o?`write`:void 0}]),panels:[],line:r,message:i}),a=null,o=0;for(i(3,`prev starts at null, and current at the head, ${r(0)}.`,{prev:a,current:o,head:0});o!==null;){let e=n[o];i(5,`Save the next node, ${r(e)}, before changing current's arrow.`,{prev:a,current:o,next:e}),n[o]=a,i(6,a===null?`Point ${r(o)} at null: it will be the last node.`:`Point ${r(o)} back at ${r(a)}.`,{prev:a,current:o,next:e},o),a=o,o=e,i(8,`Move prev to ${r(a)} and current to ${r(o)}.`,{prev:a,current:o})}return i(10,`current is null, so ${r(a)} is the new head: the list is reversed.`,{prev:a,current:null,head:a}),t}},d,c,{slug:`breadth-first-search`,name:`Breadth-first search`,category:`Graphs`,keyLabel:`Current node`,markLabels:{frontier:`In the queue`,compare:`Checked`,path:`Discovery edge`},description:`Watch breadth-first search explore a graph in waves: first the start's neighbors, then their neighbors, using a queue.`,keywords:`breadth first search visualization, bfs animation, bfs algorithm, graph traversal, graph algorithms visualizer, bfs queue`,explanation:[`Breadth-first search explores a graph level by level. It takes the oldest node from a queue, and adds every neighbor it hasn't seen yet to the back of the queue. So it visits all nodes one edge away from the start, then all nodes two edges away, and so on.`,`Because it goes in waves, the discovery edges form the shortest paths from the start, counted in edges. It runs in O(V + E), V nodes and E edges, and is used for shortest routes in unweighted graphs, friend suggestions, and web crawlers.`],complexity:{best:`O(V + E)`,average:`O(V + E)`,worst:`O(V + E)`,space:`O(V)`},codeLanguage:`javascript`,code:`function bfs(graph, start) {
  const visited = new Set([start]);
  const queue = [start];
  while (queue.length > 0) {
    const node = queue.shift();
    for (const next of graph[node]) {
      if (!visited.has(next)) {
        visited.add(next);
        queue.push(next);
      }
    }
  }
  return visited;
}`,input:`graph`,graph:h,defaultStart:`A`,run(e,t){let n=[],r=new Set([t]),i=[t],a=[],o={},s=(t,r,s,c)=>{let l={};for(let e of a)l[e]=`visited`;for(let e of i)l[e]=`frontier`;s&&(l[s]=`key`);let u=Object.fromEntries(a.map((e,t)=>[e,`#${t+1}`]));n.push(p(e,{line:t,message:r,nodeMarks:l,notes:u,edgeMarks:{...o,...s&&c?{[f(s,c)]:`compare`}:{}},panels:[{label:`Queue, front first`,items:[...i]},{label:`Visit order`,items:[...a]}]}))};for(s(3,`Start at ${t}: mark it seen and put it in the queue.`);i.length>0;){let t=i.shift();a.push(t),s(5,`Take ${t} from the front of the queue.`,t);for(let{id:n}of m(e,t)){if(r.has(n)){s(7,`${n} was already seen: skip it.`,t,n);continue}r.add(n),i.push(n),o[f(t,n)]=`path`,s(9,`Discover ${n}: add it to the back of the queue.`,t)}}return s(13,`The queue is empty: every node reachable from ${t} was visited, in waves.`),n}},{slug:`depth-first-search`,name:`Depth-first search`,category:`Graphs`,keyLabel:`Current node`,markLabels:{frontier:`On the call stack`,visited:`Finished`,compare:`Checked`,path:`Discovery edge`},description:`Watch depth-first search follow one path as deep as it can, then back up to the last fork and try the next way.`,keywords:`depth first search visualization, dfs animation, dfs algorithm, graph traversal, recursion, backtracking, graph algorithms visualizer`,explanation:[`Depth-first search goes as deep as it can before backing up. From a node, it moves to the first neighbor it hasn't visited, then that node's first unvisited neighbor, and so on. At a dead end, it returns to the previous node and tries its next neighbor: that is backtracking.`,`Here the recursion keeps track of the path, through the call stack; an explicit stack works too. It runs in O(V + E), and is the base of maze solving, topological sorting, cycle detection and finding connected components.`],complexity:{best:`O(V + E)`,average:`O(V + E)`,worst:`O(V + E)`,space:`O(V)`},codeLanguage:`javascript`,code:`function dfs(graph, node, visited = new Set()) {
  visited.add(node);
  for (const next of graph[node]) {
    if (!visited.has(next)) {
      dfs(graph, next, visited);
    }
  }
  return visited;
}`,input:`graph`,graph:h,defaultStart:`A`,run(e,t){let n=[],r=new Set,i=new Set,a=[],o=[],s={},c=(t,r,c)=>{let l=a.at(-1),u={};for(let e of i)u[e]=`visited`;for(let e of a)u[e]=`frontier`;l&&(u[l]=`key`),n.push(p(e,{line:t,message:r,nodeMarks:u,notes:Object.fromEntries(o.map((e,t)=>[e,`#${t+1}`])),edgeMarks:{...s,...l&&c?{[f(l,c)]:`compare`}:{}},panels:[{label:`Call stack, bottom to top`,items:[...a]},{label:`Visit order`,items:[...o]}]}))},l=t=>{r.add(t),a.push(t),o.push(t),c(2,`Visit ${t}.`);for(let{id:n}of m(e,t)){if(r.has(n)){c(4,`${n} was already visited: skip it.`,n);continue}s[f(t,n)]=`path`,c(5,`${n} is new: go deeper, from ${t} to ${n}.`,n),l(n),c(3,`Back at ${t}: try its next neighbor.`)}i.add(t),c(7,`${t} has no unvisited neighbor left: it is finished, return.`),a.pop()};return l(t),c(8,`Done: every node reachable from ${t} was visited, one path at a time.`),n}},{slug:`dijkstra`,name:`Dijkstra's shortest paths`,category:`Graphs`,keyLabel:`Closest node`,markLabels:{visited:`Done`,compare:`Checked`,write:`Shorter found`,path:`Shortest path`},description:`Watch Dijkstra's algorithm find the shortest distance from one node to every other, always settling the closest node next.`,keywords:`dijkstra visualization, dijkstra algorithm animation, shortest path, weighted graph, graph algorithms visualizer, dijkstra step by step`,explanation:[`Dijkstra's algorithm finds the shortest distance from a start node to every other node of a graph with non-negative weights. It keeps a best-known distance for each node, starting at 0 for the start and infinity for the others.`,`At each step it takes the closest node not done yet. Its distance is final, because any other route would go through a node that is already further away. Then it relaxes its edges: if going through it makes a neighbor closer, it updates that neighbor's distance. This version scans for the closest node, in O(V²); with a priority queue it takes O((V + E) log V).`],complexity:{best:`O(V²)`,average:`O(V²)`,worst:`O(V²)`,space:`O(V)`},codeLanguage:`javascript`,code:`function dijkstra(graph, start) {
  const distance = { [start]: 0 };
  const done = new Set();
  while (true) {
    const node = closestNotDone(distance, done);
    if (node === undefined) break;
    done.add(node);
    for (const [next, weight] of graph[node]) {
      const through = distance[node] + weight;
      if (through < (distance[next] ?? Infinity)) {
        distance[next] = through;
      }
    }
  }
  return distance;
}`,input:`graph`,graph:h,defaultStart:`A`,run(e,t){let n=[],r={[t]:0},i={},a=[],o=(t,o,s,c)=>{let l={};for(let e of a)l[e]=`visited`;s&&(l[s]=`key`);let u={};for(let[e,t]of Object.entries(i))u[f(e,t)]=`path`;c&&(u[c[0]]=c[1]),n.push(p(e,{line:t,message:o,nodeMarks:l,notes:Object.fromEntries(e.nodes.map(({id:e})=>[e,e in r?String(r[e]):`∞`])),edgeMarks:u,showWeights:!0,panels:[{label:`Done, in order`,items:[...a]},{label:`Waiting, by distance`,items:Object.entries(r).filter(([e])=>!a.includes(e)).sort((e,t)=>e[1]-t[1]).map(([e,t])=>`${e}:${t}`)}]}))};for(o(2,`The start ${t} is at distance 0; every other node is at ∞ for now.`);;){let t=Object.entries(r).filter(([e])=>!a.includes(e)).sort((e,t)=>e[1]-t[1]||e[0].localeCompare(t[0]))[0]?.[0];if(t===void 0)break;a.push(t),o(7,`${t} is the closest node not done, at ${r[t]}: its distance is final.`,t);for(let{id:n,weight:s}of m(e,t)){if(a.includes(n))continue;let e=r[t]+s,c=r[n],l=f(t,n);c===void 0||e<c?(r[n]=e,i[n]=t,o(11,`Through ${t}, ${n} costs ${r[t]} + ${s} = ${e}, shorter than ${c??`∞`}: update it.`,t,[l,`write`])):o(10,`Through ${t}, ${n} would cost ${e}, not shorter than ${c}: keep ${c}.`,t,[l,`compare`])}}return o(6,`Every reachable node is done: the highlighted edges are the shortest paths from ${t}.`),n}},{slug:`grid-shortest-path`,name:`Shortest path on a grid`,category:`Grids`,keyLabel:`Current cell`,markLabels:{frontier:`In the queue`,visited:`Explored`,path:`Shortest path`},description:`Draw walls on a grid, then watch breadth-first search spread out from the start in rings until it reaches the end.`,keywords:`grid pathfinding visualization, bfs shortest path, maze solver, breadth first search grid, pathfinding visualizer`,explanation:[`A grid is a graph where each open cell is a node, connected to the cells above, below, left and right. Breadth-first search explores it in rings: every cell one step from the start, then two steps, and so on, until it reaches the end.`,`Each cell remembers which cell discovered it, so following those links back from the end gives a shortest path. It explores up to every open cell, O(n) for n cells, in every direction at once. A* reaches the end with far fewer cells by heading towards it.`],complexity:{best:`O(n)`,average:`O(n)`,worst:`O(n)`,space:`O(n)`},codeLanguage:`javascript`,code:`function shortestPath(grid, start, end) {
  const previous = new Map([[start, null]]);
  const queue = [start];
  while (queue.length > 0) {
    const cell = queue.shift();
    if (cell === end) return pathTo(end, previous);
    for (const next of neighbors(grid, cell)) {
      if (!previous.has(next)) {
        previous.set(next, cell);
        queue.push(next);
      }
    }
  }
  return null;
}`,input:`grid`,grid:o,run(r){let i=[],a=new Map([[r.start,null]]),o=[r.start],s=new Set,c=(t,n,a,c=[])=>{let l={};for(let e of s)l[e]=`visited`;for(let e of o)l[e]=`frontier`;a!==void 0&&(l[a]=`key`);for(let e of c)l[e]=`path`;i.push(e(r,{line:t,message:n,marks:l,panels:[{label:`Explored`,items:[`${s.size} cells`]},{label:`In the queue`,items:[`${o.length} cells`]}]}))};for(c(3,`Start: put the start cell in the queue.`);o.length>0;){let e=o.shift();if(s.add(e),e===r.end){let e=n(a,r.end);return c(6,`Reached the end: the shortest path takes ${e.length-1} steps.`,void 0,e),i}let l=0;for(let n of t(r,e))a.has(n)||(a.set(n,e),o.push(n),l++);c(7,l===0?`Explore the oldest cell of the queue: it has no new neighbor.`:`Explore the oldest cell of the queue: add its ${l} new ${l===1?`neighbor`:`neighbors`}.`,e)}return c(14,`The queue is empty: the walls cut the end off from the start.`),i}},s];export{g as t};