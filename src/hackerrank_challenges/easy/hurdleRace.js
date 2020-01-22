/* Given a maximum height k, that Dan can jump naturally, a potion that increases
 * his maximum jump height by one for each dose, and an array of integer heights of
 * the hurdles he must clear, how many doses of potion must Dan take to clear max hurdle?
 */

function hurdleRace(k, height) {
  let doses = 0
  for (const h of height) {
    if (h - k > doses) doses = h - k 
  }
  return doses
}

// console.log('hurdleRace(1, [1, 2, 3, 3, 2]): ' + hurdleRace(1, [1, 2, 3, 3, 2]))
// console.log('hurdleRace(4, [1, 6, 3, 5, 2]): ' + hurdleRace(4, [1, 6, 3, 5, 2]))
// console.log('hurdleRace(7, [2, 5, 4, 5, 2]): ' + hurdleRace(7, [2, 5, 4, 5, 2]))