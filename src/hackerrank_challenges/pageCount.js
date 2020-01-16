/* Drawing Book - minimum page count 
 * Given a book with n pages, minimum number of turns to reach page p?
 * n = 6, p = 2 => 1 (start at 1)
 * n = 5, p = 4 => 0 (start at 5)
 */


function pageCount(n, p) {
  return Math.min(forwardTurns(n, p), backwardsTurns(n, p))

  function forwardTurns(n, p) {
    return Math.floor(p / 2)
  }

  function backwardsTurns(n, p) {
    return Math.floor(n / 2) - Math.floor(p / 2)
  }
}

// console.log('pageCount(6, 2): ' + pageCount(6, 2))
// console.log('pageCount(5, 4): ' + pageCount(5, 4))
// console.log('pageCount(6, 5): ' + pageCount(6, 5))