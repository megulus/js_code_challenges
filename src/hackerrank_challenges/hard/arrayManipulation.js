/* Starting with a 1-indexed array of zeros and a list of operations, for each operation
add a value to each of the array elements between two given indeces, and return the max
value in the array e.g.:
Input:
5 3
1 2 100
2 5 100
3 4 100
=> 200
[0, 0, 0, 0, 0] // initialize
[100, 100, 0, 0, 0] // 1 2 100
[100, 200, 100, 100, 100] // 2 5 100
[100, 200, 200, 200, 100] // 2 4 100
*/

// my original version, the sub-optimal brute force approach
const arrayManipulation = (n, queries) => {
  const arr = Array(n).fill(0)
  let max = 0
  for (const q of queries) {
    
    const start = q[0] - 1 >= 0 ? q[0] - 1 : 0
    const end = q[1] < arr.length ? q[1] : arr.length
    const add = q[2]
    for (let i = start; i < end; i++) {
      arr[i] += add
      if (arr[i] > max) max = arr[i]
    }
  }
  return max
}

/* Optimal solution:
- Given a range [a, b] and a value k, we need to add k to all the numbers in range of indices [a, b]
- We can do an O(1) update by adding k to index a and add -k to index (b + 1)
- Now the ith number in the array will be a prefix sum of the array from 1 to i, because we are adding k
  to the value at index a and subtracting k from the value at index b + 1. Taking the prefix sum will give 
  us the actual value for each index after m operations
- All m updates can be done in O(m) time
- Now we have to check the largest number in the original array, i.e. the index i such that maximizes
  the prefix sum
- We can calculate ll prefix sums and maximum prefix sum in O(n) time
*/

const optimizedArrayManipulation = (n, queries) => {
  const arr = Array(n).fill(0)
  for (const q of queries) {
    const a = q[0] - 1
    const b = q[1]
    const k = q[2]
    arr[a] += k
    if (b <= arr.length - 1) arr[b] -= k // trick here is that we're setting up the pass below
    // we're adding k to numbers at indeces [a, b - 1] 
    // from b, to arr[n - 1], we're NOT adding k, so we SUBTRACT k from number at arr[b]
  }
  let max = 0
  let sum = 0
  for (const prefixSum of arr) {
    sum += prefixSum
    if (sum > max) max = sum
  }
  return max
}




// console.log('arrayManipulation(5, [[1, 2, 100], [2, 5, 100], [3, 4, 100]]): ' + arrayManipulation(5, [[1, 2, 100], [2, 5, 100], [3, 4, 100]]))
// console.log('arrayManipulation(10, [[1, 5, 3], [4, 8, 7], [6, 9, 1]]): ' + arrayManipulation(10, [[1, 5, 3], [4, 8, 7], [6, 9, 1]]))
// console.log('arrayManipulation(10, [[2, 6, 8], [3, 5, 7], [1, 8, 1], [5, 9, 15]]): ' + arrayManipulation(10, [[2, 6, 8], [3, 5, 7], [1, 8, 1], [5, 9, 15]]))
console.log('arrayManipulation(5, [[1, 2, 100], [2, 5, 100], [3, 4, 100]]): ' + optimizedArrayManipulation(5, [[1, 2, 100], [2, 5, 100], [3, 4, 100]]))
console.log('arrayManipulation(10, [[1, 5, 3], [4, 8, 7], [6, 9, 1]]): ' + optimizedArrayManipulation(10, [[1, 5, 3], [4, 8, 7], [6, 9, 1]]))
console.log('arrayManipulation(10, [[2, 6, 8], [3, 5, 7], [1, 8, 1], [5, 9, 15]]): ' + optimizedArrayManipulation(10, [[2, 6, 8], [3, 5, 7], [1, 8, 1], [5, 9, 15]]))
