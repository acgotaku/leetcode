// Source : https://leetcode.com/problems/reverse-integer/description/
// Author : acgotaku311
// Date   : 2018-01-10

/**********************************************************************************
*
* Reverse digits of an integer.
*
* Example1: x =  123, return  321
* Example2: x = -123, return -321
* Example3: x = 120, return 21
*
*
* Assume we are dealing with an environment which could only hold integers within the 32-bit signed integer range. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
*
*
*
**********************************************************************************/

/**
 * @param {number} x
 * @return {number}
 */
const reverse = (x) => {
  const MAX_INT = Math.pow(2, 31) - 1
  const MIN_INT = -Math.pow(2, 31)
  let y = 0
  while (x !== 0) {
    const remainder = x % 10
    x = Number.parseInt(x / 10)
    y = y * 10 + remainder
    if (y > MAX_INT || y < MIN_INT) {
      return 0
    }
  }
  return y
}

export { reverse }
