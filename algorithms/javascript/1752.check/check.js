// Source : https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/
// Author : acgotaku311
// Date   : 2021-02-07

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const check = function (nums) {
  const len = nums.length
  let index = 0
  for (let i = 0; i < len - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      index = i + 1
      break
    }
  }
  if (index === 0) {
    return true
  }

  for (let i = index; i < index + len - 1; i++) {
    const flag = i % len
    const next = (i + 1) % len
    if (nums[flag] > nums[next]) {
      return false
    }
  }

  return true
}

export { check }
