function findRotatedIndex(array, num) {
  var piv = fPiv(array)
  if (piv > 0 && num >= array[0] && num <= array[piv - 1]) {
    return bnSrc(array, num, 0, piv - 1);
  } else {
    return bnSrc(array, num, piv, array.length - 1);
  }
}

function fPiv(arr) {
  if (arr.length === 1 || arr[0] < arr[arr.length - 1]) return 0;
  var start = 0
  var finish = arr.length - 1;
  while (start <= finish) {
    var middl = Math.floor((start + finish) / 2);
    if (arr[middl] > arr[middl + 1]) return middl + 1
    else if (arr[start] <= arr[middl]) {
      start = middl + 1
    } else {
      finish = middl - 1
    }
  }
}

function bnSrc(array, num, start, finish) {
  if (array.length === 0) return -1;
  if (num < array[start] || num > array[finish]) return -1;

  while (start <= finish) {
    var middl = Math.floor((start + finish) / 2);
    if (array[middl] === num) {
      return middl;
    } else if (num < array[middl]) {
      finish = middl - 1;
    } else {
      start = middl + 1;
    }
  }
  return -1;
}

module.exports = findRotatedIndex