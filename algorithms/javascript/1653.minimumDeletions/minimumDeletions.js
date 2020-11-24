// Source : https://leetcode.com/problems/minimum-deletions-to-make-string-balanced/
// Author : acgotaku311
// Date   : 2020-11-24

/**
 * @param {string} s
 * @return {number}
 */
const minimumDeletions = function (s) {
  let aCount = 0
  let result = 0
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === 'a') {
      aCount++
    } else {
      if (s[i] === 'b' && aCount > 0) {
        result++
        aCount--
      }
    }
  }
  return result
}

export { minimumDeletions }
