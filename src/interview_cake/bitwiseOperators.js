/* 
Find the unique ID in an unsorted array of ID pairs 
*/

/*
First solution: O(n) time, also O(n) (worst case) space 
*/

const findUniqueIdVersionOne = (arr) => {
  const idTable = {}
  for (const id of arr) {
    if (id in idTable) delete idTable[id]
    else idTable[id] = true
  }
  return Object.keys(idTable)[0]
}

/*
Optimal solution is O(n) time, but O(1) space
This solution uses bitwise operation XOR on the integer IDs
in the list and a variable uniqueDeliveryId initialized to 0.
Using the bitwise operator XOR (^) means that a second occurence
of an integer will cancel out the first
0 ^= 5 === 5
5 ^= 5 === 0

0 ^= 5 === 5
5 ^= 13 === 8
8 ^= 5 === 13
*/

/*
Pattern/Approach:
Bitwise manipulation can be useful in some cases. Signs to watch for:
1. When you want to multiply/divide by 2 (multiply: left shift, divide: right shift)
2. You want to "cancel out" matching numbers (use XOR) 
*/

const findUniqueIdVersionTwo = (arr) => {
  let uniqueDeliveryId = 0
  for (const id of arr) {
    uniqueDeliveryId ^= id
  }
  return uniqueDeliveryId
}



console.log('findUniqueIdVersionOne([5, 5, 5, 5, 13, 5, 5]): ' + findUniqueIdVersionOne([5, 5, 5, 5, 13, 5, 5]))
console.log('findUniqueIdVersionTwo([5, 5, 5, 5, 13, 5, 5]): ' + findUniqueIdVersionTwo([5, 5, 5, 5, 13, 5, 5]))

