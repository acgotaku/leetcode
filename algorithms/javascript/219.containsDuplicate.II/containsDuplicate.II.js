// Source : https://leetcode.com/problems/contains-duplicate-ii/
// Author : acgotaku311
// Date   : 2023-07-27

/**********************************************************************************
 *
 * Given an array of integers and an integer k, find out whether there there are
 * two distinct indices i and j in the array such that nums[i] = nums[j] and
 * the difference between i and j is at most k.
 *
 *
 **********************************************************************************/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const containsNearbyDuplicate = function (nums, k) {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    if (map.has(num)) {
      const index = map.get(num)
      if (i - index <= k) {
        return true
      }
    }
    map.set(num, i)
  }
  return false
}
export { containsNearbyDuplicate }
