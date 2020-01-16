/* Given an array of integers, find and print the maximum number of integers
 * you can select from the array s.t. the absolute difference b/w any
 * two integers <= 1
 */

function pickingNumbers(a) {
  let max = 1
  for (let i = 0; i < a.length; i++) {
    let equalOrOneGreater = 1
    let equalOrOneLess = 1
    for (let j = i + 1; j < a.length; j++) {
      const diff = a[j] - a[i]
      if (diff === 0 || diff === 1) equalOrOneGreater += 1
      if (diff === 0 || diff === -1) equalOrOneLess += 1
    }
    const localMax = Math.max(equalOrOneLess, equalOrOneGreater)
    if (localMax > max) max = localMax
  }
  if (max > 1) return max
}

// console.log('pickingNumbers([1, 1, 2, 2, 4, 4, 5, 5, 5]): ' + pickingNumbers([1, 1, 2, 2, 4, 4, 5, 5, 5]))
// console.log('pickingNumbers([4, 6, 5, 3, 3, 1]): ' + pickingNumbers([4, 6, 5, 3, 3, 1]))
// console.log('pickingNumbers([1, 2, 2, 3, 1, 2]): ' + pickingNumbers([1, 2, 2, 3, 1, 2]))