/* Drawing Book - minimum page count 
 * Given a book with n pages, minimum number of turns to reach page p?
 * n = 6, p = 2 => 1 (start at 1)
 * n = 5, p = 4 => 0 (start at 5)
 */ 


function pageCount(n, p) {
  return Math.min(forwardTurns(n, p), backwardsTurns(n, p))

  function forwardTurns(n, p) {
    return Math.floor(p / 2)
  }

  function backwardsTurns(n, p) {
    return Math.floor(n / 2) - Math.floor(p / 2) 
  }
}

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

/* x, y = positions of cats A and B, z = position of mouse
 * return whichever cat will reach mouse first, or mouse if both
 * cats will reach it at the same time
 */

function catAndMouse(x, y, z) {
  const catA = Math.abs(x - z)
  const catB = Math.abs(y - z)
  if (catA === catB) return 'Mouse C'
  else if (catA < catB) return 'Cat A'
  return 'Cat B'
}

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

/* Given a maximum height k, that Dan can jump naturally, a potion that increases
 * his maximum jump height by one for each dose, and an array of integer heights of
 * the hurdles he must clear, how many doses of potion must Dan take to clear max hurdle?
 */

function hurdleRace(k, height) {
  let doses = 0
  for (const h of height) {
    if (h - k > doses) doses = h - k 
  }
  return doses
}



// console.log('pageCount(6, 2): ' + pageCount(6, 2))
// console.log('pageCount(5, 4): ' + pageCount(5, 4))
// console.log('pageCount(6, 5): ' + pageCount(6, 5))
// console.log('getMoneySpent([3, 1], [5, 2, 8], 10): ' + getMoneySpent([3, 1], [5, 2, 8], 10))
// console.log('getMoneySpent([4], [5], 5): ' + getMoneySpent([4], [5], 5))
// console.log('catAndMouse(1, 2, 3): ' + catAndMouse(1, 2, 3))
// console.log('catAndMouse(1, 3, 2): ' + catAndMouse(1, 3, 2))
// console.log('pickingNumbers([1, 1, 2, 2, 4, 4, 5, 5, 5]): ' + pickingNumbers([1, 1, 2, 2, 4, 4, 5, 5, 5]))
// console.log('pickingNumbers([4, 6, 5, 3, 3, 1]): ' + pickingNumbers([4, 6, 5, 3, 3, 1]))
// console.log('pickingNumbers([1, 2, 2, 3, 1, 2]): ' + pickingNumbers([1, 2, 2, 3, 1, 2]))
// console.log('hurdleRace(1, [1, 2, 3, 3, 2]): ' + hurdleRace(1, [1, 2, 3, 3, 2]))
// console.log('hurdleRace(4, [1, 6, 3, 5, 2]): ' + hurdleRace(4, [1, 6, 3, 5, 2]))
// console.log('hurdleRace(7, [2, 5, 4, 5, 2]): ' + hurdleRace(7, [2, 5, 4, 5, 2]))