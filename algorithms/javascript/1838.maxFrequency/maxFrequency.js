// Source : https://leetcode.com/problems/frequency-of-the-most-frequent-element/
// Author : acgotaku311
// Date   : 2021-04-25

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maxFrequency = function (nums, k) {
  nums = nums.sort((a, b) => (a - b))
  let count = 1
  let total = 0
  let l = 0
  for (let r = 1; r < nums.length; r++) {
    total += (nums[r] - nums[r - 1]) * (r - l)
    while (total > k) {
      total -= nums[r] - nums[l]
      l++
    }
    count = Math.max(count, r - l + 1)
  }
  return count
}
export { maxFrequency }
