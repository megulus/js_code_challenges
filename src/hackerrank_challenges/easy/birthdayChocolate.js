/* Given an array s, and ints d & m, find the number of segments in s
   of length m that sum to d 
*/

const birthdayChocolate = (s, d, m) => {
  let segmentCount = 0
  for (let i = 0; i < s.length; i++) {
    let sum = s[i]
    let next = i + 1
    let len = 1
    while (s[next] && len < m) {
      sum += s[next]
      next++
      len++
    }
    if (sum === d) segmentCount += 1
  }
  return segmentCount
}

console.log('birthdayChocolate([2, 2, 1, 3, 2], 4, 2): ' + birthdayChocolate([2, 2, 1, 3, 2], 4, 2))
console.log('birthdayChocolate([1, 1, 1, 1, 1, 1], 3, 2): ' + birthdayChocolate([1, 1, 1, 1, 1, 1], 3, 2))
console.log('birthdayChocolate([4], 4, 1): ' + birthdayChocolate([4], 4, 1))