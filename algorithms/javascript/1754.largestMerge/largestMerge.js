// Source : https://leetcode.com/problems/largest-merge-of-two-strings/
// Author : acgotaku311
// Date   : 2021-02-07

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
const largestMerge = function (word1, word2) {
  if (word1.length === 0 || word2.length === 0) {
    return word1 + word2
  }

  if (word1 > word2) {
    return word1[0] + largestMerge(word1.substr(1), word2)
  } else {
    return word2[0] + largestMerge(word1, word2.substr(1))
  }
}

export { largestMerge }
