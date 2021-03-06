// Source : https://leetcode.com/problems/maximum-gap/
// Author : acgotaku311
// Date   : 2021-03-06

/** ********************************************************************************
 *
 * Given an unsorted array, find the maximum difference between the successive elements in its sorted form.
 *
 * Try to solve it in linear time/space.
 *
 * Return 0 if the array contains less than 2 elements.
 *
 * You may assume all elements in the array are non-negative integers and fit in the 32-bit signed integer range.
 *
 *
 **********************************************************************************/

/**
 * @param {number[]} nums
 * @return {number}
 */
const maximumGap = function (nums) {
  nums = nums.sort((a, b) => a - b)
  let max = 0

  for (let i = 0; i < nums.length - 1; i++) {
    max = Math.max(max, nums[i + 1] - nums[i])
  }

  return max
}
export { maximumGap }
