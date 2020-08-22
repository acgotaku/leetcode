// Source : https://leetcode.com/problems/search-a-2d-matrix/
// Author : acgotaku311
// Date   : 2020-08-22

/** ********************************************************************************
*
* Write an efficient algorithm that searches for a value in an m x n matrix.
* This matrix has the following properties:
*
* Integers in each row are sorted from left to right.
* The first integer of each row is greater than the last integer of the previous row.
*
* For example,
*
* Consider the following matrix:
*
* [
*   [1,   3,  5,  7],
*   [10, 11, 16, 20],
*   [23, 30, 34, 50]
* ]
*
* Given target = 3, return true.
*
**********************************************************************************/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = function (matrix, target) {
  const binarySearch = (array, target) => {
    let low = 0
    let high = array.length - 1
    while (low <= high) {
      const mid = low + Number.parseInt((high - low) / 2)
      if (target === array[mid]) {
        return mid
      } else if (target > array[mid]) {
        low = mid + 1
      } else if (target < array[mid]) {
        high = mid - 1
      }
    }
    return -1
  }

  const arr = matrix.flat()
  const result = binarySearch(arr, target)
  return result > -1
}

export { searchMatrix }
