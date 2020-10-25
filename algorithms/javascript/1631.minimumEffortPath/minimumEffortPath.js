// Source : https://leetcode.com/problems/path-with-minimum-effort/
// Author : acgotaku311
// Date   : 2020-10-25

/**
 * @param {number[][]} heights
 * @return {number}
 */
const minimumEffortPath = function (heights) {
  const row = heights.length
  const col = heights[0].length
  const MAX_INT = Math.pow(2, 31) - 1
  const queue = []
  const table = []
  for (let i = 0; i < row; i++) {
    table.push(new Array(col).fill(MAX_INT))
  }

  const near = ({ x, y }) => {
    const arr = []
    if (x > 0) {
      arr.push({ x: x - 1, y })
    }
    if (y > 0) {
      arr.push({ x, y: y - 1 })
    }
    if (x < row - 1) {
      arr.push({ x: x + 1, y })
    }
    if (y < col - 1) {
      arr.push({ x, y: y + 1 })
    }
    return arr
  }
  queue.push({ x: 0, y: 0 })
  table[0][0] = 0
  while (queue.length > 0) {
    const point = queue.pop()
    const nearPoints = near(point)
    for (let i = 0; i < nearPoints.length; i++) {
      const current = nearPoints[i]
      const distance = Math.max(Math.abs(heights[current.x][current.y] - heights[point.x][point.y]), table[point.x][point.y])
      if (table[current.x][current.y] > distance) {
        table[current.x][current.y] = distance
        queue.push(current)
      }
    }
  }

  return table[row - 1][col - 1]
}

export { minimumEffortPath }
