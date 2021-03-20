// Source : https://leetcode.com/problems/happy-number/
// Author : acgotaku311
// Date   : 2021-03-20

/** ********************************************************************************
 *
 * Write an algorithm to determine if a number is "happy".
 *
 * A happy number is a number defined by the following process: Starting with any positive integer,
 * replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1
 * (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this
 * process ends in 1 are happy numbers.
 *
 * Example: 19 is a happy number
 *
 * 1^2 + 9^2 = 82
 * 8^2 + 2^2 = 68
 * 6^2 + 8^2 = 100
 * 1^2 + 0^2 + 0^2 = 1
 *
 *
 **********************************************************************************/

/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = function (n) {
  const dict = {}
  while (dict[n] !== true) {
    const str = n.toString()
    let num = 0
    for (let i = 0; i < str.length; i++) {
      num = num + Number(str[i]) * Number(str[i])
    }
    dict[n] = true
    if (num === 1) {
      return true
    }
    n = num
  }
  return false
}
export { isHappy }
