// Source : https://leetcode.com/problems/find-center-of-star-graph/
// Author : acgotaku311
// Date   : 2021-03-14

/**
 * @param {number[][]} edges
 * @return {number}
 */
const findCenter = function (edges) {
  const points = Array.from(new Set(edges.flat()))
  for (let i = 0; i < points.length; i++) {
    const point = points[i]
    if (edges.every(edge => edge.includes(point))) {
      return point
    }
  }
}
export { findCenter }
