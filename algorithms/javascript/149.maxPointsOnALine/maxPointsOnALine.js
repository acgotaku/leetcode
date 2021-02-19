// Source : https://leetcode.com/problems/max-points-on-a-line/
// Author : acgotaku311
// Date   : 2021-02-19

/** ********************************************************************************
*
* Given n points on a 2D plane, find the maximum number of points that lie on the same straight line.
*
**********************************************************************************/

/**
 * @param {number[][]} points
 * @return {number}
 */
const maxPoints = function (points) {
  const map = new Map()
  let maxCount = 1
  let horLines = 0
  let verLines = 0
  const len = points.length
  if (len < 3) {
    return len
  }

  const gcd = (x, y) => {
    while (y) {
      const t = y
      y = x % y
      x = t
    }
    return x
  }
  const addLine = (i, j, count, duplicates) => {
    const x1 = points[i][0]
    const y1 = points[i][1]
    const x2 = points[j][0]
    const y2 = points[j][1]
    if (x1 === x2 && y1 === y2) {
      duplicates++
    } else if (y1 === y2) {
      horLines += 1
      count = Math.max(count, horLines)
    } else if (x1 === x2) {
      verLines += 1
      count = Math.max(count, verLines)
    } else {
      const deltaX = x1 - x2
      const deltaY = y1 - y2
      const divide = gcd(deltaX, deltaY)
      const slope = `${deltaY / divide}/${deltaX / divide}`
      if (map.has(slope)) {
        map.set(slope, map.get(slope) + 1)
      } else {
        map.set(slope, 2)
      }
      count = Math.max(count, map.get(slope))
    }
    return [count, duplicates]
  }
  const maxPointsOnLine = (i) => {
    map.clear()
    horLines = 1
    verLines = 1
    let count = 1
    let duplicates = 0
    for (let j = i + 1; j < len; j++) {
      [count, duplicates] = addLine(i, j, count, duplicates)
    }
    return count + duplicates
  }

  for (let i = 0; i < len - 1; i++) {
    maxCount = Math.max(maxPointsOnLine(i), maxCount)
  }

  return maxCount
}
export { maxPoints }
