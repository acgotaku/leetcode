// Source : https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
// Author : acgotaku311
// Date   : 2021-03-01

/** ********************************************************************************
*
* Suppose a sorted array is rotated at some pivot unknown to you beforehand.
*
* (i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).
*
* Find the minimum element.
*
* You may assume no duplicate exists in the array.
*
**********************************************************************************/

/**
 * @param {number[]} nums
 * @return {number}
 */
const findMin = function (nums) {
  let start = 0
  let end = nums.length - 1
  while (end - start > 1) {
    const mid = Number.parseInt((start + end) / 2)
    if (nums[start] < nums[mid] && nums[mid] < nums[end]) {
      return nums[start]
    }

    if (nums[start] > nums[mid]) {
      end = mid
      continue
    }
    if (nums[mid] > nums[end]) {
      start = mid
      continue
    }
  }

  if (start === end) {
    return nums[start]
  }
  return Math.min(nums[start], nums[end])
}
export { findMin }
