// Source : https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/
// Author : acgotaku311
// Date   : 2020-10-25

/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
const minOperations = function (nums, x) {
  const MIN_INT = -Math.pow(2, 31)
  let target = -x
  let result = MIN_INT
  let sum = 0
  const dict = {
    0: -1
  }
  nums.forEach(num => {
    target += num
  })
  if (target === 0) {
    return nums.length
  }
  for (let i = 0; i < nums.length; ++i) {
    sum += nums[i]
    if (dict[sum - target] !== undefined) {
      result = Math.max(result, i - dict[sum - target])
    }
    dict[sum] = i
  }
  if (result > MIN_INT) {
    return nums.length - result
  } else {
    return -1
  }
}

export { minOperations }
