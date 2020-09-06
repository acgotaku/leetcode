// Source : https://leetcode.com/problems/maximal-rectangle/
// Author : acgotaku311
// Date   : 2020-09-06

/** ********************************************************************************
*
* Given a 2D binary matrix filled with 0's and 1's, find the largest rectangle
* containing all ones and return its area.
*
**********************************************************************************/

/**
 * @param {character[][]} matrix
 * @return {number}
 */
const maximalRectangle = function (matrix) {
  if (matrix.length <= 0 || matrix[0].length <= 0) {
    return 0
  }

  const row = matrix.length
  const col = matrix[0].length
  let maxArea = 0

  const heights = []
  for (let i = 0; i < row; i++) {
    heights.push(new Array(col).fill(0))
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (matrix[i][j] === '1') {
        heights[i][j] = (i === 0 ? 1 : heights[i - 1][j] + 1)
      }
    }
    const area = largestRectangleArea(heights[i])
    if (area > maxArea) {
      maxArea = area
    }
  }
  return maxArea
}

const largestRectangleArea = function (heights) {
  const stack = []
  let maxArea = 0
  for (let i = 0; i <= heights.length; i++) {
    const height = i === heights.length ? 0 : heights[i]

    if (stack.length <= 0 || height >= heights[stack[stack.length - 1]]) {
      stack.push(i)
    } else {
      const top = stack[stack.length - 1]
      stack.pop()
      const len = stack.length === 0 ? i : i - stack[stack.length - 1] - 1
      maxArea = Math.max(maxArea, heights[top] * len)
      i--
    }
  }

  return maxArea
}

export { maximalRectangle }
