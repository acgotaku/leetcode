// Source : https://leetcode.com/problems/minimum-elements-to-add-to-form-a-given-sum/
// Author : acgotaku311
// Date   : 2021-03-07

/**
 * @param {number[]} nums
 * @param {number} limit
 * @param {number} goal
 * @return {number}
 */
const minElements = function (nums, limit, goal) {
  const sum = nums.reduce((acc, current) => acc + current, 0)
  const gap = Math.abs(goal - sum)
  const mod = gap % limit
  const count = Number.parseInt(gap / limit)
  if (mod) {
    return count + 1
  } else {
    return count
  }
}
export { minElements }
