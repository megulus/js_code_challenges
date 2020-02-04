// Generalize your solution to yesterday’s pair - finding problem to support n - tuples. 
// (The order in which tuples are returned doesn’t matter.)
// allTuples([1, 2, 3], 2) => [[1, 2], [1, 3], [2, 3]]
// allTuples([1, 2, 3], 3) => [[1, 2, 3]]
// allTuples([1, 2, 3, 4], 3) => [[1, 2, 3], [1, 3, 4], [1, 2, 4], [2, 3, 4]]

const merge = (thing, arrayOfTuples) => {
  const merged = []
  for (const tuple of arrayOfTuples) {
    merged.push([thing].concat(tuple))
  }
  return merged
}

const allTuples = (arr, size) => {
  let arrayOfTuples = []
  if (arr.length === 0 || size < 1) return arrayOfTuples
  else if (size === 1) {
    for (const each of arr) {
      arrayOfTuples.push([each])
    }
    return arrayOfTuples
  }
  else {
    for (let i = 0; i < arr.length; i++) {
      if (arr.length > 1) {
        arrayOfTuples = arrayOfTuples.concat(merge(arr[i], allTuples(arr.slice(i + 1), size - 1)))
      }
    }
    return arrayOfTuples
  }
}



console.log('allTuples([1, 2, 3], 2) ' + JSON.stringify(allTuples([1, 2, 3], 2)))
console.log('allTuples([1, 2, 3], 3) ' + JSON.stringify(allTuples([1, 2, 3], 3)))
console.log('allTuples([1, 2, 3, 4], 3): ' + JSON.stringify(allTuples([1, 2, 3, 4], 3)))
console.log('allTuples([1, 2, 3, 4], 2): ' + JSON.stringify(allTuples([1, 2, 3, 4], 2)))