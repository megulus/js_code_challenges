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

// console.log('allPairs([1, 2, 3]) ' + allPairs([1, 2, 3]))