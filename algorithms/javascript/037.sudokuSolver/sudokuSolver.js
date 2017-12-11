// Source : https://leetcode.com/problems/sudoku-solver/description/
// Author : acgotaku311
// Date   : 2017-12-11

/**********************************************************************************
*
* Write a program to solve a Sudoku puzzle by filling the empty cells.
*
* Empty cells are indicated by the character '.'.
*
* You may assume that there will be only one unique solution.
*
* A sudoku puzzle...
*
* ...and its solution numbers marked in red.
*
*
**********************************************************************************/

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const len = 9
const rowMask = new Array(len)
const colMask = new Array(len)
const blockMask = new Array(len)

const initSudoku = (board) => {
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
      const block = parseInt(i / 3) * 3 + parseInt(j / 3)
      const idx = parseInt(board[i][j]) - 1
      if (rowMask[i][idx] || colMask[j][idx] || blockMask[block][idx]) {
        return false
      }
      rowMask[i][idx] = colMask[j][idx] = blockMask[block][idx] = true
    }
  }
  return true
}

const recursiveSudoKu = (board, row, col) => {
  if (row >= len) {
    return true
  }
  if (col >= len) {
    return recursiveSudoKu(board, row + 1, 0)
  }
  if (board[row][col] !== '.') {
    return recursiveSudoKu(board, row, col + 1)
  }
  for (let i = 0; i < len; i++) {
    const block = parseInt(row / 3) * 3 + parseInt(col / 3)
    if (rowMask[row][i] || colMask[col][i] || blockMask[block][i]) {
      continue
    }
    board[row][col] = `${i + 1}`
    rowMask[row][i] = colMask[col][i] = blockMask[block][i] = true
    if (recursiveSudoKu(board, row, col + 1) === true) {
      return true
    }
    // backtrace
    board[row][col] = '.'
    rowMask[row][i] = colMask[col][i] = blockMask[block][i] = false
  }
  return false
}
const solveSudoku = (board) => {
  if (initSudoku(board) === false) {
    return false
  }
  recursiveSudoKu(board, 0, 0)
}

export { solveSudoku }
