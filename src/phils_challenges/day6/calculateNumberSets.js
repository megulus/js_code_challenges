/* Let’s say you have a set of fridge magnets (e.g., a set that spells “worrygrump”). Write a function that,
 given a word containing only the letters in your fridge magnets, returns the number of sets of fridge magnets 
you need to spell that word.
*/

const calculateNumberSets = (set, word) => {
  const letterSet = {}
  const target = {}
  for (const char of set) {
    if (!(char in letterSet)) {
      letterSet[char] = 1
    }
    else letterSet[char] += 1
  }
  for (const char of word) {
    if (!(char in target)) {
      target[char] = 1
    }
    else target[char] += 1
  }
  let numberSets = 1
  for (const [key, value] of Object.entries(target)) {
    const inSet = letterSet[key]
    const diff = value - inSet
    if (diff > 0) {
      const setsNeeded = value % inSet === 0 ? value / inSet : (Math.floor(value / inSet) + 1)
      if (setsNeeded > numberSets) numberSets = setsNeeded
    }
  }
  return numberSets
}

// fumbled the implementation. lesson learned: should have made a table - on paper - of
// letters in set, letters in target, and number of sets needed - for several different
// cases and made sure that my implementation matched those cases


console.log('calculateNumberSets("worrygrump", "grumpgrump") ' + calculateNumberSets('worrygrump', 'grumpgrump'))
console.log('calculateNumberSets(worrygrump, rrrrrrrr) ' + calculateNumberSets('worrygrump', 'rrrrrrrr'))