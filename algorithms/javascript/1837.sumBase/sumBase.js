// Source : https://leetcode.com/problems/sum-of-digits-in-base-k/
// Author : acgotaku311
// Date   : 2021-04-25

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
const sumBase = function (n, k) {
  let result = 0
  while (n > 0) {
    result += n % k
    n = Number.parseInt(n / k)
  }
  return result
}
export { sumBase }
