// Source : https://leetcode.com/problems/jump-game/description/
// Author : acgotaku311
// Date   : 2018-02-22

/**********************************************************************************
*
* Given an array of non-negative integers, you are initially positioned at the first index of the array.
*
* Each element in the array represents your maximum jump length at that position.
*
* Determine if you are able to reach the last index.
*
* For example:
* A = [2,3,1,1,4], return true.
*
* A = [3,2,1,0,4], return false.
*
*
**********************************************************************************/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = function (nums) {
  const len = nums.length
  let coverPosition = 0
  if (len <= 0) {
    return false
  }
  for (let i = 0; i <= coverPosition && i < len; i++) {
    if (coverPosition < nums[i] + i) {
      coverPosition = nums[i] + i
    }

    if (coverPosition >= len - 1) {
      return true
    }
  }

  return false
}

export { canJump }
