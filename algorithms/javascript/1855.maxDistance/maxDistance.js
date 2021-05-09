// Source : https://leetcode.com/problems/maximum-distance-between-a-pair-of-values/
// Author : acgotaku311
// Date   : 2021-05-09

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const maxDistance = function (nums1, nums2) {
  let maxDis = 0
  const len1 = nums1.length
  const len2 = nums2.length

  const findDistance = (i, j) => {
    if (nums1[i] <= nums2[j] && i <= j) {
      maxDis = Math.max(maxDis, j - i)
    }
    if (i < j) {
      if (i < len1 - 1) {
        findDistance(i + 1, j)
      }
      if (j > 0) {
        findDistance(i, j - 1)
      }
    }
  }
  findDistance(0, len2 - 1)
  return maxDis
}
export { maxDistance }
