// Source : https://leetcode.com/problems/factorial-trailing-zeroes/
// Author : acgotaku311
// Date   : 2021-03-12

/** ********************************************************************************
 *
 * Given an integer n, return the number of trailing zeroes in n!.
 *
 * Note: Your solution should be in polynomial time complexity.
 *
 **********************************************************************************/

/**
 * @param {number} n
 * @return {number}
 */
const trailingZeroes = function (n) {
  let sum = 0
  let temp = 0
  while (n / 5 > 0) {
    temp = Number.parseInt(n / 5)
    sum += temp
    n = temp
  }
  return sum
}
export { trailingZeroes }
