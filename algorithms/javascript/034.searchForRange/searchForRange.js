// Source : https://leetcode.com/problems/search-for-a-range/description/
// Author : acgotaku311
// Date   : 2018-02-03

/**********************************************************************************
*
* Given a sorted array of integers, find the starting and ending position of a given target value.
*
* Your algorithm's runtime complexity must be in the order of O(log n).
*
* If the target is not found in the array, return [-1, -1].
*
* For example,
* Given [5, 7, 7, 8, 8, 10] and target value 8,
* return [3, 4].
*
*
**********************************************************************************/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = function (nums, target) {
  const binarySearch = (nums, start, end, target) => {
    if (start > end) {
      return -1
    }
    const mid = start + Number.parseInt((end - start) / 2)
    if (nums[mid] === target) {
      return mid
    }
    if (nums[mid] > target) {
      return binarySearch(nums, start, mid - 1, target)
    } else {
      return binarySearch(nums, mid + 1, end, target)
    }
  }

  const index = binarySearch(nums, 0, nums.length - 1, target)
  if (index === -1) {
    return [-1, -1]
  } else {
    let high = index
    let low = index
    let findHigh = high
    let findLow = low
    do {
      high = findHigh
      findHigh = binarySearch(nums, findHigh + 1, nums.length - 1, target)
    } while (findHigh > -1)
    do {
      low = findLow
      findLow = binarySearch(nums, 0, findLow - 1, target)
    } while (findLow > -1)
    return [low, high]
  }
}

export { searchRange }
