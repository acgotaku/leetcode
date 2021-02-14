// Source : https://leetcode.com/problems/minimum-limit-of-balls-in-a-bag/
// Author : acgotaku311
// Date   : 2021-02-14

/**
 * @param {number[]} nums
 * @param {number} maxOperations
 * @return {number}
 */
const minimumSize = function (nums, maxOperations) {
  const len = nums.length
  let left = Number.parseInt(nums.reduce((acc, current) => acc + current, 0) / (len + maxOperations)) || 1
  let right = Math.max(...nums)
  while (left < right) {
    const mid = Number.parseInt((left + right) / 2)
    let count = 0
    for (let i = 0; i < len; i++) {
      count += Number.parseInt((nums[i] - 1) / mid)
    }
    if (count > maxOperations) {
      left = mid + 1
    } else {
      right = mid
    }
  }
  return left
}
export { minimumSize }
