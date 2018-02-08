// Source : https://leetcode.com/problems/n-queens-ii/description/
// Author : acgotaku311
// Date   : 2018-02-08

/**********************************************************************************
*
* Follow up for N-Queens problem.
*
* Now, instead outputting board configurations, return the total number of distinct solutions.
*
*
**********************************************************************************/

/**
 * @param {number} n
 * @return {number}
 */
const totalNQueens = (n) => {
  let result = 0
  if (n <= 0) {
    return result
  }

  const check = (prev, {x, y}) => {
    for (let i = 0; i < prev.length; i++) {
      if (prev[i].y === y || Math.abs(prev[i].x - x) === Math.abs(prev[i].y - y)) {
        return false
      }
    }
    return true
  }
  const solveQueen = (prev, point) => {
    if (prev.length === 0 || check(prev, point) === true) {
      prev.push(point)
      if (prev.length === n) {
        result = result + 1
      }
      const row = point.x + 1
      if (row < n) {
        for (let i = 0; i < n; i++) {
          solveQueen(prev, {x: row, y: i})
        }
      }
      prev.pop()
    }
  }

  for (let i = 0; i < n; i++) {
    solveQueen([], {x: 0, y: i})
  }

  return result
}

export { totalNQueens }
