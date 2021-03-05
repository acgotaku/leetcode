// Source : https://leetcode.com/problems/find-peak-element/
// Author : acgotaku311
// Date   : 2021-03-05

/** ********************************************************************************
*
* A peak element is an element that is greater than its neighbors.
*
* Given an input array where num[i] ≠ num[i+1], find a peak element and return its index.
*
* You may imagine that num[-1] = num[n] = -∞.
*
* For example, in array [1, 2, 3, 1], 3 is a peak element and your function should return the index number 2.
*
* click to show spoilers.
*
* Note:
* Your solution should be in logarithmic complexity.
*
* Credits:Special thanks to @ts for adding this problem and creating all test cases.
*
**********************************************************************************/

/**
 * @param {number[]} nums
 * @return {number}
 */
const findPeakElement = function (nums) {
  const min = Number.MIN_SAFE_INTEGER
  nums.push(min)
  nums.unshift(min)
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) {
      return i - 1
    }
  }
}
export { findPeakElement }
