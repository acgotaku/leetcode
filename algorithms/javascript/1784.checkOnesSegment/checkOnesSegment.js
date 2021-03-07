// Source : https://leetcode.com/problems/check-if-binary-string-has-at-most-one-segment-of-ones/
// Author : acgotaku311
// Date   : 2021-03-07

/**
 * @param {string} s
 * @return {boolean}
 */
const checkOnesSegment = function (s) {
  let zero = false
  for (let i = 0; i < s.length; i++) {
    if (zero && s[i] === '1') {
      return false
    } else if (s[i] === '0') {
      zero = true
    }
  }
  return true
}
export { checkOnesSegment }
