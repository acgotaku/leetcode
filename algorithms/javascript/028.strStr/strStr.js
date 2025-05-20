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
    if (haystack.length - i < needle.length) {
      return -1
    }
    if (haystack[i] === needle[0]) {
      let j = 1
      while (j < needle.length && haystack[i + j] === needle[j]) {
        j++
      }
      if (j === needle.length) {
        return i
      }
    }
  }

  return -1
}

export { strStr }
