// Write a function rotatefy(array, n) that returns a new array shifted left by n places. 
// rotatefy([1,2,3,4,5], 2) => [3,4,5,1,2]

const rotatefy = (arr, n) => {
  const rotatefied = []
  let rotation = n
  for (let i = 0; i < arr.length; i++) {
    rotatefied[i] = arr[rotation]
    if (rotation < arr.length - 1) rotation += 1
    else rotation = 0
  }
  return rotatefied
}

// Write a function that, given an array of numbers, returns an array of 
// all pairs (unordered) of numbers in the input array.
// allPairs([1, 2, 3]) => [[1, 2], [1, 3], [2, 3]]

const allPairs = (arr) => {
  const pairs = []
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const pair = [arr[i], arr[j]]
      pairs.push(pair)
    }
  }
  return pairs
}

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

// Q4: 20 minutes. Write a function collatefy that, given a bunch of charges 
// at particular timestamps, returns a list of monthly totals.

// collatefy([
//   { time: new Date("2019-12-17T03:24:00", value: 216 },
//   { time: new Date("2019-11-11T03:00:00", value: 4 },
//   { time: new Date("2019-12-14T03:01:00", value: 100 }
// ]) => [{ month: “2019-12”, total: 316 }, { month: “2019-11”, total: 4 }]

// create a hash table { 'YYYY-MM' : total }
// iterate through the array of time stamps
//   for each timestamp, pull out the month and year - this will be the key in the hash table
//   if the key exists in the table already - increase its total (total += value), otherwise create it (total = value)
// iterate through the hash; according to the example, it doesn't seam to matter that the array
// returned has the months in order, so we will iterate through, create objects in form
// { month: 'YYYY-MM', total: 4 }

const collatefy = (arr) => {
  const totalsByMonth = {}
  for (const transaction of arr) {
    const date = transaction['time']
    const year = date.getFullYear()
    const month = 1 + date.getMonth()
    const key = year.toString() + '-' + month.toString()
    if (key in totalsByMonth) {
      totalsByMonth[key] += parseInt(transaction['value'])
    }
    else {
      totalsByMonth[key] = parseInt(transaction['value'])
    }
  }
  const monthlyTotals = []
  for (const monthStr of Object.keys(totalsByMonth)) {
    const monthly = { month: monthStr, total: totalsByMonth[monthStr] }
    monthlyTotals.push(monthly)
  }
  return monthlyTotals
}

const stringfyCollatefy = (arr) => {
  for (const monthTotalObj of arr) {
    console.log('month: ' + monthTotalObj['month'] + ' , total: ' + monthTotalObj['total'])
  }
}

//

// console.log('rotatefy([1,2,3,4,5], 2) ' + rotatefy([1, 2, 3, 4, 5], 2))
// console.log('allPairs([1, 2, 3]) ' + allPairs([1, 2, 3]))
console.log('totalTime([[1, 4], [2, 3]]) => ' + totalTime([[1, 4], [2, 3]]))
console.log('totalTime([[4, 6,], [1, 2]]) => ' + totalTime([[4, 6,], [1, 2]]))
console.log('totalTime([[1, 4], [6, 8], [2, 4], [7, 9], [10, 15]]) => ' + totalTime([[1, 4], [6, 8], [2, 4], [7, 9], [10, 15]]))
// const collated = collatefy([{ time: new Date("2019-12-17T03:24:00"), value: 216 }, { time: new Date("2019-11-11T03:00:00"), value: 4 }, { time: new Date("2019-12-14T03:01:00"), value: 100 }])
// console.log('monthly totals ' + collatefy([{ time: new Date("2019-12-17T03:24:00"), value: 216 }, { time: new Date("2019-11-11T03:00:00"), value: 4 }, { time: new Date("2019-12-14T03:01:00"), value: 100 }]))
// stringfyCollatefy(collated)