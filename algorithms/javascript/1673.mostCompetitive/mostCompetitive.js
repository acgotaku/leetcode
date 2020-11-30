// Source : https://leetcode.com/problems/find-the-most-competitive-subsequence/
// Author : acgotaku311
// Date   : 2020-11-30

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const mostCompetitive = function (nums, k) {
  const len = nums.length
  const MAX_INT = Math.pow(2, 31) - 1
  let start = 0
  const result = []
  while (k > 0) {
    let el = MAX_INT
    let pos = start
    for (let i = start; i <= (len - k); i++) {
      if (nums[i] < el) {
        el = nums[i]
        pos = i
      }
    }
    start = pos + 1
    result.push(el)
    k--
  }
  return result
}
export { mostCompetitive }
