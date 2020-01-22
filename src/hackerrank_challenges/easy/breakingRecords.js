/* Breaking the records
   Given an array of scores, return the number of times Maria
   breaks her minimum/maximum score record
*/

function breakingRecords(scores) {
  let max = scores[0]
  let min = scores[0]
  let countMin = 0
  let countMax = 0
  for (const s of scores) {
    if (s > max) {
      max = s
      countMax += 1
    }
    if (s < min) {
      min = s
      countMin += 1
    }
  }
  return countMax + ' ' + countMin
}

// console.log('breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]) ' + JSON.stringify(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1])))
// console.log('breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]) ' + JSON.stringify(breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42])))