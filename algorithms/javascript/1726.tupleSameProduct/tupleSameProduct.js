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
  const factorial = (n) => {
    let val = 1
    for (let i = 2; i <= n; i++) { val = val * i }
    return val
  }
  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      const res = nums[i] * nums[j]
      if (dict[res]) {
        dict[res].push([nums[i], nums[j]])
      } else {
        dict[res] = [[nums[i], nums[j]]]
      }
    }
  }

  for (const key in dict) {
    const arr = dict[key]
    if (arr.length > 1) {
      const len = arr.length
      count += (factorial(len) / (2 * factorial(len - 2)) * 8)
    }
  }
  return count
}

export { tupleSameProduct }
