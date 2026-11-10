function e(e){let t=[...e],n=new Set,r=[];return{values:t,steps:r,markDone:(...e)=>{for(let t of e)n.add(t)},markAllDone:()=>t.forEach((e,t)=>n.add(t)),record:(e,i,a={})=>{r.push({values:[...t],marks:a.marks??{},done:[...n].sort((e,t)=>e-t),range:a.range,line:e,message:i})}}}var t=[{slug:`bubble-sort`,name:`Bubble sort`,category:`Sorting`,keyLabel:`Key`,description:`Watch bubble sort compare neighbors and swap them, so that the largest values bubble up to the end, one pass at a time.`,keywords:`bubble sort visualization, bubble sort animation, bubble sort algorithm, sorting algorithm visualizer, bubble sort step by step`,explanation:[`Bubble sort walks through the array and compares each pair of neighbors, swapping them when they are in the wrong order. At the end of a pass, the largest value has bubbled up to the end, so the next pass can stop one place earlier.`,`When a whole pass makes no swap, the array is sorted and the algorithm stops early. That makes it fast on arrays that are already almost sorted, but with O(n²) comparisons in general, it is mostly used to teach sorting.`],complexity:{best:`O(n)`,average:`O(n²)`,worst:`O(n²)`,space:`O(1)`},codeLanguage:`javascript`,code:`function bubbleSort(values) {
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
}`,defaultValues:[42,17,88,5,63,29,71,12,54,36],run(t){let{values:n,steps:r,record:i,markDone:a,markAllDone:o}=e(t);i(1,`Start: each pass moves the largest remaining value to the end.`);for(let e=n.length-1;e>0;e--){let t=!1;for(let r=0;r<e;r++){let e=n[r],a=n[r+1];i(5,`Compare ${e} and ${a}.`,{marks:{[r]:`compare`,[r+1]:`compare`}}),e>a&&([n[r],n[r+1]]=[a,e],t=!0,i(6,`${e} is bigger than ${a}: swap them.`,{marks:{[r]:`swap`,[r+1]:`swap`}}))}if(a(e),!t){o(),i(10,`No swap in this pass: the array is sorted.`);break}i(2,`${n[e]} is in its final place.`)}return o(),i(12,`Done: the array is sorted.`),r}},{slug:`insertion-sort`,name:`Insertion sort`,category:`Sorting`,keyLabel:`Current value`,description:`Watch insertion sort take each value and slide it left into its place among the values before it, like sorting cards in your hand.`,keywords:`insertion sort visualization, insertion sort animation, insertion sort algorithm, sorting algorithm visualizer, insertion sort step by step`,explanation:[`Insertion sort keeps the left part of the array sorted. It takes the next value, then shifts every bigger value before it one place to the right, and drops the value into the gap.`,`On an almost sorted array, few values move, so it runs in nearly O(n). That is why fast library sorts, such as Timsort, switch to insertion sort for small pieces of an array.`],complexity:{best:`O(n)`,average:`O(n²)`,worst:`O(n²)`,space:`O(1)`},codeLanguage:`javascript`,code:`function insertionSort(values) {
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
}`,defaultValues:[42,17,88,5,63,29,71,12,54,36],run(t){let{values:n,steps:r,record:i,markAllDone:a}=e(t);i(1,`Start: the first value alone is already sorted.`);for(let e=1;e<n.length;e++){let t=n[e];i(3,`Take ${t} and find its place among the values before it.`,{marks:{[e]:`key`},range:[0,e]});let r=e-1;for(;r>=0&&(i(5,`Compare ${n[r]} with ${t}.`,{marks:{[r]:`compare`,[r+1]:`key`},range:[0,e]}),!(n[r]<=t));)n[r+1]=n[r],n[r]=t,i(6,`${n[r+1]} is bigger: shift it one place to the right.`,{marks:{[r]:`key`,[r+1]:`write`},range:[0,e]}),r--;n[r+1]=t,i(9,`Put ${t} at position ${r+1}.`,{marks:{[r+1]:`write`},range:[0,e]})}return a(),i(11,`Done: the array is sorted.`),r}},{slug:`selection-sort`,name:`Selection sort`,category:`Sorting`,keyLabel:`Smallest so far`,description:`Watch selection sort scan for the smallest remaining value and swap it into place, building the sorted array from the left.`,keywords:`selection sort visualization, selection sort animation, selection sort algorithm, sorting algorithm visualizer, selection sort step by step`,explanation:[`Selection sort scans the unsorted part of the array for its smallest value, then swaps it with the first unsorted value. After each pass, one more value is in its final place.`,`It always makes O(n²) comparisons, even on a sorted array, but at most n - 1 swaps. That can matter when writing to memory is much slower than reading it.`],complexity:{best:`O(n²)`,average:`O(n²)`,worst:`O(n²)`,space:`O(1)`},codeLanguage:`javascript`,code:`function selectionSort(values) {
  for (let i = 0; i < values.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < values.length; j++) {
      if (values[j] < values[min]) min = j;
    }
    [values[i], values[min]] = [values[min], values[i]];
  }
  return values;
}`,defaultValues:[42,17,88,5,63,29,71,12,54,36],run(t){let{values:n,steps:r,record:i,markDone:a,markAllDone:o}=e(t);i(1,`Start: find the smallest value, then the next smallest, and so on.`);for(let e=0;e<n.length-1;e++){let t=e,r=[e,n.length-1];i(3,`The smallest so far is ${n[t]}.`,{marks:{[t]:`key`},range:r});for(let a=e+1;a<n.length;a++){let e=n[a]<n[t];i(5,e?`${n[a]} is smaller than ${n[t]}: it is the new smallest.`:`${n[a]} is not smaller than ${n[t]}.`,{marks:{[t]:`key`,[a]:`compare`},range:r}),e&&(t=a)}[n[e],n[t]]=[n[t],n[e]],a(e),i(7,t===e?`${n[e]} is already in its place.`:`Swap ${n[e]} into position ${e}.`,{marks:t===e?{[e]:`write`}:{[e]:`swap`,[t]:`swap`}})}return o(),i(9,`Done: the array is sorted.`),r}},{slug:`merge-sort`,name:`Merge sort`,category:`Sorting`,keyLabel:`Split point`,description:`Watch merge sort split the array in halves until single values remain, then merge the sorted halves back together.`,keywords:`merge sort visualization, merge sort animation, merge sort algorithm, divide and conquer, sorting algorithm visualizer`,explanation:[`Merge sort divides and conquers: it splits the array in two, sorts each half the same way, then merges the two sorted halves by repeatedly taking the smaller of their first values.`,`It always takes O(n log n) time, whatever the input, and it is stable: equal values keep their order. The price is O(n) extra memory for the halves being merged.`],complexity:{best:`O(n log n)`,average:`O(n log n)`,worst:`O(n log n)`,space:`O(n)`},codeLanguage:`javascript`,code:`function mergeSort(values, low = 0, high = values.length - 1) {
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
}`,defaultValues:[42,17,88,5,63,29,71,12,54,36],run(t){let{values:n,steps:r,record:i,markAllDone:a}=e(t),o=(e,t,r)=>{let a=n.slice(e,t+1),o=n.slice(t+1,r+1),s=[e,r],c=[],l=()=>n.splice(e,r-e+1,...c,...a.slice(u),...o.slice(d));i(11,`Merge [${a.join(`, `)}] and [${o.join(`, `)}].`,{range:s});let u=0,d=0;for(;u<a.length&&d<o.length;){let t=a[u]<=o[d],n=t?a[u++]:o[d++],r=t?o[d]:a[u];c.push(n),l(),i(15,`${n} is smaller than ${r}: take ${n}.`,{marks:{[e+c.length-1]:`write`},range:s})}for(;u<a.length||d<o.length;){let t=u<a.length;c.push(t?a[u++]:o[d++]),l(),i(t?17:18,`Copy the remaining ${c.at(-1)}.`,{marks:{[e+c.length-1]:`write`},range:s})}},s=(e,t)=>{if(e>=t)return;let n=Math.floor((e+t)/2);i(3,`Split positions ${e}–${t} in two at ${n}.`,{marks:{[n]:`key`},range:[e,t]}),s(e,n),s(n+1,t),o(e,n,t)};return i(1,`Start: split the array in halves until single values remain.`),s(0,n.length-1),a(),i(7,`Done: the array is sorted.`),r}},{slug:`quick-sort`,name:`Quick sort`,category:`Sorting`,keyLabel:`Pivot`,description:`Watch quick sort pick a pivot, move the smaller values before it and the bigger ones after it, then sort each side the same way.`,keywords:`quick sort visualization, quicksort animation, quick sort algorithm, partition, pivot, sorting algorithm visualizer`,explanation:[`Quick sort picks a pivot, here the last value of the range, and partitions the range: every value smaller than the pivot moves before it, so the pivot lands in its final place. It then sorts the two sides the same way.`,`On average it takes O(n log n) time and sorts in place, which makes it one of the fastest sorts in practice. A bad pivot every time, such as the last value of an already sorted array, makes it O(n²); real implementations pick a random or median pivot to avoid that.`],complexity:{best:`O(n log n)`,average:`O(n log n)`,worst:`O(n²)`,space:`O(log n)`},codeLanguage:`javascript`,code:`function quickSort(values, low = 0, high = values.length - 1) {
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
}`,defaultValues:[42,17,88,5,63,29,71,12,54,36],run(t){let{values:n,steps:r,record:i,markDone:a,markAllDone:o}=e(t),s=(e,t)=>{let r=n[t],o=[e,t];i(10,`The pivot is ${r}, the last value of the range.`,{marks:{[t]:`key`},range:o});let s=e;for(let a=e;a<t;a++){let e=n[a]<r;i(13,e?`${n[a]} is smaller than the pivot ${r}.`:`${n[a]} is not smaller than the pivot ${r}: leave it.`,{marks:{[a]:`compare`,[t]:`key`},range:o}),e&&([n[s],n[a]]=[n[a],n[s]],i(14,s===a?`${n[s]} is already with the smaller values.`:`Swap ${n[s]} into the smaller side.`,{marks:s===a?{[s]:`write`,[t]:`key`}:{[s]:`swap`,[a]:`swap`,[t]:`key`},range:o}),s++)}return[n[s],n[t]]=[n[t],n[s]],a(s),i(18,`Put the pivot ${r} between the two sides: its final place.`,{marks:{[s]:`swap`,[t]:`swap`},range:o}),s},c=(e,t)=>{if(e>t)return;if(e===t){a(e),i(2,`${n[e]} is alone in its range: it is in place.`,{range:[e,t]});return}let r=s(e,t);c(e,r-1),c(r+1,t)};return i(1,`Start: partition around a pivot, then sort each side.`),c(0,n.length-1),o(),i(6,`Done: the array is sorted.`),r}},{slug:`binary-search`,name:`Binary search`,category:`Searching`,keyLabel:`Middle`,description:`Watch binary search find a value in a sorted array by checking the middle and throwing away half of the values at every step.`,keywords:`binary search visualization, binary search animation, binary search algorithm, searching algorithm visualizer, binary search step by step`,explanation:[`Binary search works on a sorted array. It checks the middle value: if it is the target, the search is over; if it is smaller, the target can only be in the right half, otherwise only in the left half. Each step halves the range.`,`A million values need at most 20 steps, against up to a million for a linear search. The catch is that the array must be sorted, and stay sorted as values are added.`],complexity:{best:`O(1)`,average:`O(log n)`,worst:`O(log n)`,space:`O(1)`},codeLanguage:`javascript`,code:`function binarySearch(values, target) {
  let low = 0;
  let high = values.length - 1;
  while (low <= high) {
    const middle = Math.floor((low + high) / 2);
    if (values[middle] === target) return middle;
    if (values[middle] < target) low = middle + 1;
    else high = middle - 1;
  }
  return -1;
}`,defaultValues:[5,12,17,29,36,42,54,63,71,88],defaultTarget:63,needsSortedValues:!0,run(t,n=0){let{values:r,steps:i,record:a}=e(t),o=0,s=r.length-1;for(a(2,`Look for ${n} anywhere in the array.`,{range:[o,s]});o<=s;){let e=Math.floor((o+s)/2),t=[o,s];if(a(5,`The middle of positions ${o}–${s} is ${e}: check ${r[e]}.`,{marks:{[e]:`key`},range:t}),r[e]===n)return a(6,`Found ${n} at position ${e}.`,{marks:{[e]:`found`},range:[e,e]}),i;r[e]<n?(a(7,`${r[e]} is smaller than ${n}: keep the right half.`,{marks:{[e]:`compare`},range:t}),o=e+1):(a(8,`${r[e]} is bigger than ${n}: keep the left half.`,{marks:{[e]:`compare`},range:t}),s=e-1)}return a(10,`The range is empty: ${n} is not in the array.`),i}}];export{t};