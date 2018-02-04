// Source : https://leetcode.com/problems/wildcard-matching/description/
// Author : acgotaku311
// Date   : 2018-02-04

/**********************************************************************************
*
* Implement wildcard pattern matching with support for '?' and '*'.
*
* '?' Matches any single character.
* '*' Matches any sequence of characters (including the empty sequence).
*
* The matching should cover the entire input string (not partial).
*
* The function prototype should be:
* bool isMatch(const char *s, const char *p)
*
* Some examples:
* isMatch("aa","a") → false
* isMatch("aa","aa") → true
* isMatch("aaa","aa") → false
* isMatch("aa", "*") → true
* isMatch("aa", "a*") → true
* isMatch("ab", "?*") → true
* isMatch("aab", "c*a*b") → false
*
*
**********************************************************************************/

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
const isMatch = function (s, p) {
  const sLen = s.length
  const pLen = p.length
  let i = 0
  let j = 0
  let startIndex = -1
  let match = 0
  while (i < sLen) {
    if (p[j] === '*') {
      startIndex = ++j
      match = i
    } else if (p[j] === '?' || s[i] === p[j]) {
      i++
      j++
    } else if (startIndex !== -1) {
      j = startIndex
      i = ++match
    } else {
      return false
    }
  }
  while (j < pLen && p[j] === '*') {
    j++
  }

  return j === pLen
}

export { isMatch }
