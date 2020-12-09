// Source : https://leetcode.com/problems/concatenation-of-consecutive-binary-numbers/
// Author : acgotaku311
// Date   : 2020-12-09

/**
 * @param {number} n
 * @return {number}
 */
const concatenatedBinary = function (n) {
  let sum = 0
  const mod = Math.pow(10, 9) + 7
  for (let i = 1; i <= n; i++) {
    sum = (sum * Math.pow(2, i.toString(2).length) + i) % mod
  }
  return sum
}

export { concatenatedBinary }
