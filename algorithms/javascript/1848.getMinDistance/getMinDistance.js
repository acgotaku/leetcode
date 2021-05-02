// Source : https://leetcode.com/problems/minimum-distance-to-the-target-element/
// Author : acgotaku311
// Date   : 2021-05-02

/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
const getMinDistance = function (nums, target, start) {
  const len = nums.length
  let minDistance = Number.MAX_VALUE
  let l = start
  while (l >= 0) {
    if (nums[l] === target) {
      const distance = Math.abs(l - start)
      minDistance = Math.min(minDistance, distance)
      break
    } else {
      l--
    }
  }
  let r = start
  while (r < len) {
    if (nums[r] === target) {
      const distance = Math.abs(r - start)
      minDistance = Math.min(minDistance, distance)
      break
    } else {
      r++
    }
  }
  return minDistance
}
export { getMinDistance }
