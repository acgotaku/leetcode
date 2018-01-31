// Source : https://leetcode.com/problems/remove-element/description/
// Author : acgotaku311
// Date   : 2018-01-31

/**********************************************************************************
*
* Given a sorted array, remove the duplicates in place such that each element appear
* only once and return the new length.
*
* Do not allocate extra space for another array, you must do this in place with constant memory.
*
* For example,
* Given input array A = [1,1,2],
*
* Your function should return length = 2, and A is now [1,2].
*
*
**********************************************************************************/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function (nums, val) {
  const len = nums.length
  let pos = 0
  for (let i = 0; i < len; i++) {
    if (nums[i] !== val) {
      nums[pos] = nums[i]
      pos++
    }
  }

  return pos
}

export { removeElement }
