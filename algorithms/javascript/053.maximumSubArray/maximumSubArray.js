// Source : https://leetcode.com/problems/maximum-subarray/description/
// Author : acgotaku311
// Date   : 2018-02-17

/**********************************************************************************
*
* Find the contiguous subarray within an array (containing at least one number)
* which has the largest sum.
*
* For example, given the array [−2,1,−3,4,−1,2,1,−5,4],
* the contiguous subarray [4,−1,2,1] has the largest sum = 6.
*
* More practice:
*
* If you have figured out the O(n) solution, try coding another solution using
* the divide and conquer approach, which is more subtle.
*
*
**********************************************************************************/

/**
 * @param {number[]} nums
 * @return {number}
 */

const maxSubArray = function (nums) {
  const len = nums.length
  const sums = new Array(len)
  let max = nums[0]
  sums[0] = nums[0]
  for (let i = 1; i < len; i++) {
    sums[i] = Math.max(nums[i], sums[i - 1] + nums[i])
    max = Math.max(max, sums[i])
  }

  return max
}

export { maxSubArray }
