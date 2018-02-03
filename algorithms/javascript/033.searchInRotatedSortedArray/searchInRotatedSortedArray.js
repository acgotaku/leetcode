// Source : https://leetcode.com/problems/search-in-rotated-sorted-array/description/
// Author : acgotaku311
// Date   : 2018-02-03

/**********************************************************************************
*
* Suppose a sorted array is rotated at some pivot unknown to you beforehand.
*
* (i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).
*
* You are given a target value to search. If found in the array return its index, otherwise return -1.
*
* You may assume no duplicate exists in the array.
*
**********************************************************************************/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target) {
  const binarySearch = (nums, start, end, target) => {
    if (start > end) {
      return -1
    }
    const mid = start + Number.parseInt((end - start) / 2)
    if (nums[mid] === target) {
      return mid
    }

    if (nums[mid] < nums[end]) { // right half sorted
      if (target > nums[mid] && target <= nums[end]) {
        return binarySearch(nums, mid + 1, end, target)
      } else {
        return binarySearch(nums, start, mid - 1, target)
      }
    } else {
      if (target < nums[mid] && target >= nums[start]) {
        return binarySearch(nums, start, mid - 1, target)
      } else {
        return binarySearch(nums, mid + 1, end, target)
      }
    }
  }

  return binarySearch(nums, 0, nums.length - 1, target)
}

export { search }
