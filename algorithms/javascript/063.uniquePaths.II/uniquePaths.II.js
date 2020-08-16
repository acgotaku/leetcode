// Source : https://leetcode.com/problems/unique-paths-ii/
// Author : acgotaku311
// Date   : 2020-08-15

/** ********************************************************************************
*
* Follow up for "Unique Paths":
*
* Now consider if some obstacles are added to the grids. How many unique paths would there be?
*
* An obstacle and empty space is marked as 1 and 0 respectively in the grid.
*
* For example,
* There is one obstacle in the middle of a 3x3 grid as illustrated below.
*
* [
*   [0,0,0],
*   [0,1,0],
*   [0,0,0]
* ]
*
* The total number of unique paths is 2.
*
* Note: m and n will be at most 100.
*
**********************************************************************************/

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
const uniquePathsWithObstacles = function (obstacleGrid) {
  const row = obstacleGrid.length
  const col = obstacleGrid[0].length
  const data = []
  for (let i = 0; i < row; i++) {
    const rowData = new Array(col).fill(0)
    data.push(rowData)
  }

  if (obstacleGrid[0][0] === 0) {
    data[0][0] = 1
  }

  for (let i = 1; i < row; i++) {
    if (obstacleGrid[i][0] === 0 && data[i - 1][0] !== 0) {
      data[i][0] = 1
    }
  }

  for (let j = 1; j < col; j++) {
    if (obstacleGrid[0][j] === 0 && data[0][j - 1] !== 0) {
      data[0][j] = 1
    }
  }

  for (let i = 1; i < row; i++) {
    for (let j = 1; j < col; j++) {
      if (obstacleGrid[i][j] === 0) {
        data[i][j] = data[i - 1][j] + data[i][j - 1]
      }
    }
  }
  return data[row - 1][col - 1]
}

export { uniquePathsWithObstacles }
