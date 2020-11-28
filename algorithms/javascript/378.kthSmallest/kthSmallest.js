// Source : https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/
// Author : acgotaku311
// Date   : 2020-11-28

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
const kthSmallest = function (matrix, k) {
  const row = matrix.length
  const col = matrix[0].length
  let low = matrix[0][0]
  let high = matrix[row - 1][col - 1]
  while (low < high) {
    let count = 0
    const mid = Number.parseInt((low + high) / 2)
    for (let i = 0; i < row; i++) {
      let rowCount = 0
      for (let j = 0; j < col; j++) {
        if (matrix[i][j] <= mid) {
          rowCount++
        }
      }
      count += rowCount
    }
    if (count < k) {
      low = mid + 1
    } else {
      high = mid
    }
  }
  return low
}
export { kthSmallest }
