/*
Given an array of unique characters arr and a string str, iimplement a function 
getShortestUniqueSubstring that finds the smallest substring of str containing all 
the characters in arr. Return "" (empty string) if such a substring doesn’t exist.

Come up with an asymptotically optimal solution and analyze the time and space complexities.

Example:

input:  arr = ['x','y','z'], str = "xyyzyzyx"
output: "zyx"

Constraints:

[time limit] 5000ms
[input] array.character arr: 1 ≤ arr.length ≤ 30
[input] string str: 1 ≤ str.length ≤ 500
[output] string
*/

// first pass: brute force
export const getShortestUniqueSubstringBruteForce = (arr, str) => {
  let shortestSubstr = ''
  let thresholdLength = str.length
  for (let i = 0; i < str.length; i++) {
    const uniqueCharsToFind = {}
    for (const char of arr) {
      uniqueCharsToFind[char] = 1
    }
    let uniqueCount = 0
    const firstChar = str[i]
    let candidateSubstr = firstChar
    if (firstChar in uniqueCharsToFind) {
      delete uniqueCharsToFind[firstChar]
      uniqueCount += 1
    }
    let tailIndex = i + 1
    while (uniqueCount < arr.length && tailIndex < str.length) {
      const nextChar = str[tailIndex]
      candidateSubstr += nextChar
      if (nextChar in uniqueCharsToFind) {
        delete uniqueCharsToFind[nextChar]
        uniqueCount += 1
      }
      tailIndex++
    }
    if (uniqueCount === arr.length && (candidateSubstr.length <= thresholdLength)) {
      shortestSubstr = candidateSubstr
      thresholdLength = candidateSubstr.length
    }
  }

  return shortestSubstr
}

// translation of pramp pseudocode to js
export const getShortestUniqueSubstring = (arr, str) => {
  let headIndex = 0
  let result = ''
  let uniqueCounter = 0
  const countMap = {}

  for (let i = 0; i < arr.length; i++) {
    countMap[arr[i]] = 0
  }

  for (let tailIndex = 0; tailIndex < str.length; tailIndex++) {
    const tailChar = str[tailIndex]
    if (tailChar in countMap) {
      const tailCount = countMap[tailChar]
      if (tailCount === 0) {
        uniqueCounter += 1
      }
      countMap[tailChar] = tailCount + 1
    }

    while (uniqueCounter === arr.length) { 
      const tempLength = tailIndex - headIndex + 1
      if (tempLength === arr.length) {
        return str.slice(headIndex, tailIndex + 1)
      }
      if (result === '' || tempLength < result.length) {
        result = str.slice(headIndex, tailIndex + 1)
      }
      const headChar = str[headIndex]
      if (headChar in countMap) {
        const headCount = countMap[headChar] - 1
        if (headCount === 0) {
          uniqueCounter -= 1
        }
        countMap[headChar] = headCount
      }
      headIndex += 1
    }
  }
  return result
}


// console.log('shortestSubstr: ' + getShortestUniqueSubstringBruteForce(['x', 'y', 'z'], 'xyyzyzyx'))
// console.log('shortestSubstr: ' + getShortestUniqueSubstringBruteForce(['A'], 'A'))
// console.log('shortestSubstr: ' + getShortestUniqueSubstringBruteForce(['A'], ''))
// console.log('shortestSubstr: ' + getShortestUniqueSubstringBruteForce(['A'], 'B'))
// console.log('shortestSubstr: ' + getShortestUniqueSubstringBruteForce(['A', 'B', 'C'], 'ADOBECODEBANCDDD'))
// console.log('shortestSubstr: ' + getShortestUniqueSubstringBruteForce(['x', 'y', 'z', 'r'], 'xyyzyzyx'))
// console.log('shortestSubstr: ' + getShortestUniqueSubstringBruteForce(["A", "B", "C", "E", "K", "I"], 'KADOBECODEBANCDDDEI'))

// console.log('shortestSubstr: ' + getShortestUniqueSubstring(['x', 'y', 'z'], 'xyyzyzyx'))
// console.log('shortestSubstr: ' + getShortestUniqueSubstring(['A'], 'A'))
// console.log('shortestSubstr: ' + getShortestUniqueSubstring(['A'], ''))
// console.log('shortestSubstr: ' + getShortestUniqueSubstring(['A'], 'B'))
// console.log('shortestSubstr: ' + getShortestUniqueSubstring(['A', 'B', 'C'], 'ADOBECODEBANCDDD'))
// console.log('shortestSubstr: ' + getShortestUniqueSubstring(['x', 'y', 'z', 'r'], 'xyyzyzyx'))
// console.log('shortestSubstr: ' + getShortestUniqueSubstring(["A", "B", "C", "E", "K", "I"], 'KADOBECODEBANCDDDEI'))
