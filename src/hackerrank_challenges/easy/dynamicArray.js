/* Create a list, seqList, of N empty sequences, where each sequence is indexed from
   0 to N - 1 (the elements within each of the N sequences also use 0-indexing)
   Create an integer, lastAnswer, and initialize it to 0
   There are 2 types of queries that can be performed on your list of sequences:
   1. 1 x y
   - find the sequence seq at index ((x ^ lastAnswer) % N) in seqList
   - append integer y to sequence seq
   2. 2 x y
   - find the sequence seq at index ((x ^ lastAnswer) % N) in seqList
   - find the value of element (y % size) in seq (where size is the size of seq) and assign it to lastAnswer
   - print the new value of lastAnswer on a new line
*/

const dynamicArray = (n, queries) => {
  const seqList = {}
  let lastAnswer = 0
  const lastAnswers = []
  for (let i = 0; i < queries.length; i++) {
    const query = queries[i]
    const type = query[0]
    const x = query[1]
    const y = query[2]
    const index = ((x ^ lastAnswer) % n)
    if (type === 1) {
      if (index in seqList) seqList[index].push(y)
      else seqList[index] = [y]
    }
    else if (type === 2) {
      const seq = seqList[index]
      const size = seq.length
      const seqIndex = y % size
      lastAnswer = seq[seqIndex]
      lastAnswers.push(seq[seqIndex])
    }
  }
  return lastAnswers
}
  


console.log('dynamicArray(2, [[1, 0, 5], [1, 1, 7], [1, 0, 3], [2, 1, 0], [2, 1, 1]]): ' + JSON.stringify(dynamicArray(2, [[1, 0, 5], [1, 1, 7], [1, 0, 3], [2, 1, 0], [2, 1, 1]])))