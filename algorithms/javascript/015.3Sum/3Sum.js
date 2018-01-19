// Source : https://leetcode.com/problems/3sum/description/
// Author : acgotaku311
// Date   : 2018-01-19

/**********************************************************************************
*
* Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0?
* Find all unique triplets in the array which gives the sum of zero.
*
* Note:
*
* Elements in a triplet (a,b,c) must be in non-descending order. (ie, a ≤ b ≤ c)
* The solution set must not contain duplicate triplets.
*
*     For example, given array S = {-1 0 1 2 -1 -4},
*
*     A solution set is:
*     (-1, 0, 1)
*     (-1, -1, 2)
*
*
**********************************************************************************/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function (nums) {
  nums.sort((a, b) => {
    return a - b
  })

  const len = nums.length
  let result = []
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
      if (a + b + c === 0) {
        result.push([a, b, c])
        while (start < len - 1 && nums[start] === nums[start + 1]) {
          start++
        }

        while (end > 0 && nums[end] === nums[end - 1]) {
          end--
        }
        start++
        end--
      } else if (a + b + c > 0) {
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

export { threeSum }
