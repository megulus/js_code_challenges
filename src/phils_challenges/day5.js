/* Given an array a and a tolerance k, you may assume that each element of a
 * is within k positions of its sorted position. E.g.:
 * a = [1, 0, 2, 4, 3, 7, 6, 5], k = 2
 * Using this information, write a function to sort a, given k
 */

const sortSubarray = (array, start, end) => {
  const lo = start
  let hi = lo + 1
  while (hi <= end) {
    if (array[lo] > array[hi]) {
      const tmp = array[lo]
      array[lo] = array[hi]
      array[hi] = tmp
    }
    hi++
  }
}

const sortWithTolerance = (a, k) => {
  for (let i = 0; i < a.length; i++) {
    const end = i + k < a.length ? i + k : a.length - 1
    sortSubarray(a, i, i + k)
  }
}

const a = [1, 0, 2, 4, 3, 7, 6, 5]
sortWithTolerance(a, 2)
console.log('sortWithTolerance([1, 0, 2, 4, 3, 7, 6, 5], 2) ' + JSON.stringify(a))
const b = [0, 2, 3, 5, 1, 4, 7, 6]
sortWithTolerance(b, 3)
console.log('sortWithTolerance([0, 2, 3, 5, 1, 4, 7, 6], 3) ' + JSON.stringify(b))
