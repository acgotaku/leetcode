// Source : https://leetcode.com/problems/word-search/
// Author : acgotaku311
// Date   : 2020-09-01

/** ********************************************************************************
 *
 * Given a 2D board and a word, find if the word exists in the grid.
 *
 * The word can be constructed from letters of sequentially adjacent cell,
 * where "adjacent" cells are those horizontally or vertically neighboring.
 * The same letter cell may not be used more than once.
 *
 * For example,
 * Given board =
 *
 * [
 *   ["ABCE"],
 *   ["SFCS"],
 *   ["ADEE"]
 * ]
 *
 * word = "ABCCED", -> returns true,
 * word = "SEE", -> returns true,
 * word = "ABCB", -> returns false.
 *
 *
 **********************************************************************************/

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const exist = function (board, word) {
  const row = board.length
  const col = board[0].length
  const matrix = []
  for (let i = 0; i < row; i++) {
    matrix.push(new Array(col).fill(false))
  }
  const near = ({ x, y }) => {
    const arr = []
    if (x > 0) {
      arr.push({ x: x - 1, y })
    }
    if (y > 0) {
      arr.push({ x, y: y - 1 })
    }
    if (x < row - 1) {
      arr.push({ x: x + 1, y })
    }
    if (y < col - 1) {
      arr.push({ x, y: y + 1 })
    }
    return arr
  }

  const DFS = ({ x, y }, start) => {
    const nearPoint = near({ x, y })
    if (board[x][y] === word[start] && matrix[x][y] === false) {
      if (start === word.length - 1) {
        return true
      }
      matrix[x][y] = true
      for (let i = 0; i < nearPoint.length; i++) {
        if (DFS(nearPoint[i], start + 1)) {
          return true
        }
      }
      matrix[x][y] = false
    }
    return false
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (board[i][j] === word[0]) {
        if (DFS({ x: i, y: j }, 0)) {
          return true
        }
      }
    }
  }

  return false
}

export { exist }
