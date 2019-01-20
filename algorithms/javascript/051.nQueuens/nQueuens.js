// Source : https://leetcode.com/problems/n-queens/description/
// Author : acgotaku311
// Date   : 2018-02-05

/**********************************************************************************
*
* The n-queens puzzle is the problem of placing n queens on an n×n chessboard
* such that no two queens attack each other.
*
* Given an integer n, return all distinct solutions to the n-queens puzzle.
*
* Each solution contains a distinct board configuration of the n-queens' placement,
* where 'Q' and '.' both indicate a queen and an empty space respectively.
*
* For example,
* There exist two distinct solutions to the 4-queens puzzle:
*
* [
*  [".Q..",  // Solution 1
*   "...Q",
*   "Q...",
*   "..Q."],
*
*  ["..Q.",  // Solution 2
*   "Q...",
*   "...Q",
*   ".Q.."]
* ]
*
*
**********************************************************************************/

/**
 * @param {number} n
 * @return {string[][]}
 */
const solveNQueens = (n) => {
  const result = []
  if (n <= 0) {
    return result
  }
  const buildArray = () => {
    let item = []
    for (let i = 0; i < n; i++) {
      item.push(new Array(n).fill('.'))
    }
    return item
  }

  const check = (prev, { x, y }) => {
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
        const answer = buildArray()
        prev.forEach((item) => {
          answer[item.x][item.y] = 'Q'
        })
        result.push(answer.map(item => item.join('')))
      }
      const row = point.x + 1
      if (row < n) {
        for (let i = 0; i < n; i++) {
          solveQueen(prev, { x: row, y: i })
        }
      }
      prev.pop()
    }
  }

  for (let i = 0; i < n; i++) {
    solveQueen([], { x: 0, y: i })
  }

  return result
}

export { solveNQueens }
