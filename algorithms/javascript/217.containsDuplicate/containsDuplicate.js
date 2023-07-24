// Source : https://leetcode.com/problems/contains-duplicate/
// Author : acgotaku311
// Date   : 2023-07-24

/**********************************************************************************
 *
 * Given an integer array nums, return true if any value appears at least twice in the array,
 * and return false if every element is distinct.
 *
 **********************************************************************************/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function (nums) {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    if (map.has(num)) {
      return true
    } else {
      map.set(num, true)
    }
  }
  return false
}

export { containsDuplicate }
