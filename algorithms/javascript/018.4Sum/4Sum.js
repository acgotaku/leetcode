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

const threeSum = function (nums, target) {
  const len = nums.length
  const result = []
  for (let i = 0; i <= len - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }
    const a = nums[i]
    let start = i + 1
    let end = len - 1
    while (start < end) {
      const b = nums[start]
      const c = nums[end]
      const sum = a + b + c
      if (sum === target) {
        result.push([a, b, c])
        while (start < len - 1 && nums[start] === nums[start + 1]) {
          start++
        }

        while (end > 0 && nums[end] === nums[end - 1]) {
          end--
        }
        start++
        end--
      } else if (sum > target) {
        while (end > 0 && nums[end] === nums[end - 1]) {
          end--
        }
        end--
      } else {
        while (start < len - 1 && nums[start] === nums[start + 1]) {
          start++
        }
        start++
      }
    }
  }
  return result
}
const fourSum = (nums, target) => {
  nums.sort((a, b) => {
    return a - b
  })
  const result = []
  const len = nums.length
  if (len < 4) {
    return result
  }
  for (let i = 0; i < len - 3; i++) {
    if (i > 0 && nums[i - 1] === nums[i]) {
      continue
    }
    const copy = [].slice.call(nums)
    copy.splice(0, i + 1)
    const ret = threeSum(copy, target - nums[i])
    for (let j = 0; j < ret.length; j++) {
      ret[j].unshift(nums[i])
      result.push(ret[j])
    }
  }

  return result
}

export { fourSum }
