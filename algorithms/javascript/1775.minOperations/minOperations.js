// Source : https://leetcode.com/problems/equal-sum-arrays-with-minimum-number-of-operations/
// Author : acgotaku311
// Date   : 2021-02-28

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const minOperations = function (nums1, nums2) {
  const len1 = nums1.length
  const len2 = nums2.length
  let count = 0
  const sumNums1 = nums1.reduce((acc, current) => acc + current, 0)

  const sumNums2 = nums2.reduce((acc, current) => acc + current, 0)

  if (len1 * 6 < len2 || len2 * 6 < len1) {
    return -1
  }

  if (sumNums1 < sumNums2) {
    return minOperations(nums2, nums1)
  }
  nums1 = nums1.sort((a, b) => a - b)
  nums2 = nums2.sort((a, b) => a - b)

  let diff = sumNums1 - sumNums2
  let start = 0
  let end = len1 - 1
  while (diff > 0) {
    if (end < 0 || 6 - nums2[start] > nums1[end] - 1) {
      diff -= 6 - nums2[start++]
    } else {
      diff -= nums1[end--] - 1
    }
    count++
  }
  return count
}
export { minOperations }
