// Source : https://leetcode.com/problems/minimum-path-sum/
// Author : acgotaku311
// Date   : 2020-08-16

/** ***************************************************************************************************
 *
 * Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right
 * which minimizes the sum of all numbers along its path.
 *
 * Note: You can only move either down or right at any point in time.
 *
 * Example:
 *
 * Input:
 * [
 *   [1,3,1],
 *   [1,5,1],
 *   [4,2,1]
 * ]
 * Output: 7
 * Explanation: Because the path 1→3→1→1→1 minimizes the sum.
 *
 ******************************************************************************************************/

/**
 * @param {number[][]} grid
 * @return {number}
 */
const minPathSum = function (grid) {
  const row = grid.length
  if (row <= 0) {
    return 0
  }
  const col = grid[0].length
  if (col <= 0) {
    return 0
  }
  const data = []

  for (let i = 0; i < row; i++) {
    const rowData = new Array(col).fill(0)
    data.push(rowData)
  }
  data[0][0] = grid[0][0]

  for (let i = 1; i < row; i++) {
    data[i][0] = data[i - 1][0] + grid[i][0]
  }
  for (let j = 1; j < col; j++) {
    data[0][j] = data[0][j - 1] + grid[0][j]
  }

  for (let i = 1; i < row; i++) {
    for (let j = 1; j < col; j++) {
      data[i][j] = Math.min(data[i - 1][j], data[i][j - 1]) + grid[i][j]
    }
  }
  return data[row - 1][col - 1]
}

export { minPathSum }
