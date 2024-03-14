function findRotationCount(arr, lo = 0, hi = arr.length - 1) {
  if (hi < lo) return 0;
  if (hi === lo) return lo;
  let middl = Math.floor((lo + hi) / 2)
  
  if (middl > low && arr[middl] < arr[middl - 1]) {
    return middl;
  }

  if (middl < hi && arr[middl + 1] < arr[middl])
    return middl + 1;

  if (arr[hi] > arr[middl]) {
    return findRotationCount(arr, lo, middl - 1);
  }

  return findRotationCount(arr, middl + 1, hi);
}

module.exports = findRotationCount