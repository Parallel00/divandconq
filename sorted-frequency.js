function sortedFrequency(arr, nm) {
	let idx1 = findFirst(arr, nm);
	if (idx1 == -1) return idx1;
	let lsIdx = findLast(arr, nm);
	return lsIdx - idx1 + 1;
	
}

function findFirst(arr, nm, lo = 0, hi = arr.length - 1) {
  if (hi >= lo) {
    let middl = Math.floor((lo + hi) / 2)
	
    if ((middl === 0 || num > arr[middl - 1]) && arr[middl] === num) {
      return middl;
    } else if (num > arr[mid]) {
      return findFirst(arr, num, middl + 1, hi)
    } else {
      return findFirst(arr, num, lo, middl - 1)
    }
  }
  
  return -1
}

function findLast(arr, nm, lo = 0, hi = arr.length - 1) {
  if (hi >= lo) {
    let middl = Math.floor((lo + hi) / 2)
	
    if ((middl === arr.length - 1 || nm < arr[middl + 1]) && arr[middl] === nm) {
      return middl;
    } else if (nm < arr[middl]) {
      return findLast(arr, nm, lo, middl - 1)
    } else {
      return findLast(arr, nm, middl + 1, hi)
    }
  }
  
  return -1
}

module.exports = sortedFrequency