// Source : https://leetcode.com/problems/implement-strstr/description/
// Author : acgotaku311
// Date   : 2018-01-31

/**********************************************************************************
*
* Implement strStr().
*
* Returns a pointer to the first occurrence of needle in haystack, or null if needle is not part of haystack.
*
*
**********************************************************************************/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function (haystack, needle) {
  if (needle.length === 0) {
    return 0
  }

  if (haystack.length < needle.length) {
    return -1
  }
  for (let i = 0; i < haystack.length; i++) {
    if (haystack.substr(i, needle.length) === needle) {
      return i
    }
  }

  return -1
}

export { strStr }
