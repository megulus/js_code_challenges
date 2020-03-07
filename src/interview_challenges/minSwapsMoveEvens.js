// (This was my T----- phone screen question)
// Given an array of integers, find the minimum number of swaps to move 
// all the evens to the beginning of the array.

// [1, 2, 5, 4, 6, 2, 5, 1] => 4 evens in this array, with 2 already in 1st half
// 2 swaps need to be made, because there are 2 odds in first half, occupying the
// spots needed for evens
// approach: count the evens in the array (one pass through array)
// - next, do a pass through the array, but only up to the number of evens - every
// - odd # encountered is a swap that needs to be made

const minSwaps = (arr) => {
  let countSwaps = 0
  let numEvens = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) numEvens += 1
  }
  for (let j = 0; j < numEvens; j++) {
    if (arr[j] % 2 !== 0) countSwaps += 1
  }
  return countSwaps
}

console.log('minSwaps([1, 2, 5, 4, 6, 2, 5, 1]) ' + minSwaps([1, 2, 5, 4, 6, 2, 5, 1]))