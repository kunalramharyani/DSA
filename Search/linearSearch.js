function linearSearch(arr, key) {
  for (let index in arr) {
    if (arr[index] === key) return index;
  }
  return -1;
}
