// Source : https://leetcode.com/problems/triangle/
// Author : acgotaku311
// Date   : 2020-12-13

/** ********************************************************************************
*
* Given a triangle, find the minimum path sum from top to bottom.
* Each step you may move to adjacent numbers on the row below.
*
* For example, given the following triangle
*
* [
*      [2],
*     [3,4],
*    [6,5,7],
*   [4,1,8,3]
* ]
*
* The minimum path sum from top to bottom is 11 (i.e., 2 + 3 + 5 + 1 = 11).
*
* Note:
* Bonus point if you are able to do this using only O(n) extra space, where n is the total number of rows in the triangle.
*
*
**********************************************************************************/

/**
 * @param {number[][]} triangle
 * @return {number}
 */
const minimumTotal = function (triangle) {
  const len = triangle.length
  for (let i = len - 2; i >= 0; i--) {
    const row = triangle[i]
    for (let j = 0; j < row.length; j++) {
      row[j] = Math.min(triangle[i + 1][j], triangle[i + 1][j + 1]) + row[j]
    }
  }

  return triangle[0][0]
}

export { minimumTotal }
