/* 2D Arrays - max hourglass value
   hourglass: defined as a subset of values in 2D array with indeces falling into an
   hourglass pattern in the array's graphical representation
   find each hourglass and its sum of values
   return the maximum hourglass sum
 */

 function hourglassSum(arr) {
    const numRows = arr.length
    const numCols = arr[0].length
    let max
    for (let i = 0; i < numRows; i++) {
      for (let j = 0; j < numCols; j++) {
        const hgSum = getHourglassSum([[i, j], [i, j + 1], [i, j + 2], [i + 1, j + 1], [i + 2, j], [i + 2, j + 1], [i + 2, j + 2]], arr)
        
        if (((hgSum !== null) && max === undefined) || ((hgSum !== null) && hgSum > max)) {
          max = hgSum
        }
      }
    }
    return max

    function getHourglassSum(hg, arr) {
      let sum = 0
      for (const el of hg) {
        const row = el[0]
        const col = el[1]
        if (row >= numRows || col >= numCols) {
          return null
        }
        sum += arr[row][col]
      }
      return sum
    }
 }



console.log('hourglassSum(arr) ' + (hourglassSum([
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0]
])))
console.log('hourglassSum(arr) ' + (hourglassSum([
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 9, 2, -4, -4, 0],
  [0, 0, 0, -2, 0, 0],
  [0, 0, -1, -2, -4, 0]
])))
console.log('hourglassSum(arr) ' + (hourglassSum([
  [-9, -9, -9, 1, 1, 1],
  [0, -9, 0, 4, 3, 2],
  [-9, -9, -9, 1, 2, 3],
  [0, 0, 8, 6, 6, 0],
  [0, 0, 0, -2, 0, 0],
  [0, 0, 1, 2, 4, 0]
])))
console.log('hourglassSum(arr) ' + (hourglassSum([
  [-1, -1, 0, -9, -2, -2],
  [-2, -1, -6, -8, -2, -5],
  [-1, -1, -1, -2, -3, -4],
  [-1, -9, -2, -4, -4, -5],
  [-7, -3, -3, -2, -9, -9],
  [-1, -3, -1, -2, -4, -5]
])))
console.log('hourglassSum(arr) ' + (hourglassSum([
  [-1, 1, - 1, 0, 0, 0],
  [0, - 1, 0, 0, 0, 0],
  [-1, -1, -1, 0, 0, 0],
  [0, -9, 2, -4, -4, 0],
  [-7, 0, 0, -2, 0, 0],
  [0, 0, -1, -2, -4, 0]
])))