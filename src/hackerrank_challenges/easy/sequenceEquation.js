/*
Given a sequence of n integers, find any integer y such that p[p[y]] === x
E.g., p = [5, 2, 1, 3, 4]
x = 1 === p[3], p[4] === 3 => p[p[4]] = 1
x = 2 === p[1], p[3] === 1 => p[p[3]] = 2
1 <= n <= 50
*/

const permutationEquation = (p) => {
  const valueSequenceMap = {}
  for (let i = 0; i < p.length; i++) {
    const value = p[i]
    valueSequenceMap[value] = i + 1
  }
  const permutation = []
  for (let i = 1; i <= p.length; i++) {
    const x = valueSequenceMap[i]
    const y = valueSequenceMap[x]
    permutation.push(y)
  }
  return permutation
}

console.log('permutationEquation([5, 2, 1, 3, 4]): ' + JSON.stringify(permutationEquation([5, 2, 1, 3, 4])))
console.log('permutationEquation([2, 3, 1]): ' + JSON.stringify(permutationEquation([2, 3, 1])))
console.log('permutationEquation([4, 3, 5, 1, 2]): ' + JSON.stringify(permutationEquation([4, 3, 5, 1, 2])))