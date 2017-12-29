// Source : https://leetcode.com/problems/median-of-two-sorted-arrays/description/
// Author : acgotaku311
// Date   : 2017-12-29

/**********************************************************************************
*
* There are two sorted arrays A and B of size m and n respectively.
* Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
*
**********************************************************************************/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = (nums1, nums2) => {
  const findKth = (nums1, s1, nums2, s2, k) => {
    if (s1 >= nums1.length) {
      return nums2[s2 + k - 1]
    }
    if (s2 >= nums2.length) {
      return nums1[s1 + k - 1]
    }
    if (k === 1) {
      return Math.min(nums1[s1], nums2[s2])
    }
    const m1 = s1 + Number.parseInt(k / 2) - 1
    const key1 = m1 < nums1.length ? nums1[m1] : Number.MAX_SAFE_INTEGER
    const m2 = s2 + Number.parseInt(k / 2) - 1
    const key2 = m2 < nums2.length ? nums2[m2] : Number.MAX_SAFE_INTEGER
    if (key1 < key2) {
      return findKth(nums1, m1 + 1, nums2, s2, k - Number.parseInt(k / 2))
    } else {
      return findKth(nums1, s1, nums2, m2 + 1, k - Number.parseInt(k / 2))
    }
  }
  const len = nums1.length + nums2.length
  if (len % 2 === 1) {
    return findKth(nums1, 0, nums2, 0, Number.parseInt(len / 2) + 1)
  } else {
    return (findKth(nums1, 0, nums2, 0, Number.parseInt(len / 2) + 1) + findKth(nums1, 0, nums2, 0, Number.parseInt(len / 2))) / 2
  }
}
export { findMedianSortedArrays }
