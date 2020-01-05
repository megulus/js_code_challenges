/* Climbing the Leaderboard
 * - leaderboard uses dense ranking, i.e. 
 * players with equal scores receive same
 * ranking number, next player(s) receive next
 * consecutive rank
 * input: 
 * - integer array scores === leaderboard scores in decreasing order
 * - integer array alice === Alice's scores in ascending order
 * return: int array res === Alice's ranks, where res[j] is
 * Alice's rank after the jth game
 */



export const climbingLeaderboard = (scores, alice) => {
  const highest = scores[0]
  const lowest = scores[scores.length - 1]
  const scoreToRank = {}
  const rankToScore = {}
  const res = []
  let rank = 1
  for (const s of scores) {
    if (!(s in scoreToRank)) {
      scoreToRank[s] = rank
      rankToScore[rank] = s
      rank++
    }
  }
  let key = alice[0]
  let previousRank = key in scoreToRank ? (scoreToRank[key]) : (scoreToRank[lowest] + 1)
  for (let i = 0; i < alice.length; i++) {
    key = alice[i]
    let result
    if (key in scoreToRank) {
      result = scoreToRank[key]
    }
    else {
      if (key > highest) result = 1
      else if (key < lowest) result = scoreToRank[lowest] + 1
      else {
        let nextRank = previousRank in rankToScore ? previousRank : previousRank - 1
        while (rankToScore[nextRank] < key) {
          nextRank--
        }
        result = nextRank + 1
      }
    }
    previousRank = result
    res[i] = result
  }
  return res
}


// console.log('climbingLeaderboard([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120]) ' + JSON.stringify(climbingLeaderboard([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120])))
// console.log('climbingLeaderboard([100, 90, 90, 80], [70, 80, 105]) ' + JSON.stringify(climbingLeaderboard([100, 90, 90, 80], [70, 80, 105])))
// console.log('climbingLeaderboard([80, 70, 60, 50], [40, 50, 55, 75, 76, 77, 81]): ' + JSON.stringify(climbingLeaderboard([80, 70, 60, 50], [40, 50, 55, 75, 76, 77, 81])))
