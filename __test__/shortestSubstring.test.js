import { getShortestUniqueSubstring, getShortestUniqueSubstringBruteForce } from '../src/pramp/shortestSubstring'
import { exportAllDeclaration } from '../../../Library/Caches/typescript/3.7/node_modules/@babel/types/lib/index'


it('should find the correct answer in brute force method', () => {
  expect(getShortestUniqueSubstringBruteForce(['x', 'y', 'z'], 'xyyzyzyx')).toBe('zyx')
  expect(getShortestUniqueSubstringBruteForce(['x', 'y', 'z', 'r'], 'xyyzyzyx')).toBe('')
  expect(getShortestUniqueSubstringBruteForce(['A'], 'A')).toBe('A')
  expect(getShortestUniqueSubstringBruteForce(['A'], '')).toBe('')
  expect(getShortestUniqueSubstringBruteForce(['A'], 'B')).toBe('')
  expect(getShortestUniqueSubstringBruteForce(['A', 'B', 'C'], 'ADOBECODEBANCDDD')).toBe('BANC')
  expect(getShortestUniqueSubstringBruteForce(["A", "B", "C", "E", "K", "I"], 'KADOBECODEBANCDDDEI')).toBe('KADOBECODEBANCDDDEI')
})

it('should find the correct answer in pramp solution', () => {
  expect(getShortestUniqueSubstring(['x', 'y', 'z'], 'xyyzyzyx')).toBe('zyx')
  expect(getShortestUniqueSubstring(['x', 'y', 'z', 'r'], 'xyyzyzyx')).toBe('')
  expect(getShortestUniqueSubstring(['A'], 'A')).toBe('A')
  expect(getShortestUniqueSubstring(['A'], '')).toBe('')
  expect(getShortestUniqueSubstring(['A'], 'B')).toBe('')
  expect(getShortestUniqueSubstring(['A', 'B', 'C'], 'ADOBECODEBANCDDD')).toBe('BANC')
  expect(getShortestUniqueSubstring(["A", "B", "C", "E", "K", "I"], 'KADOBECODEBANCDDDEI')).toBe('KADOBECODEBANCDDDEI')
})