// Source : https://leetcode.com/problems/maximum-ascending-subarray-sum/
// Author : acgotaku311
// Date   : 2021-03-21

/**
 * @param {number[]} nums
 * @return {number}
 */
const maxAscendingSum = function (nums) {
  let sum = nums[0]
  let maxSum = nums[0]
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] < nums[i + 1]) {
      sum += nums[i + 1]
    } else {
      sum = nums[i + 1]
    }
    maxSum = Math.max(maxSum, sum)
  }
  return maxSum
}
export { maxAscendingSum }
