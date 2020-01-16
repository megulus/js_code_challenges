/* x, y = positions of cats A and B, z = position of mouse
 * return whichever cat will reach mouse first, or mouse if both
 * cats will reach it at the same time
 */

function catAndMouse(x, y, z) {
  const catA = Math.abs(x - z)
  const catB = Math.abs(y - z)
  if (catA === catB) return 'Mouse C'
  else if (catA < catB) return 'Cat A'
  return 'Cat B'
}

// console.log('catAndMouse(1, 2, 3): ' + catAndMouse(1, 2, 3))
// console.log('catAndMouse(1, 3, 2): ' + catAndMouse(1, 3, 2))