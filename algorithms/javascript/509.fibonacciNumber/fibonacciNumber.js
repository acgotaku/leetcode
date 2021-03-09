// Source : https://leetcode.com/problems/fibonacci-number/
// Author : acgotaku311
// Date   : 2021-03-09

/** ***************************************************************************************************
 *
 * The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such
 * that each number is the sum of the two preceding ones, starting from 0 and 1. That is,
 *
 * F(0) = 0,   F(1) = 1
 * F(N) = F(N - 1) + F(N - 2), for N > 1.
 *
 * Given N, calculate F(N).
 *
 * Example 1:
 *
 * Input: 2
 * Output: 1
 * Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
 *
 * Example 2:
 *
 * Input: 3
 * Output: 2
 * Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
 *
 * Example 3:
 *
 * Input: 4
 * Output: 3
 * Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.
 *
 * Note:
 *
 * 0 &le; N &le; 30.
 ******************************************************************************************************/

/**
 * @param {number} n
 * @return {number}
 */
const fib = function (n) {
  if (n <= 1) {
    return n
  }
  let a = 0
  let b = 1
  let c = 1
  for (let i = 2; i <= n; i++) {
    c = a + b
    a = b
    b = c
  }
  return c
}
export { fib }
