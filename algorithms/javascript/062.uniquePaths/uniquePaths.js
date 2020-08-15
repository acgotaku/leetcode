// Source : https://leetcode.com/problems/unique-paths/
// Author : acgotaku311
// Date   : 2020-08-15

/** ********************************************************************************
 *
 * A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).
 *
 * The robot can only move either down or right at any point in time. The robot is trying to reach
 * the bottom-right corner of the grid (marked 'Finish' in the diagram below).
 *
 *
 *    start
 *    +---------+----+----+----+----+----+
 *    |----|    |    |    |    |    |    |
 *    |----|    |    |    |    |    |    |
 *    +----------------------------------+
 *    |    |    |    |    |    |    |    |
 *    |    |    |    |    |    |    |    |
 *    +----------------------------------+
 *    |    |    |    |    |    |    |----|
 *    |    |    |    |    |    |    |----|
 *    +----+----+----+----+----+---------+
 *                                   finish
 *
 *
 * How many possible unique paths are there?
 *
 * Above is a 3 x 7 grid. How many possible unique paths are there?
 *
 * Note: m and n will be at most 100.
 *
 **********************************************************************************/

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const uniquePaths = function (m, n) {
  const row = n
  const col = m
  const data = []
  for (let i = 0; i < row; i++) {
    const rowData = new Array(col).fill(0)
    data.push(rowData)
  }

  for (let i = 0; i < row; i++) {
    data[i][0] = 1
  }

  for (let j = 0; j < col; j++) {
    data[0][j] = 1
  }

  for (let i = 1; i < row; i++) {
    for (let j = 1; j < col; j++) {
      data[i][j] = data[i - 1][j] + data[i][j - 1]
    }
  }
  return data[row - 1][col - 1]
}
export { uniquePaths }
