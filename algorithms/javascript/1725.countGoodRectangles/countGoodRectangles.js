// Source : https://leetcode.com/problems/number-of-rectangles-that-can-form-the-largest-square/
// Author : acgotaku311
// Date   : 2021-02-17

/**
 * @param {number[][]} rectangles
 * @return {number}
 */
const countGoodRectangles = function (rectangles) {
  const dict = {}
  let maxLen = 0
  rectangles.forEach(rect => {
    const k = Math.min(...rect)
    if (dict[k]) {
      dict[k]++
    } else {
      dict[k] = 1
    }
    maxLen = Math.max(maxLen, k)
  })
  return dict[maxLen]
}

export { countGoodRectangles }
