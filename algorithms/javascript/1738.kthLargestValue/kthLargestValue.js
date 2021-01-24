// Source : https://leetcode.com/problems/find-kth-largest-xor-coordinate-value/
// Author : acgotaku311
// Date   : 2021-02-24

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
const kthLargestValue = function (matrix, k) {
  const row = matrix.length
  const col = matrix[0].length
  const results = []
  for (let i = 0; i < row; i++) {
    results.push(new Array(col).fill(0))
  }
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      results[i][j] = matrix[i][j]
      if (i > 0) {
        results[i][j] ^= results[i - 1][j]
      }
      if (j > 0) {
        results[i][j] ^= results[i][j - 1]
      }
      if (i > 0 && j > 0) {
        results[i][j] ^= results[i - 1][j - 1]
      }
    }
  }
  const res = results.flat().sort((a, b) => (b - a))
  return res[k - 1]
}

export { kthLargestValue }
