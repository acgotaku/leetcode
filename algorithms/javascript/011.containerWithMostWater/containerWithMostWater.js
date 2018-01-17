// Source : https://leetcode.com/problems/container-with-most-water/description/
// Author : acgotaku311
// Date   : 2018-01-17

/**********************************************************************************
*
* Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai).
* n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0).
*
* Find two lines, which together with x-axis forms a container, such that the container contains the most water.
*
* Note: You may not slant the container.
*
*
**********************************************************************************/

/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = (height) => {
  const len = height.length
  let left = 0
  let right = len - 1
  let result = 0
  while (left < right) {
    const max = (right - left) * (height[left] < height[right] ? height[left] : height[right])
    if (max > result) {
      result = max
    }

    if (height[left] < height[right]) {
      do {
        left++
      } while (left < right && height[left - 1] >= height[left])
    } else {
      do {
        right--
      } while (right > left && height[right + 1] >= height[right])
    }
  }
  return result
}

export { maxArea }
