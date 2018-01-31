// Source : https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/
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
 * @return {number}
 */
const removeDuplicates = function (nums) {
  const len = nums.length
  let pos = 0
  if (len <= 1) {
    return len
  }
  for (let i = 0; i < len - 1; i++) {
    if (nums[i] !== nums[i + 1]) {
      nums[++pos] = nums[i + 1]
    }
  }

  return pos + 1
}

export { removeDuplicates }
