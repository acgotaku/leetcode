// Source : https://leetcode.com/problems/climbing-stairs/
// Author : acgotaku311
// Date   : 2020-08-20

/** ********************************************************************************
*
* You are climbing a stair case. It takes n steps to reach to the top.
*
* Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
*
*
**********************************************************************************/

/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function (n) {
  const a = new Array(n).fill(0)
  a[0] = 0
  a[1] = 1
  a[2] = 2
  a[3] = 3
  const loop = (step) => {
    if (a[step]) {
      return a[step]
    }
    for (let i = 4; i <= step; i++) {
      a[i] = a[i - 1] + a[i - 2]
    }
    return a[step]
  }
  if (n <= 3) {
    return a[n]
  }
  return loop(n - 1) + loop(n - 2)
}
export { climbStairs }
