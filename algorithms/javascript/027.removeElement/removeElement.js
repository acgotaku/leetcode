// Source : https://leetcode.com/problems/remove-element/description/
// Author : acgotaku311
// Date   : 2018-01-31

/** ********************************************************************************
*
* Given an array and a value, remove all instances of that value in place and return the new length.
*
* The order of elements can be changed. It doesn't matter what you leave beyond the new length.
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
