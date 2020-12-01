// Source : https://leetcode.com/problems/minimum-moves-to-make-array-complementary/
// Author : acgotaku311
// Date   : 2020-11-30

/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
const minMoves = function (nums, limit) {
  const n = nums.length
  const pairs = n / 2
  let result = n
  const dict = {}
  const min = new Array(pairs).fill(0)
  const max = new Array(pairs).fill(0)

  for (let i = 0; i < n / 2; i++) {
    const left = nums[i]
    const right = nums[n - 1 - i]
    const sum = left + right
    min[i] = Math.min(left, right)
    max[i] = Math.max(left, right)
    if (dict[sum]) {
      dict[sum] += 1
    } else {
      dict[sum] = 1
    }
  }
  min.sort((a, b) => (a - b))
  max.sort((a, b) => (a - b))

  for (let sum = 2; sum <= limit * 2; sum++) {
    const zeroMovePairs = dict[sum] || 0
    let pos = -1
    let low = 0
    let high = min.length - 1
    while (low <= high) {
      const mid = Number.parseInt((low + high) / 2)
      if (min[mid] >= sum) {
        pos = mid
        high = mid - 1
      } else {
        low = mid + 1
      }
    }
    let twoMovePairs = pos === -1 ? 0 : min.length - pos

    low = 0
    high = max.length - 1
    pos = -1
    while (low <= high) {
      const mid = Number.parseInt((low + high) / 2)
      if (max[mid] < sum - limit) {
        pos = mid
        low = mid + 1
      } else {
        high = mid - 1
      }
    }
    twoMovePairs += (pos === -1) ? 0 : pos + 1
    const moves = (twoMovePairs * 2) + (pairs - (twoMovePairs + zeroMovePairs))
    result = Math.min(moves, result)
  }
  return result
}

export { minMoves }
