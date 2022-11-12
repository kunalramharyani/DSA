function binarySearch(arr, key) {
  let low = 0;
  let high = arr.length - 1;
  let mid = 0;
  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    if (key === arr[mid]) return mid;
    if (key > arr[mid]) low = mid + 1;
    if (key < arr[mid]) high = mid - 1;
  }
  return -1;
}
