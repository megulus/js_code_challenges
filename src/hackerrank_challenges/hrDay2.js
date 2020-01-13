/* Climbing the Leaderboard
 * - leaderboard uses dense ranking, i.e. 
 * players with equal scores receive same
 * ranking number, next player(s) receive next
 * consecutive rank
 * input: 
 * - integer array scores === leaderboard scores in decreasing order
 * - integer array alice === Alice's scores in ascending order
 * return: int array res === Alice's ranks, where res[j] is
 * Alice's rank after the jth game
 */
import { arrayFromFile } from '../../utils/readFileToArray'




export const climbingLeaderboard = (scores, alice) => {
  const highest = scores[0]
  const lowest = scores[scores.length - 1]
  const scoreToRank = {}
  const rankToScore = {}
  const res = []
  let rank = 1
  for (const s of scores) {
    if (!(s in scoreToRank)) {
      scoreToRank[s] = rank
      rankToScore[rank] = s
      rank++
    }
  }
  let key = alice[0]
  let previousRank = key in scoreToRank ? (scoreToRank[key]) : (scoreToRank[lowest] + 1)
  for (let i = 0; i < alice.length; i++) {
    key = alice[i]
    let result
    if (key in scoreToRank) {
      result = scoreToRank[key]
    }
    else {
      if (key > highest) result = 1
      else if (key < lowest) result = scoreToRank[lowest] + 1
      else {
        let nextRank = previousRank in rankToScore ? previousRank : previousRank - 1
        while (rankToScore[nextRank] < key) {
          nextRank--
        }
        result = nextRank + 1
      }
    }
    previousRank = result
    res[i] = result
  }
  return res
}

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


// Migratory birds
// Given an array of sightings, determine the species sighted most frequently

function migratoryBirds(arr) {
  let max = 0
  let type = null
  const frequencies = {}
  for (const b of arr) {
    if (!(b in frequencies)) {
      frequencies[b] = 1
    }
    else {
      frequencies[b] += 1
      if (frequencies[b] > max) {
        max = frequencies[b]
        type = b
      }
    }
  }
  for (const key of Object.keys(frequencies)) {
    const val = frequencies[key]
    if (val === max && key < type) type = key
  }
  return type
}

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


// console.log('climbingLeaderboard([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120]) ' + JSON.stringify(climbingLeaderboard([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120])))
// console.log('climbingLeaderboard([100, 90, 90, 80], [70, 80, 105]) ' + JSON.stringify(climbingLeaderboard([100, 90, 90, 80], [70, 80, 105])))
// console.log('climbingLeaderboard([80, 70, 60, 50], [40, 50, 55, 75, 76, 77, 81]): ' + JSON.stringify(climbingLeaderboard([80, 70, 60, 50], [40, 50, 55, 75, 76, 77, 81])))
// console.log('breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]) ' + JSON.stringify(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1])))
// console.log('breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]) ' + JSON.stringify(breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42])))

// const test = async () => {
//   const arr = arrayFromFile('/Users/megdahlgren/src/js_code_challenges/__test__/test_helpers/birds04.txt').then(d => {
//     console.log('arr length ' + d.length)
//     console.log('migratoryBirds(arr) ' + migratoryBirds(d))
//   })
// }

// test()
// console.log('migratoryBirds([1, 4, 4, 4, 5, 3]) ' + JSON.stringify(migratoryBirds([1, 4, 4, 4, 5, 3])))
// console.log('migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]) ' + JSON.stringify(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4])))

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