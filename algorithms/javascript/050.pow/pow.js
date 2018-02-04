// Source : https://leetcode.com/problems/powx-n/description/
// Author : acgotaku311
// Date   : 2018-02-04

/**********************************************************************************
*
* Implement pow(x, n).
*
*
**********************************************************************************/

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
const myPow = (x, n) => {
  const fastPow = (x, n) => {
    if (!n) {
      return 1
    }
    const half = fastPow(x, Number.parseInt(n / 2))
    if (n % 2 === 0) {
      return half * half
    } else {
      return half * half * x
    }
  }

  if (n < 0) {
    x = 1 / x
    n = -n
  }
  return fastPow(x, n)
}

export { myPow }
