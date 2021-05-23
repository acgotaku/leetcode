// Source : https://leetcode.com/problems/longer-contiguous-segments-of-ones-than-zeros/
// Author : acgotaku311
// Date   : 2021-05-23

/**
 * @param {string} s
 * @return {boolean}
 */
const checkZeroOnes = function (s) {
  const len = s.length
  let maxLen0 = 0
  let maxLen1 = 0
  let len0 = 0
  let len1 = 0
  for (let i = 0; i < len; i++) {
    if (i === 0) {
      if (s[i] === '0') {
        len0++
        maxLen0 = Math.max(len0, maxLen0)
      } else {
        len1++
        maxLen1 = Math.max(len1, maxLen1)
      }
    } else {
      if (s[i] === s[i - 1]) {
        if (s[i] === '0') {
          len0++
          maxLen0 = Math.max(len0, maxLen0)
        } else {
          len1++
          maxLen1 = Math.max(len1, maxLen1)
        }
      } else {
        if (s[i] === '0') {
          len0 = 1
          maxLen0 = Math.max(len0, maxLen0)
        } else {
          len1 = 1
          maxLen1 = Math.max(len1, maxLen1)
        }
      }
    }
  }
  return maxLen1 > maxLen0
}
export { checkZeroOnes }
