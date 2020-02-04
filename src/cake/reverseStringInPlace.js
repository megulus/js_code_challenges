
const reverseCharArray = (arr) => {
  let start = 0
  let end = arr.length - 1
  while (start !== end) {
    const tmp = arr[end]
    arr[end] = arr[start]
    arr[start] = tmp
    start++
    end-- 
  }
  return arr
}

const str1 = 'grump'
console.log('reverseCharArray([grump]): ' + JSON.stringify(reverseCharArray(str1.split(''))))