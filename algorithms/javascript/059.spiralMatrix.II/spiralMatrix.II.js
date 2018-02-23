// Source : https://leetcode.com/problems/spiral-matrix-ii/description/
// Author : acgotaku311
// Date   : 2018-02-23

/**********************************************************************************
*
* Given an integer n, generate a square matrix filled with elements from 1 to n2 in spiral order.
*
* For example,
* Given n = 3,
*
* You should return the following matrix:
*
* [
*  [ 1, 2, 3 ],
*  [ 8, 9, 4 ],
*  [ 7, 6, 5 ]
* ]
*
*
**********************************************************************************/

/**
 * @param {number} n
 * @return {number[][]}
 */
const generateMatrix = function (n) {
  const matrix = []
  let count = 1
  for (let i = 0; i < n; i++) {
    matrix.push(new Array(n).fill(0))
  }

  for (let i = 0; i < Number.parseInt((n + 1 / 2)); i++) {
    // top
    for (let c = i; c < n - i; c++) {
      matrix[i][c] = count++
    }

    // right
    for (let r = i + 1; r < n - i; r++) {
      matrix[r][n - i - 1] = count++
    }

    if (n - i - 1 > i) {
      // bottom
      for (let c = n - i - 2; c >= i; c--) {
        matrix[n - i - 1][c] = count++
      }

      // left
      for (let r = n - i - 2; r > i; r--) {
        matrix[r][i] = count++
      }
    }
  }

  return matrix
}

export { generateMatrix }
