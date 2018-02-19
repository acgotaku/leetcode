// Source : https://leetcode.com/problems/spiral-matrix/description/
// Author : acgotaku311
// Date   : 2018-02-19

/**********************************************************************************
*
* Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.
*
* For example,
* Given the following matrix:
*
* [
*  [ 1, 2, 3 ],
*  [ 4, 5, 6 ],
*  [ 7, 8, 9 ]
* ]
*
* You should return [1,2,3,6,9,8,7,4,5].
*
*
**********************************************************************************/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = function (matrix) {
  const result = []
  const row = matrix.length
  if (row <= 0) {
    return result
  }
  const col = matrix[0].length
  let i = 0
  let j = 0
  for (; i < Number.parseInt((row + 1) / 2) && j < Number.parseInt((col + 1) / 2); i++, j++) {
    // top
    for (let m = j; m < col - j; m++) {
      result.push(matrix[i][m])
    }

    // right
    for (let m = j + 1; m < row - i; m++) {
      result.push(matrix[m][col - 1 - j])
    }

    // bottom
    if (row - i - 1 > i) {
      for (let m = col - j - 2; m >= j; m--) {
        result.push(matrix[row - i - 1][m])
      }
    }

    // left

    if (col - j - 1 > j) {
      for (let m = row - i - 2; m > i; m--) {
        result.push(matrix[m][j])
      }
    }
  }

  return result
}

export { spiralOrder }
