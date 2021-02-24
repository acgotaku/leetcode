// Source : https://leetcode.com/problems/maximum-product-subarray/
// Author : acgotaku311
// Date   : 2021-02-24

/** ********************************************************************************
*
* Find the contiguous subarray within an array (containing at least one number)
* which has the largest product.
*
* For example, given the array [2,3,-2,4],
* the contiguous subarray [2,3] has the largest product = 6.
*
* More examples:
*
*   Input: arr[] = {6, -3, -10, 0, 2}
*   Output:   180  // The subarray is {6, -3, -10}
*
*   Input: arr[] = {-1, -3, -10, 0, 60}
*   Output:   60  // The subarray is {60}
*
*   Input: arr[] = {-2, -3, 0, -2, -40}
*   Output:   80  // The subarray is {-2, -40}
*
**********************************************************************************/

/**
 * @param {number[]} nums
 * @return {number}
 */
const maxProduct = function (nums) {
  const len = nums.length
  let maxResult = nums[0]
  let maxPrev = nums[0]
  let minPrev = nums[0]
  let minCurrent = nums[0]
  let maxCurrent = nums[0]

  for (let i = 1; i < len; i++) {
    maxCurrent = Math.max(maxPrev * nums[i], minPrev * nums[i], nums[i])
    minCurrent = Math.min(maxPrev * nums[i], minPrev * nums[i], nums[i])
    maxResult = Math.max(maxCurrent, maxResult)
    maxPrev = maxCurrent
    minPrev = minCurrent
  }

  return maxResult
}
export { maxProduct }
