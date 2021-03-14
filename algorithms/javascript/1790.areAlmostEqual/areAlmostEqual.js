// Source : https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/
// Author : acgotaku311
// Date   : 2021-03-14

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const areAlmostEqual = function (s1, s2) {
  let prev = -1
  let pair = false
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] === s2[i]) {
      continue
    }
    if (prev > -1) {
      if (pair) {
        return false
      } else {
        if (s1[prev] === s2[i] && s2[prev] === s1[i]) {
          pair = true
        } else {
          return false
        }
      }
    } else {
      prev = i
    }
  }
  if (prev > -1) {
    return pair
  } else {
    return true
  }
}
export { areAlmostEqual }
