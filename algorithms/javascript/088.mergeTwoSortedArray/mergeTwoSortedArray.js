// Source : https://leetcode.com/problems/merge-sorted-array/
// Author : acgotaku311
// Date   : 2020-09-08

/** ********************************************************************************
*
* Given two sorted integer arrays A and B, merge B into A as one sorted array.
*
* Note:
*   You may assume that A has enough space (size that is greater or equal to m + n)
*   to hold additional elements from B. The number of elements initialized in A and B
*   are m and n respectively.
*
**********************************************************************************/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function (nums1, m, nums2, n) {
  let i = m - 1
  let j = n - 1
  let k = m + n - 1
  for (;i >= 0 && j >= 0; k--) {
    if (nums1[i] < nums2[j]) {
      nums1[k] = nums2[j]
      j--
    } else {
      nums1[k] = nums1[i]
      i--
    }
  }

  for (;j >= 0; k--) {
    nums1[k] = nums2[j]
    j--
  }
}
export { merge }
