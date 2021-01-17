// Source : https://leetcode.com/problems/tuple-with-same-product/
// Author : acgotaku311
// Date   : 2021-02-17

/**
 * @param {number[]} nums
 * @return {number}
 */
const tupleSameProduct = function (nums) {
  let count = 0
  const len = nums.length
  const dict = {}
  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      const res = nums[i] * nums[j]
      if (dict[res]) {
        dict[res]++
      } else {
        dict[res] = 1
      }
      count += 8 * (dict[res] - 1)
    }
  }

  return count
}

export { tupleSameProduct }
