// Source : https://leetcode.com/problems/ways-to-split-array-into-three-subarrays/
// Author : acgotaku311
// Date   : 2021-02-06

/**
 * @param {number[]} nums
 * @return {number}
 */
const waysToSplit = function (nums) {
  let count = 0
  const mod = Math.pow(10, 9) + 7
  const len = nums.length
  const sums = [...nums]

  for (let i = 1; i < len; i++) {
    sums[i] += sums[i - 1]
  }

  const findMid = (sums, leftSum, index, searchLeft) => {
    let left = index
    let right = len - 2
    let point = -1
    while (left <= right) {
      const mid = Number.parseInt((left + right) / 2)
      const midSum = sums[mid] - sums[index - 1]
      const rightSum = sums[len - 1] - sums[mid]
      if (leftSum <= midSum && midSum <= rightSum) {
        point = mid
        if (searchLeft) {
          right = mid - 1
        } else {
          left = mid + 1
        }
      } else if (leftSum > midSum) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }
    return point
  }

  for (let i = 1; i < len - 1; i++) {
    if (sums[i - 1] > sums[len - 1] - sums[i - 1]) {
      break
    }
    const left = findMid(sums, sums[i - 1], i, true)
    const right = findMid(sums, sums[i - 1], i, false)
    if (left === -1 || right === -1) {
      continue
    }
    count = (count + ((right - left + 1) % mod)) % mod
  }

  return count
}

export { waysToSplit }
