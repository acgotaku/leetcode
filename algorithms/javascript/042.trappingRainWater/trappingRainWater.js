// Source : https://leetcode.com/problems/trapping-rain-water/description/
// Author : acgotaku311
// Date   : 2017-12-16

/**********************************************************************************
*
* Given n non-negative integers representing an elevation map where the width of each bar is 1,
* compute how much water it is able to trap after raining.
*
* For example,
* Given [0,1,0,2,1,0,1,3,2,1,2,1], return 6.
*
*     ^
*     |
*   3 |                       +--+
*     |                       |  |
*   2 |          +--+xxxxxxxxx|  +--+xx+--+
*     |          |  |xxxxxxxxx|  |  |xx|  |
*   1 |   +--+xxx|  +--+xxx+--+  |  +--+  +--+
*     |   |  |xxx|  |  |xxx|  |  |  |  |  |  |
*   0 +---+--+---+--+--+---+--+--+--+--+--+--+----->
*       0  1   0  2  1   0  1  3  2  1  2  1
*
* The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case,
* 6 units of rain water (blue section) are being trapped. Thanks Marcos for contributing this image!
*
**********************************************************************************/

/**
 * @param {number[]} height
 * @return {number}
 */
const trap = (height) => {
  const len = height.length
  let result = 0
  let maxHeight = 0
  let maxIndex = 0
  for (let i = 0; i < len; i++) {
    if (height[i] > maxHeight) {
      maxHeight = height[i]
      maxIndex = i
    }
  }
  let secondHeight = 0
  for (let i = 0; i < maxIndex; i++) {
    if (height[i] > secondHeight) {
      secondHeight = height[i]
    } else {
      result = result + secondHeight - height[i]
    }
  }
  secondHeight = 0
  for (let i = len - 1; i > maxIndex; i--) {
    if (height[i] > secondHeight) {
      secondHeight = height[i]
    } else {
      result = result + secondHeight - height[i]
    }
  }
  return result
}

export { trap }
