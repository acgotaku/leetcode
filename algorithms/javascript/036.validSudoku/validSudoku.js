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
  const len = 9
  const checkRepeat = (array) => {
    const validArray = array.filter((item) => item)
    if ([...new Set(validArray)].length < validArray.length) {
      return true
    } else {
      return false
    }
  }
  for (let i = 0; i < len; i++) {
    let row = []
    let col = []
    let block = []
    const baseX = parseInt(i / 3) * 3
    const baseY = parseInt(i % 3) * 3
    for (let j = 0; j < len; j++) {
      row[j] = parseInt(board[i][j])
      col[j] = parseInt(board[j][i])
      block[j] = parseInt(board[baseX + parseInt(j / 3)][baseY + j % 3])
    }
    if (checkRepeat(col) || checkRepeat(row) || checkRepeat(block)) {
      return false
    }
  }
  return true
}

export { isValidSudoku }
