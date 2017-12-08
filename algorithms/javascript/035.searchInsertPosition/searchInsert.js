// Source : https://leetcode.com/problems/search-insert-position/description/
// Author : acgotaku311
// Date   : 2017-12-08

/**********************************************************************************
*
* Given a sorted array and a target value, return the index if the target is found.
* If not, return the index where it would be if it were inserted in order.
*
* You may assume no duplicates in the array.
*
* Here are few examples.
* [1,3,5,6], 5 → 2
* [1,3,5,6], 2 → 1
* [1,3,5,6], 7 → 4
* [1,3,5,6], 0 → 0
*
*
**********************************************************************************/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function (nums, target) {
  const len = nums.length
  let position = 0
  for (let i = 0; i < len; i++) {
    if (nums[i] < target) {
      position = i + 1
    } else if (nums[i] >= target) {
      position = i
      break
    }
  }
  return position
}

export { searchInsert }
