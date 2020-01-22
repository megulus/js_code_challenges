function sockMerchant(n, ar) {
  let pairs = 0;
  const socksByColor = {};
  for (let i = 0; i < n; i++) {
    if (ar[i] in socksByColor) {
      const val = socksByColor[ar[i]] += 1;
      if (val % 2 === 0) {
        pairs += 1;
      }
      socksByColor[ar[i]] = val;
    }
    else {
      socksByColor[ar[i]] = 1;
    }
  }
  return pairs;
}

// n is an integer (the number of steps in Gary's hike)
// s is a string of n characters that describe his path. E.g.,
// countingValleys(8, 'DDUUUUDD') => 1

function countingValleys(n, s) {
  let elevation = 0
  let valleys = 0
  for (let i = 0; i < n; i++) {
    const step = s[i].toLowerCase() === 'u' ? 1 : -1
    const newElevation = elevation + step
    if (elevation < 0 && newElevation >= 0) {
      valleys += 1
    }
    elevation = newElevation
  }
  return valleys
}

// jumping on clouds: find the minimum number of jumps to get from starting position to last cloud
// clouds numbered 0 are ok, those numbered 1 must be avoided
// jumps of current + 1 or current + 2 are allowed
// game is always winnable
// input: array of 0s and 1s, e.g., [0, 0, 1, 0, 0, 1, 0]
// output: 4

function jumpingOnClouds(c) {
  let jumps = 0
  let currentCloud = 0
  while (currentCloud < c.length - 1) {
    if (c[currentCloud + 2] === 0) currentCloud += 2
    else currentCloud += 1
    jumps += 1
  }
  return jumps
}

// Repeated String
// Find and print the number of times the letter 'a' appears in the first n letters of an
// infinitely large periodic string.
// Example:
// s = 'abcac' (s.length === 5)
// n = 10
// thus, the substring to consider is 'abcacabcac' => 4 occurrences of 'a' in the substring

function repeatedString(s, n) {
  let baseCount = 0
  const remainder = n % s.length
  let remainderCount = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'a') {
      baseCount += 1
      if (i < remainder) remainderCount += 1
    }
  }
  return (baseCount * Math.floor(n / s.length)) + remainderCount
}


// console.log('pairs: ' + sockMerchant(20, [4, 5, 5, 5, 6, 6, 4, 1, 4, 4, 3, 6, 6, 3, 6, 1, 4, 5, 5, 5]));
// console.log('valleys: ' + countingValleys(8, 'UDDDUDUU'))
// console.log('valleys: ' + countingValleys(1, 'U'))
// console.log('valleys: ' + countingValleys(1, 'D'))
// console.log('valleys: ' + countingValleys(8, 'DDUUUUDD'))
// console.log('jumps: ' + jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]))
// console.log('jumps: ' + jumpingOnClouds([0, 1, 0, 0, 0, 1, 0]))
console.log('occurrences: ' + repeatedString('aba', 10))
console.log('occurrences: ' + repeatedString('abcac', 10))
console.log('occurrences: ' + repeatedString('a', 1000000000000))
