// Source : https://leetcode.com/problems/largest-submatrix-with-rearrangements/
// Author : acgotaku311
// Date   : 2021-01-18

/**
 * @param {number[][]} matrix
 * @return {number}
 */
const largestSubmatrix = function (matrix) {
  const m = matrix.length
  const n = matrix[0].length
  let count = 0
  const height = new Array(n).fill(0)
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        height[j] = 0
      } else {
        height[j]++
      }
    }
    const orderHeight = [...height].sort((a, b) => a - b)
    for (let j = 0; j < n; j++) {
      count = Math.max(count, orderHeight[j] * (n - j))
    }
  }
  return count
}

export { largestSubmatrix }
