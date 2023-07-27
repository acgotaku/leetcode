// Source : https://leetcode.com/problems/contains-duplicate-iii/
// Author : acgotaku311
// Date   : 2023-07-27

/**********************************************************************************
*
* You are given an integer array nums and two integers indexDiff and valueDiff.
* Find a pair of indices (i, j) such that:
*
* i != j,
* abs(i - j) <= indexDiff.
* abs(nums[i] - nums[j]) <= valueDiff, and
* Return true if such pair exists or false otherwise.
*
***********************************************************************************/

/**
 * @param {number[]} nums
 * @param {number} indexDiff
 * @param {number} valueDiff
 * @return {boolean}
 */
const containsNearbyAlmostDuplicate = function (nums, indexDiff, valueDiff) {
  const len = nums.length
  const map = new Map()
  for (let i = 0; i < len; i++) {
    const num = nums[i]
    const keys = map.keys()
    for (const key of keys) {
      if (Math.abs(map.get(key) - i) > indexDiff) {
        map.delete(key)
        continue
      }
      if (Math.abs(key - num) <= valueDiff) {
        return true
      }
    }
    map.set(num, i)
  }
  return false
}

export { containsNearbyAlmostDuplicate }
