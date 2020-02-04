/*
Find the integers between two arrays
I.e., >= highest of array a, <= lowest of array b, and divide all elements of array 2 evenly
Not sure whether I can assume arrays are sorted
*/

const getTotalX = (a, b) => {
  a.sort()
  b.sort()
  let low = a[a.length - 1]
  const high = b[0]
  // const add = a[0]
  let total = 0
  while (low <= high) {
    if (isFactor(low, a, b)) {
      total += 1
    }
    low += 1
  }
  return total

  function isFactor(x, arrA, arrB) {
    for (const num of arrA) {
      if (!(x % num === 0)) return false
    }
    for (const num of arrB) {
      if (!(num % x === 0)) return false
    }
    return true
  }
}

console.log('getTotalX([2, 4], [16, 32, 96]): ' + getTotalX([2, 4], [16, 32, 96]))
console.log('getTotalX([3, 4], [24, 48]): ' + getTotalX([3, 4], [24, 48]))

