// Given an array of positive integers and a number n, write a function that returns true if a 
// (consecutive) subsequence of the array sums to n and false otherwise.


/*
Dumb approach:
- iterate through array and calculate the sequence sum up to every index, i.e.,
array = [2, 5, 3] => [2, 7, 10]
now iterate through the sequence sums
  - at each sum[i], look at each sum[x] in range sum[0] to sum[i - 1] 
  - if sum[i] - sum[x] === n, then arr[x + 1] arr[i] is the subsequence
*/

const dumbSumSubsequence = (arr, n) => {
  const sequenceSums = []
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
    sequenceSums[i] = sum
  }
  for (let i = 0; i < sequenceSums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (sequenceSums[i] - sequenceSums[j] === n) {
        return true
      }
    }
  }
  return false
}

const slightlyLessDumbSumSubsequence = (arr, n) => {
  const sequenceSums = []
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
    sequenceSums[i] = sum
  }
  for (let i = 0; i < sequenceSums.length; i++) {
    for (let j = i - 1; j > 0; j--) {
      if (sequenceSums[i] - sequenceSums[j] === n) {
        return true
      }
    }
  }
  return false
}


console.log('dumbSumSubsequence([2, 3, 8, 4, 1, 2, 6], 12): ' + dumbSumSubsequence([2, 3, 8, 4, 1, 2, 6], 12))
console.log('dumbSumSubsequence([2, 3, 8, 4, 1, 2, 6], 7): ' + dumbSumSubsequence([2, 3, 8, 4, 1, 2, 6], 7))
console.log('slightlyLessDumbSumSubsequence([2, 3, 8, 4, 1, 2, 6], 12): ' + slightlyLessDumbSumSubsequence([2, 3, 8, 4, 1, 2, 6], 12))
console.log('slightlyLessDumbSumSubsequence([2, 3, 8, 4, 1, 2, 6], 7): ' + slightlyLessDumbSumSubsequence([2, 3, 8, 4, 1, 2, 6], 7))