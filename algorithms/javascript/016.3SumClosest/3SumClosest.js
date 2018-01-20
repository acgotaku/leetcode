// Source : https://leetcode.com/problems/3sum-closest/description/
// Author : acgotaku311
// Date   : 2018-01-20

/**********************************************************************************
*
* Given an array S of n integers, find three integers in S such that the sum is
* closest to a given number, target. Return the sum of the three integers.
* You may assume that each input would have exactly one solution.
*
*     For example, given array S = {-1 2 1 -4}, and target = 1.
*
*     The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
*
*
**********************************************************************************/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = function (nums, target) {
  nums.sort((a, b) => {
    return a - b
  })

  const len = nums.length
  let result = 0
  let distance = Number.MAX_SAFE_INTEGER
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
        return target
      }
      if (sum > target) {
        if (sum - target < distance) {
          distance = sum - target
          result = sum
        }
        while (end > 0 && nums[end] === nums[end - 1]) {
          end--
        }
        end--
      } else {
        if (target - sum < distance) {
          distance = target - sum
          result = sum
        }
        while (start < len - 1 && nums[start] === nums[start + 1]) {
          start++
        }
        start++
      }
    }
  }
  return result
}

export { threeSumClosest }
