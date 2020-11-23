// Source : https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/
// Author : acgotaku311
// Date   : 2020-11-23

/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
const arrayStringsAreEqual = function (word1, word2) {
  return word1.join('') === word2.join('')
}

export { arrayStringsAreEqual }
