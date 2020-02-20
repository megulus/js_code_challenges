/*
Given two very large integers (represented as arrays of digits),
write a function that returns their sum (represented as an array
of digits).
*/

const addHelper = (a1, a2, carry) => {
  const addend1 = a1 || 0
  const addend2 = a2 || 0
  return carry ? addend1 + addend2 + 1 : addend1 + addend2
}


const sumLargeIntegers = (arr1, arr2) => {
  const longerArrayLength = arr1.length > arr2.length ? arr1.length : arr2.length
  const answer = Array.from(Array(longerArrayLength + 1))
  let count = longerArrayLength - 1
  let prev = 0
  while (count >= 0) {
    const sum = addHelper(arr1.pop(), arr2.pop(), prev > 10)
    prev = sum
    answer[count + 1] = sum % 10
    count--
  }
  answer[0] = Math.floor(prev / 10)
  return answer[0] !== 0 ? answer : answer.slice(1)
}

// 12345 + 4

console.log('sumLargeIntegers([3, 4, 5, 6], [1, 2, 7, 5]): ' + JSON.stringify(sumLargeIntegers([3, 4, 5, 6], [1, 2, 7, 5])))
console.log('sumLargeIntegers([9, 9, 9, 9], [9, 9, 9, 9]): ' + JSON.stringify(sumLargeIntegers([9, 9, 9, 9], [9, 9, 9, 9])))
console.log('sumLargeIntegers([1,2,3,4,5], [4]): ' + JSON.stringify(sumLargeIntegers([1,2,3,4,5], [4])))