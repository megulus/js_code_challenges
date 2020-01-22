/* maximize the sum of one keyboard and one drive, given budget b
 * keyboard, drive are arrays of numbers
 * if no summ <= b, return -1
 */

function getMoneySpent(keyboards, drives, b) {
  let max = -1
  for (let i = 0; i < keyboards.length; i++) {
    for (let j = 0; j < drives.length; j++) {
      const sum = keyboards[i] + drives[j]
      if (sum <= b && sum > max) max = sum
    }
  }
  return max
}

// console.log('getMoneySpent([3, 1], [5, 2, 8], 10): ' + getMoneySpent([3, 1], [5, 2, 8], 10))
// console.log('getMoneySpent([4], [5], 5): ' + getMoneySpent([4], [5], 5))