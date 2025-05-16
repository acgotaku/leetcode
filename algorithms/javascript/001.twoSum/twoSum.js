// Source : https://leetcode.com/problems/two-sum/description/
// Author : acgotaku311
// Date   : 2017-12-25

/**********************************************************************************
*
* Given an array of integers, find two numbers such that they add up to a specific target number.
*
* The function twoSum should return indices of the two numbers such that they add up to the target,
* where index1 must be less than index2. You may assume that each input would have exactly one solution,
* and you may not use the same element twice.
*
* You may assume that each input would have exactly one solution.
*
* Input: numbers={2, 7, 11, 15}, target=9
* Output: [0, 1]
*
*
**********************************************************************************/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  const map = Object.create(null)
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] !== undefined) {
      return [map[nums[i]], i]
    } else {
      map[target - nums[i]] = i
    }
  }
}

export { twoSum }
