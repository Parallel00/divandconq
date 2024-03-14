function countZeroes() {
  let ze = findFirst(arr)
  if (ze === -1) return 0;
  
  return arr.length - ze
}

function findFirst(arr, lo = 0, hi = arr.length - 1){
	if (hi >= lo) {
    let med = lo + Math.floor((hi - lo) / 2)
    if ((med === 0 || arr[med - 1] === 1) && arr[med] === 0) {
      return med;
    } else if (arr[med] === 1) {
      return findFirst(arr, med + 1, hi)
    }
    return findFirst(arr, lo, med - 1)
  }
  return -1;
}

module.exports = countZeroes