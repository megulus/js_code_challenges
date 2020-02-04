// Given a list of arrays of time intervals, write a function that returns the
// total amount of time covered by the intervals
// e.g.
// input = [[1, 4], [2, 3]]
// => 3
// input = [[4, 6,], [1, 2]]
// => 3
// input = [[1, 4], [6, 8], [2, 4], [7, 9], [10, 15]]
// => 11

const totalTime = (arr) => {
  const sorted = arr.sort((a, b) => a[0] - b[0])
  let total = 0
  let lower = 0
  let upper = 0
  for (const interval of sorted) {
    const lo = interval[0]
    const hi = interval[1]
    if (lo > upper) {
      total += upper - lower
      lower = lo
      upper = hi
    }
    else {
      if (hi > upper) upper = hi
    }
  }
  total += upper - lower
  return total
}

console.log('totalTime([[1, 4], [2, 3]]) => ' + totalTime([[1, 4], [2, 3]]))
console.log('totalTime([[4, 6,], [1, 2]]) => ' + totalTime([[4, 6,], [1, 2]]))
console.log('totalTime([[1, 4], [6, 8], [2, 4], [7, 9], [10, 15]]) => ' + totalTime([[1, 4], [6, 8], [2, 4], [7, 9], [10, 15]]))