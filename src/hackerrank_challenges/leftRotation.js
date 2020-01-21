/* A left rotation on an array of size n shifts each of the array's elements 1 unit to the left.
E.g., if 2 left rotations are performed on [1, 2, 3, 4, 5], the array becomes [3, 4, 5, 1, 2].
Given an array of n integers and a number, d, perform d left rotations on the array.
*/

const leftRotation = (a, d) => {
  return [...a.slice(d), ...a.slice(0, d)]
}

console.log('leftRotation([]): ' + leftRotation([1, 2, 3, 4, 5], 2))
console.log('leftRotation([]): ' + leftRotation([1, 2, 3, 4, 5], 4))