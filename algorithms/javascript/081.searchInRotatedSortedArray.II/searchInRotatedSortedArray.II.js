// Source : https://leetcode.com/problems/search-in-rotated-sorted-array-ii/
// Author : acgotaku311
// Date   : 2020-09-03

/** ********************************************************************************
*
* Follow up for "Search in Rotated Sorted Array":
* What if duplicates are allowed?
*
* Would this affect the run-time complexity? How and why?
*
* Write a function to determine if a given target is in the array.
*
**********************************************************************************/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
const search = function (nums, target) {
  const binarySearch = (nums, start, end, target) => {
    if (start > end) {
      return false
    }
    while (start < end && nums[start] === nums[end]) {
      start++
    }
    const mid = start + Number.parseInt((end - start) / 2)
    if (nums[mid] === target) {
      return true
    }
    if (nums[mid] < nums[end]) { // right is ordered
      if (target > nums[mid] && target <= nums[end]) {
        return binarySearch(nums, mid + 1, end, target)
      } else {
        return binarySearch(nums, start, mid - 1, target)
      }
    } else if (nums[mid] > nums[end]) {
      if (target < nums[mid] && target >= nums[start]) {
        return binarySearch(nums, start, mid - 1, target)
      } else {
        return binarySearch(nums, mid + 1, end, target)
      }
    } else {
      return binarySearch(nums, start, end - 1, target)
    }
  }

  return binarySearch(nums, 0, nums.length - 1, target)
}

export { search }
