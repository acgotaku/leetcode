// Source : https://leetcode.com/problems/max-number-of-k-sum-pairs/
// Author : acgotaku311
// Date   : 2020-12-09

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maxOperations = function (nums, k) {
  let count = 0
  const dict = {}
  for (let i = 0; i < nums.length; i++) {
    const rest = k - nums[i]
    if (dict[rest] > 0) {
      count++
      dict[rest]--
    } else {
      if (dict[nums[i]] === undefined) {
        dict[nums[i]] = 1
      } else {
        dict[nums[i]]++
      }
    }
  }
  return count
}
export { maxOperations }
