// Source : https://leetcode.com/problems/rotate-image/description/
// Author : acgotaku311
// Date   : 2017-12-17

/**********************************************************************************
*
* You are given an n x n 2D matrix representing an image.
* Rotate the image by 90 degrees (clockwise).
* Follow up:
* Could you do this in-place?
* Given input matrix =
*[
*  [1,2,3],
*  [4,5,6],
*  [7,8,9]
*],
*
* rotate the input matrix in-place such that it becomes:
*[
*  [7,4,1],
*  [8,5,2],
*  [9,6,3]
*]
**********************************************************************************/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = (matrix) => {
  const len = matrix.length
  const map = (a, b) => {
    const x = b
    const y = len - a - 1
    return { x, y }
  }
  for (let i = 0; i < Math.ceil(len / 2); i++) {
    const low = i
    const high = len - i - 1
    for (let j = low; j < high; j++) {
      let a = i
      let b = j
      let prev = matrix[a][b]
      for (let j = 0; j < 4; j++) {
        const { x, y } = map(a, b)
        const temp = matrix[x][y]
        matrix[x][y] = prev
        prev = temp
        a = x
        b = y
      }
    }
  }
}

export { rotate }
