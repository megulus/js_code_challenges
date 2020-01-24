/* There is a collection of input strings and a collection of query strings. For each
query string, determine how many times it occurs in the list of input strings.
*/

// const matchingStrings = (strings, queries) => {
//   const stringCounts = {}
//   const queryCounts = []
//   for (const str of strings) {
//     if (!(str in stringCounts)) {
//       stringCounts[str] = 1
//     }
//     else {
//       stringCounts[str] += 1
//     }
//   }
//   for (let i = 0; i < queries.length; i++) {
//     const query = queries[i]
//     if (query in stringCounts) {
//       queryCounts[i] = stringCounts[query]
//     }
//     else queryCounts[i] = 0
//   }
//   return queryCounts
// }

console.log('matchingStrings(): ' + JSON.stringify(matchingStrings(['def', 'de', 'fgh'], ['de', 'lmn', 'fgh'])))