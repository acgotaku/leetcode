// Source : https://leetcode.com/problems/first-missing-positive/description/
// Author : acgotaku311
// Date   : 2017-12-14

/**********************************************************************************
*
* Given an unsorted integer array, find the first missing positive integer.
*
* For example,
* Given [1,2,0] return 3,
* and [3,4,-1,1] return 2.
*
* Your algorithm should run in O(n) time and uses constant space.
*
*
**********************************************************************************/

/**
 * @param {number[]} nums
 * @return {number}
 */
const firstMissingPositive = (nums) => {
  const len = nums.length
  let i = 0
  while (i < len) {
    if (nums[i] !== i + 1 && nums[i] > 0 && nums[i] <= len && nums[i] !== nums[nums[i] - 1]) {
      [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]]
    } else {
      i++
    }
  }
  for (let i = 0; i < len; i++) {
    if (nums[i] !== i + 1) {
      return i + 1
    }
  }
  return len + 1
}

export { firstMissingPositive }
