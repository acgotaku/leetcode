// Source : https://leetcode.com/problems/sqrtx/
// Author : acgotaku311
// Date   : 2020-08-20

/** ********************************************************************************
*
* Implement int sqrt(int x).
*
* Compute and return the square root of x.
*
**********************************************************************************/

/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = function (x) {
  // http://en.wikipedia.org/wiki/Newton%27s_method
  if (x <= 0) {
    return 0
  }

  let last = 0
  let current = 1
  while (last !== current) {
    last = current
    current = (current + x / current) / 2
  }

  return Number.parseInt(current)
}
export { mySqrt }
