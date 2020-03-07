/*
write a function paginate(currPage, totalPages, maxVisiblePages) that returns
a string such as:

paginate(1, 30, 11) // '[1] 2 3 4 5 6 7 8 9 10 ... 30'
paginate(5, 30, 11)
paginate(7, 30, 11)
paginate(10, 30, 11)
paginate(24, 30, 11)
*/

// case 1: currPage is < maxVisiblePages
//      refining: since 1 and total are always visible, this actually becomes:
//      currPage <= maxVisiblePages - 1
//      1 elipse, right side
// case 2: currPage is > totalPages - maxVisiblePages
// case 3: maxVisiblePages <= currPage <= totalPages - maxVisiblePages
//      in this case, we want to display roughly 1/2 maxVisiblePages on either side of currPage
//      
// case 4: maxVisiblePages === totalPages => no ellipse

const paginationHelper = (currPage, endCount, offset = 0)  => {
  let pageCount = 0
  let paginationStr = ''
  while (pageCount < endCount - 1) {
    pageCount += 1
    if (currPage === pageCount + offset) paginationStr += `[${pageCount + offset}] `
    else paginationStr += `${pageCount + offset} `
  }
  return paginationStr
}

const paginate = (currPage, totalPages, maxVisiblePages) => {
  let offset
  if (totalPages === maxVisiblePages) {
    let pagination = paginationHelper(currPage, maxVisiblePages)
    return pagination += `${totalPages}`
  }
  // case 1
  if (currPage <= maxVisiblePages - 1) {
    let pagination = paginationHelper(currPage, maxVisiblePages)
    return pagination += `... ${totalPages}`
  }
  // case 2
  if (currPage > totalPages - maxVisiblePages - 1) {
    offset = totalPages - (maxVisiblePages - 1)
    return '1 ... ' + paginationHelper(currPage, maxVisiblePages, offset)
  }
  // case 3
  if ((maxVisiblePages - 1 <= currPage) && (currPage <= totalPages - maxVisiblePages - 1)) {
    offset = currPage - Math.floor(maxVisiblePages / 2) + 1
    let pagination = `1 ... ` + paginationHelper(currPage, maxVisiblePages - 1, offset)
    return pagination += ` ... ${totalPages}`
  }
}

console.log('paginate(2, 3, 3): ' + paginate(2, 3, 3))
console.log('paginate(1, 30, 11): ' + paginate(1, 30, 11)) 
console.log('paginate(5, 30, 11): ' + paginate(5, 30, 11)) 
console.log('paginate(7, 30, 11): ' + paginate(7, 30, 11)) 
console.log('paginate(11, 30, 11): ' + paginate(11, 30, 11)) 
console.log('paginate(15, 30, 11): ' + paginate(15, 30, 11))
console.log('paginate(26, 30, 11): ' + paginate(26, 30, 11)) 
console.log('paginate(30, 30, 11): ' + paginate(30, 30, 11)) 
