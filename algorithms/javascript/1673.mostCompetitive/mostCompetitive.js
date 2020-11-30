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
  const stack = []
  for (let i = 0; i < len; i++) {
    while (stack.length > 0 && nums[i] < nums[stack[stack.length - 1]] && len - i + stack.length > k) {
      stack.pop()
    }
    if (stack.length < k) {
      stack.push(i)
    }
  }
  return stack.map(i => nums[i])
}
export { mostCompetitive }
