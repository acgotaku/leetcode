// Source : https://leetcode.com/problems/largest-rectangle-in-histogram/
// Author : acgotaku311
// Date   : 2020-09-06

/** ********************************************************************************
 *
 * Given n non-negative integers representing the histogram's bar height where the width of each bar is 1,
 * find the area of largest rectangle in the histogram.
 *
 *                    6
 *                  +---+
 *               5  |   |
 *              +---+   |
 *              |   |   |
 *              |   |   |
 *              |   |   |     3
 *              |   |   |   +---+
 *        2     |   |   | 2 |   |
 *      +---+   |   |   +---+   |
 *      |   | 1 |   |   |   |   |
 *      |   +---+   |   |   |   |
 *      |   |   |   |   |   |   |
 *      +---+---+---+---+---+---+
 *
 * Above is a histogram where width of each bar is 1, given height = [2,1,5,6,2,3].
 *
 *
 *                    6
 *                  +---+
 *               5  |   |
 *              +-------|
 *              |-------|
 *              |-------|
 *              |-------|     3
 *              |-------|   +---+
 *        2     |-------| 2 |   |
 *      +---+   |-------|---+   |
 *      |   | 1 |-------|   |   |
 *      |   +---|-------|   |   |
 *      |   |   |-------|   |   |
 *      +---+---+---+---+---+---+
 *
 *
 * The largest rectangle is shown in the shaded area, which has area = 10 unit.
 *
 * For example,
 * Given height = [2,1,5,6,2,3],
 * return 10.
 *
 *
 **********************************************************************************/

/**
 * @param {number[]} heights
 * @return {number}
 */
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

export { largestRectangleArea }
