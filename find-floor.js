function findFloor(arr, nm, lo = 0, hi = arr.length - 1) {
  if (lo > hi) return -1;
  if (nm >= arr[hi]) return arr[hi];
  
  let median = Math.floor((lo + hi) / 2);
  
  if(arr[median] === nm) return arr[median];
  
  if (median > 0 && arr[median - 1] <= nm && nm < arr[median]){
	  return arr[median - 1];
  }
  
  if (nm < arr[median]){
	  return findFloor(arr, nm, lo, median - 1);
  }
  
  return findFloor(arr, nm, median + 1, hi);
}

module.exports = findFloor