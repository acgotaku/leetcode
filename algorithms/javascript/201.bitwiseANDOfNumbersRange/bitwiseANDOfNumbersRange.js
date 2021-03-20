// Source : https://leetcode.com/problems/number-of-islands/
// Author : acgotaku311
// Date   : 2021-03-18

/** ********************************************************************************
 *
 * Given a range [m, n] where 0
 *
 * For example, given the range [5, 7], you should return 4.
 *
 *
 **********************************************************************************/

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
const rangeBitwiseAnd = function (left, right) {
  let shift = 0
  while (left < right) {
    left = left >> 1
    right = right >> 1
    shift++
  }
  return left << shift
}
export { rangeBitwiseAnd }
