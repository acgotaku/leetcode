// Source : https://leetcode.com/problems/maximum-subarray-min-product/
// Author : acgotaku311
// Date   : 2021-05-09

/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSumMinProduct = function (nums) {
  const len = nums.length
  let best = BigInt(0)
  const mod = BigInt(1000000007)
  const left = new Array(len).fill(0)
  const right = new Array(len).fill(len - 1)
  let stack = []
  for (let i = 0; i < len; i++) {
    while (stack.length > 0 && nums[i] < nums[stack[stack.length - 1]]) {
      right[stack.pop()] = i - 1
    }
    stack.push(i)
  }
  stack = []
  for (let i = len - 1; i >= 0; i--) {
    while (stack.length > 0 && nums[i] < nums[stack[stack.length - 1]]) {
      left[stack.pop()] = i + 1
    }
    stack.push(i)
  }

  const sum = new Array(len + 1).fill(BigInt(0))
  for (let i = 1; i <= len; i++) {
    sum[i] = sum[i - 1] + BigInt(nums[i - 1])
  }

  for (let i = 0; i < len; i++) {
    const res = ((sum[right[i] + 1] - sum[left[i]]) * BigInt(nums[i]))
    if (res > best) {
      best = res
    }
  }
  return Number(best % mod)
}
export { maxSumMinProduct }
