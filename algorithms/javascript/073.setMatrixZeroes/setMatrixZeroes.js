// Source : https://leetcode.com/problems/set-matrix-zeroes/
// Author : acgotaku311
// Date   : 2020-08-22

/** ********************************************************************************
*
* Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in place.
*
* click to show follow up.
*
* Follow up:
*
* Did you use extra space?
* A straight forward solution using O(mn) space is probably a bad idea.
* A simple improvement uses O(m + n) space, but still not the best solution.
* Could you devise a constant space solution?
*
*
**********************************************************************************/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const setZeroes = function (matrix) {
  const row = matrix.length
  const col = matrix[0].length
  let zeroRow = false
  let zeroCol = false
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (matrix[i][j] === 0) {
        if (i === 0) {
          zeroRow = true
        }
        if (j === 0) {
          zeroCol = true
        }
        matrix[i][0] = 0
        matrix[0][j] = 0
      }
    }
  }

  for (let i = 1; i < row; i++) {
    for (let j = 1; j < col; j++) {
      if (matrix[0][j] === 0 || matrix[i][0] === 0) {
        matrix[i][j] = 0
      }
    }
  }
  if (zeroRow) {
    for (let j = 0; j < col; j++) {
      matrix[0][j] = 0
    }
  }
  if (zeroCol) {
    for (let i = 0; i < row; i++) {
      matrix[i][0] = 0
    }
  }

  return matrix
}
export { setZeroes }
