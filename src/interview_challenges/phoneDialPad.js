/*
Given a string containing digits from 2 - 9 inclusive, return all possible letter combinations that the number could represent.

A mapping of digit to letters(just like on the telephone buttons) is given below.Note that 1 does not map to any letters.

 1    2    3
ABC  DEF
4    5    6
GHI  JKL  MNO
7    8    9
PQRS TUV WXYZ


Example:

Input: "23"
Output: ["AD", "AE", "AF", "BD", "BE", "BF", "CD", "CE", "CF"].

  Input "245"
Output: ["AGJ", "AGK"]

"2" => return 1 - tuples of the letters mapped by that number

"23" => 2 - tuples

"..." => n - tuples

[1 - tuple] + [n - 1 tuples]

Recursion!

Note:
Although the above answer is in lexicographical order, your answer could be in any order you want.

  map: '2' => ['A', 'B', 'C']
  * /

// letterCombinations(numberString, n)
// map numbers => letters (data structure)
// parse string - pop a digit off the string, subtract 1 from n
// breaking problem down into 1-tuples and n-1 tuples
// when we get to base case, we'll make a 1-tuple
// final step is to concatenate all the 1-tuples into n-tuples
*/

const LETTER_MAP = {
  '2': ['A', 'B', 'C'],
  '3': ['D', 'E', 'F'],
  '4': ['G', 'H', 'I'],
  '5': ['J', 'K', 'L'],
  '6': ['M', 'N', 'O'],
  '7': ['P', 'Q', 'R', 'S'],
  '8': ['T', 'U', 'V'],
  '9': ['W', 'X', 'Y', 'Z']
}

const merge = (item, result) => {
  const merged = []
  const mapping = item ? LETTER_MAP[item] : []
  if (result.length === 0) return mapping
  for (let i = 0; i < mapping.length; i++) {
    const letter = mapping[i]
    for (let j = 0; j < result.length; j++) {
      const newStr = letter + result[j]
      merged.push(newStr)
    }
  }
  return merged
}

const allLetterCombinations = numberString => {
  let result = []
  if (numberString.length === 0) return result
  else {
    result = result.concat(merge(numberString[0], allLetterCombinations(numberString.substring(1))))
  }
  return result
}

console.log(allLetterCombinations('5'))
console.log(allLetterCombinations('234'))


