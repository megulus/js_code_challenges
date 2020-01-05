// Problem: CTCI 1.9 -- String Rotation
// given two strings, s1 and s2:
// write code to determine whether s2 is a rotation of s1
// allow single call to method isSubstring
// e.g., "waterbottle" is a rotation of "erbottlewat"


// to run:
// node src/isRotation.js grump umpgr


// not worried in my first pass about the cleanest code -- cleaning up in successive
// iterations
// my approach: figure out whether the characters in the strings are in the same
// order, allowing for it to wrap around to 0 once you get to the end of one
// e.g., if you start counting at index 8 in "erbottlewat", wrapping around to 0
// once you get to 10, you end up with the characters in the same order as 
// "waterbottle", just in order 8 9 10 0 1 2 3 4 5 6 7 instead of 0 1 2 3 4 5 6 7 8 9 10 

// steps:
// 1. find the startchar in str2 (make sure it's not a false start)
// 2. determine whether str2 is a rotation of str1 by checking that characters are
//    in the same order, allowing for start at startchar and wrapping around to 0
//    once we reach the end of str1


// implementation 4

const isRotation4 = (str1, str2) => {
  if (str1.length !== str2.length) return false
  for (let i = 0; i < str2.length; i++) {
    if (areEqual(str1, str2, i)) return true
  }
  return false
}

const areEqual = (str1, str2, str2Start) => {
  if (str1.length !== str2.length) return false
  let count1 = 0
  let count2 = str2Start
  const length = str1.length
  while (count1 < length) {
    if (str1[count1] === str2[count2]) {
      if (count2 < length) {
        count2 += 1
      }
      else {
        count2 = 0
      }
      count1 += 1
    }
    else {
      return false
    }
  }
  return true
}

// implementation 3
// get rid of array, use constant additional space

const isRotation3 = (str1, str2) => {
  if (str1.length !== str2.length) return false
  return isSubstring(str1, str2)
}

const isSubstring = (str1, str2) => {
  const length = str1.length
  const startIndexStr2 = findStr2StartChar(str1, str2)
  let index1 = 0
  let index2 = startIndexStr2
  let count = 0
  while (count < length) {
    if (str1[index1] === str2[index2]) {
      if (index2 < length - 1) {
        index2 += 1
      }
      else {
        index2 = 0
      }
      index1 += 1
    }
    else {
      return false
    }
    count += 1
  }
  return count === length
}

const isStartChar = (str1, str2, location) => {
  let count1 = 0
  let count2 = location
  while (count2 < str2.length - 1) {
    if (str1[count1] !== str2[count2]) return false
    count1 += 1
    count2 += 1
  }
  return true
}

const findStr2StartChar = (str1, str2) => {
  let location = 0
  while (location < str2.length) {
    if (isStartChar(str1, str2, location)) return location
    location += 1
  }
}

// implementation 2

const isRotation2 = (str1, str2) => {
  if (str1.length !== str2.length) return false
  const length = str1.length
  const charArray = buildCharacterIndexArray(str1, str2)
  if (charArray.length !== length) return false
  return true
}

const buildCharacterIndexArray = (str1, str2) => {
  const length = str1.length
  const startCharStr2 = findStr2StartChar(str1, str2)
  const charIndexArr = []
  let index1 = 0
  let index2 = startCharStr2
  let count = 0
  while (count < length) {
    if (str1[index1] === str2[index2]) {
      charIndexArr.push(index2)
      if (index2 < length - 1) {
        index2 += 1
      }
      else {
        index2 = 0
      }
      index1 += 1
    }
    else {
      return charIndexArr
    }
    count += 1
  }
  return charIndexArr
}

// const isStartChar = (str1, str2, location) => {
//   let count1 = 0
//   let count2 = location
//   while (count2 < str2.length - 1) {
//     if (str1[count1] !== str2[count2]) return false
//     count1 += 1
//     count2 += 1
//   }
//   return true
// }

// const findStr2StartChar = (str1, str2) => {
//   let location = 0
//   while (location < str2.length) {
//     if (isStartChar(str1, str2, location)) return location
//     location += 1
//   }
// }

// implementation 1

const isRotation = (str1, str2) => {
  const length = str1.length
  let indices = []
  let start2
  const startchar = str1[0]
  let loc = 0
  while (!indices.length && loc < length) {
    if (str2[loc] === startchar) {
      start2 = loc
      indices.push(loc)
      let count1 = 1
      let count2 = start2 + 1
      let counted = 0
      while (counted < length - 1) {
        if (str1[count1] !== str2[count2]) {
          start2 = start2 + 1
          indices = []
          counted = length
        }
        else {
          indices.push(count2)
          counted += 1
          count1 += 1
          if (count2 < length - 1) {
            count2 += 1
          }
          else {
            count2 = 0
          }
        }
      }
    }
    loc += 1
  }
  return indices.length === length
}

const str1 = process.argv[2]
const str2 = process.argv[3]
// console.log(str1 + ' is a rotation of ' + str2 + '? ' + isRotation(str1, str2))
// console.log(str1 + ' is a rotation of ' + str2 + '? ' + isRotation2(str1, str2))
console.log(str1 + ' is a rotation of ' + str2 + '? ' + isRotation3(str1, str2))