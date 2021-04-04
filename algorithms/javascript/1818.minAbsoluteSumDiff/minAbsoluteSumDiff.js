// Source : https://leetcode.com/problems/minimum-absolute-sum-difference/
// Author : acgotaku311
// Date   : 2021-04-04

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const minAbsoluteSumDiff = function (nums1, nums2) {
  const mod = Math.pow(10, 9) + 7
  let sum = 0
  const len = nums1.length
  const gapArray = new Array(len).fill(0)
  let max = [0, 0]
  let minGap = Number.MAX_VALUE
  for (let i = 0; i < len; i++) {
    const gap = Math.abs(nums1[i] - nums2[i]) % mod
    if (gap > max[1]) {
      max = [i, gap]
    }
    gapArray[i] = gap
  }

  if (max[1] > 0) {
    const sub = nums2[max[0]]
    for (let i = 0; i < len; i++) {
      const gap = Math.abs(nums1[i] - sub) % mod
      if (gap < minGap) {
        minGap = gap
      }
    }
    gapArray[max[0]] = minGap
  }

  gapArray.forEach(gap => {
    sum = (sum + gap) % mod
  })
  return sum
}
export { minAbsoluteSumDiff }
