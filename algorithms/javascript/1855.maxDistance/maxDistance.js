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

  let i = 0

  for (let j = 0; j < len2; j++) {
    while (i < len1 && nums1[i] > nums2[j]) {
      i++
    }
    if (i < len1) {
      maxDis = Math.max(maxDis, j - i)
    }
  }
  return maxDis
}
export { maxDistance }
