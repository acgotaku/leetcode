// Source : https://leetcode.com/problems/merge-strings-alternately/
// Author : acgotaku311
// Date   : 2021-02-21

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
const mergeAlternately = function (word1, word2) {
  const arr1 = word1.split('')
  const arr2 = word2.split('')
  let res = []
  let i = 0
  while (arr1.length > 0 && arr2.length > 0) {
    const first = i % 2 === 0
    if (first) {
      res.push(arr1.shift())
    } else {
      res.push(arr2.shift())
    }
    i++
  }

  res = res.concat(arr1).concat(arr2)

  return res.join('')
}
export { mergeAlternately }
