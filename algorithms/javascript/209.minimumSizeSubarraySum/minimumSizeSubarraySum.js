// Source : https://leetcode.com/problems/minimum-size-subarray-sum/
// Author : acgotaku311
// Date   : 2021-04-06

/** ********************************************************************************
 *
 * Given an array of n positive integers and a positive integer s, find the minimal length of a subarray
 * of which the sum ≥ s. If there isn't one, return 0 instead.
 *
 * For example, given the array [2,3,1,2,4,3] and s = 7,
 * the subarray [4,3] has the minimal length under the problem constraint.
 *
 * click to show more practice.
 *
 * More practice:
 *
 * If you have figured out the O(n) solution, try coding another solution of which the time complexity is O(n log n).
 *
 **********************************************************************************/

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
const minSubArrayLen = function (target, nums) {
  let start = 0
  let end = 0
  let sum = 0
  let count = Number.MAX_VALUE
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    if (num >= target) {
      return 1
    } else {
      sum += num
      end = i
      while (sum >= target) {
        count = Math.min(end - start + 1, count)
        sum -= nums[start]
        start++
        if (sum >= target) {
          count = Math.min(end - start + 1, count)
        }
      }
    }
  }

  return count > nums.length ? 0 : count
}

export { minSubArrayLen }
