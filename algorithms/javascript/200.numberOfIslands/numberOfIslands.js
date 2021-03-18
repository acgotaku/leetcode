// Source : https://leetcode.com/problems/number-of-islands/
// Author : acgotaku311
// Date   : 2021-03-18

/** ********************************************************************************
 *
 * Given a 2d grid map of '1's (land) and '0's (water), count the number of islands.
 * An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.
 * You may assume all four edges of the grid are all surrounded by water.
 *
 * Example 1:
 *   11110
 *   11010
 *   11000
 *   00000
 * Answer: 1
 *
 * Example 2:
 *   11000
 *   11000
 *   00100
 *   00011
 * Answer: 3
 *
 *
 **********************************************************************************/

/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = function (grid) {
  let count = 0
  const row = grid.length
  const col = grid[0].length
  const dfs = (grid, r, c) => {
    grid[r][c] = '0'
    if (r + 1 < row && grid[r + 1][c] === '1') {
      dfs(grid, r + 1, c)
    }
    if (c + 1 < col && grid[r][c + 1] === '1') {
      dfs(grid, r, c + 1)
    }
    if (r - 1 >= 0 && grid[r - 1][c] === '1') {
      dfs(grid, r - 1, c)
    }
    if (c - 1 >= 0 && grid[r][c - 1] === '1') {
      dfs(grid, r, c - 1)
    }
  }
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === '1') {
        count++
        dfs(grid, i, j)
      }
    }
  }
  return count
}
export { numIslands }
