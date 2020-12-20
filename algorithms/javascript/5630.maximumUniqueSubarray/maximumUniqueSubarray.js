// Source : https://leetcode.com/problems/maximum-erasure-value/
// Author : acgotaku311
// Date   : 2020-12-20

/**
 * @param {number[]} nums
 * @return {number}
 */
const maximumUniqueSubarray = function (nums) {
  const len = nums.length
  let result = 0
  const dict = {}
  let sum = 0
  let start = 0
  let end = 1
  while (start < len && end <= len && start < end) {
    if (dict[nums[end - 1]]) {
      dict[nums[start]]--
      sum -= nums[start]
      start++
    } else {
      dict[nums[end - 1]] = 1
      sum += nums[end - 1]
      result = Math.max(result, sum)
      end++
    }
  }
  return result
}

export { maximumUniqueSubarray }
