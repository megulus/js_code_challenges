import { climbingLeaderboard } from '../src/hackerrank_challenges/easy/hourglassSum'
import { arrayFromFile } from '../utils/readFileToArray'


it('should return array equal to given arrays', () => {
  expect(climbingLeaderboard([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120])).toStrictEqual([6, 4, 2, 1])
  expect(climbingLeaderboard([100, 90, 90, 80], [70, 80, 105])).toStrictEqual([4, 3, 1])
  expect(climbingLeaderboard([80, 70, 60, 50], [40, 50, 55, 75, 76, 77, 81])).toStrictEqual([5, 4, 4, 2, 2, 2, 1])
})


it('should return an array equal to the test file array', async () => {
  const answer = await arrayFromFile('/Users/megdahlgren/src/js_code_challenges/__test__/test_helpers/answer1.txt')
  const scores = await arrayFromFile('/Users/megdahlgren/src/js_code_challenges/__test__/test_helpers/scores1.txt')
  const alice = await arrayFromFile('/Users/megdahlgren/src/js_code_challenges/__test__/test_helpers/alice1.txt')
  const test_answer = climbingLeaderboard(scores, alice)
  expect(test_answer.length).toBe(200)
  expect(test_answer).toStrictEqual(answer)
})
