// Source : https://leetcode.com/problems/arithmetic-subarrays/
// Author : acgotaku311
// Date   : 2020-10-25

/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function (nums, l, r) {
  const len = l.length
  const result = []

  const checkArithmetic = (arr) => {
    const gap = arr[1] - arr[0]
    for (let i = 1; i < arr.length - 1; i++) {
      if (arr[i + 1] - arr[i] !== gap) {
        return false
      }
    }
    return true
  }
  for (let i = 0; i < len; i++) {
    const left = l[i]
    const right = r[i]
    const arr = nums.slice(left, right + 1).sort((a, b) => a - b)
    result.push(checkArithmetic(arr))
  }
  return result
}

export { checkArithmeticSubarrays }
