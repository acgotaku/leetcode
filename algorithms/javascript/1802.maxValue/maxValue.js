// Source : https://leetcode.com/problems/maximum-value-at-a-given-index-in-a-bounded-array/
// Author : acgotaku311
// Date   : 2021-03-21

/**
 * @param {number} n
 * @param {number} index
 * @param {number} maxSum
 * @return {number}
 */
const maxValue = function (n, index, maxSum) {
  let start = Number.parseInt(maxSum / n)
  let end = maxSum - n
  const getListSum = (last, count) => count * last - (count * (count - 1)) / 2
  const getSum = (target) => {
    const rest = n - index - 1
    let left = 0
    if (target > index) {
      left = getListSum(target, index + 1)
    } else {
      left = getListSum(target, target) + index + 1 - target
    }
    let right = 0
    if (target > rest) {
      right = getListSum(target - 1, rest)
    } else {
      right = getListSum(target - 1, target - 1) + rest - target + 1
    }

    return left + right
  }

  while (start < end) {
    const mid = Number.parseInt((start + end) / 2)
    const sum = getSum(mid)
    if (sum > maxSum) {
      end = mid - 1
    } else {
      start = mid + 1
    }
  }

  while (getSum(start) > maxSum) {
    start--
  }

  return start
}
export { maxValue }
