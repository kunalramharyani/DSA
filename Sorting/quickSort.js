function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (array, idx1, idx2) =>
    ([array[idx1], array[idx2]] = [array[idx2], array[idx1]]);
  let pivot = arr[start];
  let swapIdx = start;
  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIdx = pivot(arr, left, right);
    // Left
    quickSort(arr, left, pivotIdx - 1);
    //Right
    quickSort(arr, pivotIdx + 1, right);
  }
  return arr;
}
