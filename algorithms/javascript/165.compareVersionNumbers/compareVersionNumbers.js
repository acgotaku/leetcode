// Source : https://leetcode.com/problems/compare-version-numbers/
// Author : acgotaku311
// Date   : 2021-03-08

/** ********************************************************************************
 *
 * Compare two version numbers version1 and version1.
 * If version1 > version2 return 1, if version1 < version2 return -1, otherwise return 0.
 *
 * You may assume that the version strings are non-empty and contain only digits and the . character.
 * The . character does not represent a decimal point and is used to separate number sequences.
 * For instance, 2.5 is not "two and a half" or "half way to version three", it is the fifth second-level revision of the second first-level revision.
 *
 * Here is an example of version numbers ordering:
 * 0.1 < 1.1 < 1.2 < 13.37
 *
 *
 **********************************************************************************/

/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
const compareVersion = function (version1, version2) {
  const nums1 = version1.split('.')
  const nums2 = version2.split('.')
  let i = 0
  for (; i < Math.min(nums1.length, nums2.length); i++) {
    if (Number(nums1[i]) > Number(nums2[i])) {
      return 1
    }
    if (Number(nums1[i]) < Number(nums2[i])) {
      return -1
    }
  }

  if (nums1.length < nums2.length) {
    for (; i < nums2.length; i++) {
      if (Number(nums2[i]) > 0) {
        return -1
      }
    }
  } else {
    for (; i < nums1.length; i++) {
      if (Number(nums1[i]) > 0) {
        return 1
      }
    }
  }

  return 0
}
export { compareVersion }
