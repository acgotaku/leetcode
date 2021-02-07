// Source : https://leetcode.com/problems/where-will-the-ball-fall/
// Author : acgotaku311
// Date   : 2020-12-27

/**
 * @param {number[][]} grid
 * @return {number[]}
 */
const findBall = function (grid) {
  const row = grid.length
  const col = grid[0].length
  const results = []
  for (let i = 0; i < col; i++) {
    let level = 0
    let start = i
    while (level < row) {
      const cell = grid[level][start]
      if (cell === 1) {
        if (start < col - 1) {
          const right = grid[level][start + 1]
          if (right === 1) {
            level++
            start++
          } else {
            results.push(-1)
            break
          }
        } else {
          results.push(-1)
          break
        }
      } else {
        if (start > 0) {
          const left = grid[level][start - 1]
          if (left === -1) {
            level++
            start--
          } else {
            results.push(-1)
            break
          }
        } else {
          results.push(-1)
          break
        }
      }
    }
    if (level === row) {
      results.push(start)
    }
  }
  return results
}
export { findBall }
