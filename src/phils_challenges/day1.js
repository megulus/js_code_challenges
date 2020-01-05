// Write a function are_any_true(array) that returns true if any item 
// in the list is truthy, or false otherwise.

const areAnyTrue = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) return true
  }
  return false
}

// Write a function are_all_true(array) that returns true if all items in the 
// list are truthy, or false otherwise.

const areAllTrue = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (!arr[i]) return false
  }
  return true
}

// Using the above two functions, write a function are_any_false(list) 
// that returns true if any item in the list is not truthy, or false otherwise.

const areAnyFalse = (arr) => {
  return !areAllTrue(arr)
}

// Using the above two functions, write a function are_all_false(list) 
// that returns true if all items in the list are not truthy, or false otherwise.

const areAllFalse = (arr) => {
  return !areAnyTrue(arr)
}

// Given an array, return a copy of the array

const copyArray = (arr) => {
  const copy = []
  for (let i = 0; i < arr.length; i++) {
    copy.push(arr[i])
  }
  return copy
}

// Given an array, reverse the array in place

const reverseArray = (arr) => {
  let lastIndex = arr.length - 1
  for (let i = 0; i < (arr.length / 2 - 1); i++) {
    const tmp = arr[i]
    arr[i] = arr[lastIndex]
    arr[lastIndex] = tmp
    lastIndex--
  }
  return arr
}

// Given an array, return a copy of the array that is reversed

const copyAndReverse = (arr) => {
  const reversedCopy = []
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedCopy.push(arr[i])
  }
  return reversedCopy
}

// Given an array of integers, return an array that contains only the even 
// integers from that array in the order that they appear.

const returnOnlyEvens = (arr) => {
  const evens = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) evens.push(arr[i])
  }
  return evens
}

// Given an array of integers, return an array that contains the 
// squares of the integers from the original array in the order that they appear.

const squares = (arr) => {
  const squares = []
  for (let i = 0; i < arr.length; i++) {
    squares.push(arr[i] * arr[i])
  }
  return squares
}

// Write a function mapulate(array, aFunction) that returns an array that
// contains the value aFunction(x) for each x in array.

const mapulate = (arr, aFunction) => {
  const mapulated = []
  for (let i = 0; i < arr.length; i++) {
    mapulated.push(aFunction(arr[i]))
  }
  return mapulated
}

// Write a function filterfy(array, predicate) that returns an array that 
// contains only those elements x of array for which predicate(x) is truthy.

const filterfy = (arr, predicate) => {
  const filterfied = []
  for (let i = 0; i < arr.length; i++) {
    if (predicate(arr[i])) filterfied.push(arr[i])
  }
  return filterfied
}

// Using mapulate and filterfy, write a function that takes an array of integers 
// and returns an array of the squares of the even integers, in order of appearance.

const squaresOfEvens = (arr) => {
  const evens = filterfy(arr, (x) => x % 2 === 0)
  return mapulate(evens, (x) => x * x)
}






// end

// console.log('areAnyTrue([null, null, undefined]) ' + areAnyTrue([null, null, undefined, NaN]))
// console.log('areAnyTrue([null, undefined, []]) ' + areAnyTrue([null, undefined, [], ""]))
// console.log('areAllTrue([null, undefined, [], ""]) ' + areAllTrue([null, undefined, [], ""]))
// console.log('areAnyFalse([3, "no", [], ""]) ' + areAnyFalse([3, "no", [], ""]))
// console.log('areAnyFalse([3, "no", [], "0"]) ' + areAnyFalse([3, "no", [], "0"]))
// console.log('areAllFalse([null, "", undefined, NaN]) ' + areAllFalse([null, "", undefined, NaN]))
// console.log('areAllFalse(["0", "", undefined, NaN]) ' + areAllFalse(["0", "", undefined, NaN]))
// console.log("copy: copyArray([2, '4', 5, 27, 'grump']) " + copyArray([2, '4', 5, 27, 'grump']))
// console.log('copyAndReverse[1, 2, 3, 4, 5] ' + copyAndReverse([1, 2, 3, 4, 5]))
// console.log('copyAndReverse[1, 2, 3, 4] ' + copyAndReverse([1, 2, 3, 4]))
// console.log('copyAndReverse[1, 2, 3, 4, 5, 6, 7] ' + copyAndReverse([1, 2, 3, 4, 5, 6, 7]))
// console.log('returnOnlyEvens[1, 2, 3, 4, 5] ' + returnOnlyEvens([1, 2, 3, 4, 5]))
// console.log('returnOnlyEvens[1, 2, 3, 4] ' + returnOnlyEvens([1, 2, 3, 4]))
// console.log('returnOnlyEvens[1, 2, 3, 4, 5, 6, 7] ' + returnOnlyEvens([1, 2, 3, 4, 5, 6, 7]))
// console.log('squares[1, 2, 3, 4, 5] ' + squares([1, 2, 3, 4, 5]))
// console.log('squares[1, 2, 3, 4] ' + squares([1, 2, 3, 4]))
// console.log('squares[1, 2, 3, 4, 5, 6, 7] ' + squares([1, 2, 3, 4, 5, 6, 7]))
// console.log('mapulate([1, 2, 3, 4, 5], (x) => 2 * x) ' + mapulate([1, 2, 3, 4, 5], (x) => 2 * x))
console.log('filterfy([1, 2, 3, 4, 5], (x) => 2 * x) ' + filterfy([1, 2, 3, 4, 5], (x) => x % 2 !== 0))
console.log('squaresOfEvens([1, 2, 3, 4, 5]) ' + squaresOfEvens([1, 2, 3, 4, 5]))

