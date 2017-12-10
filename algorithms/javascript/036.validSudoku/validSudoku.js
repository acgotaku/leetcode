// Source : https://leetcode.com/problems/valid-sudoku/description/
// Author : acgotaku311
// Date   : 2017-12-10

/**********************************************************************************
*
* Determine if a Sudoku is valid, according to: Sudoku Puzzles - The Rules.
*
* The Sudoku board could be partially filled, where empty cells are filled with the character '.'.
*
* A partially filled sudoku which is valid.
*
* Note:
* > A valid Sudoku board (partially filled) is not necessarily solvable.
*   Only the filled cells need to be validated.
*
*
**********************************************************************************/

/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = (board) => {
  const len = board.length
  const rowMask = new Array(len)
  const colMask = new Array(len)
  const blockMask = new Array(len)
  for (let i = 0; i < len; i++) {
    rowMask[i] = [false, false, false, false, false, false, false, false, false]
    colMask[i] = [false, false, false, false, false, false, false, false, false]
    blockMask[i] = [false, false, false, false, false, false, false, false, false]
  }
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (isNaN(board[i][j])) {
        continue
      }
      const idx = parseInt(board[i][j]) - 1

      if (rowMask[i][idx] === true) {
        return false
      }
      rowMask[i][idx] = true

      if (colMask[j][idx] === true) {
        return false
      }
      colMask[j][idx] = true

      const block = parseInt(i / 3) * 3 + parseInt(j / 3)
      if (blockMask[block][idx] === true) {
        return false
      }
      blockMask[block][idx] = true
    }
  }
  return true
}

export { isValidSudoku }
