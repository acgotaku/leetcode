// Source : https://leetcode.com/problems/4sum/description/
// Author : acgotaku311
// Date   : 2018-01-21

/**********************************************************************************
*
* Given an array S of n integers, are there elements a, b, c, and d in S such that a + b + c + d = target?
* Find all unique quadruplets in the array which gives the sum of target.
*
* Note:
*
* Elements in a quadruplet (a,b,c,d) must be in non-descending order. (ie, a ≤ b ≤ c ≤ d)
* The solution set must not contain duplicate quadruplets.
*
*     For example, given array S = {1 0 -1 0 -2 2}, and target = 0.
*
*     A solution set is:
*     (-1,  0, 0, 1)
*     (-2, -1, 1, 2)
*     (-2,  0, 0, 2)
*
*
**********************************************************************************/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */

const fourSum = function (nums, target) {
  nums.sort((a, b) => a - b)
  const res = []
  const n = nums.length

  for (let i = 0; i < n - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue
    for (let j = i + 1; j < n - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue

      let left = j + 1
      let right = n - 1

      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right]
        if (sum === target) {
          res.push([nums[i], nums[j], nums[left], nums[right]])
          while (left < right && nums[left] === nums[left + 1]) left++
          while (left < right && nums[right] === nums[right - 1]) right--
          left++
          right--
        } else if (sum < target) {
          left++
        } else {
          right--
        }
      }
    }
  }

  return res
}

export { fourSum }
