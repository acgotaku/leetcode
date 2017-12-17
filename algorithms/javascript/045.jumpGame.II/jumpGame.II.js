// Source : https://leetcode.com/problems/jump-game-ii/description/
// Author : acgotaku311
// Date   : 2017-12-17

/**********************************************************************************
*
* Given an array of non-negative integers, you are initially positioned at the first index of the array.
*
* Each element in the array represents your maximum jump length at that position.
*
* Your goal is to reach the last index in the minimum number of jumps.
*
* For example:
* Given array A = [2,3,1,1,4]
*
* The minimum number of jumps to reach the last index is 2.
* (Jump 1 step from index 0 to 1, then 3 steps to the last index.)
*
*
**********************************************************************************/

/**
 * @param {number[]} nums
 * @return {number}
 */
const jump = (nums) => {
  const len = nums.length
  let index = 0
  let count = 0
  while (index < len - 1) {
    let maxPosition = 0
    let maxIndex = 0
    if ((index + nums[index]) >= len - 1) {
      return count + 1
    }
    for (let i = index + 1; i <= index + nums[index]; i++) {
      if (nums[i] + i >= maxPosition) {
        maxPosition = nums[i] + i
        maxIndex = i
      }
    }
    index = maxIndex
    count++
  }
  return count
}

export { jump }
