// Source : https://leetcode.com/problems/truncate-sentence/
// Author : acgotaku311
// Date   : 2021-04-04

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const truncateSentence = function (s, k) {
  const words = s.split(' ')
  const newWords = words.slice(0, k)
  return newWords.join(' ')
}
export { truncateSentence }
