// Source : https://leetcode.com/problems/regular-expression-matching/description/
// Author : acgotaku311
// Date   : 2018-01-14

/**********************************************************************************
*
* Implement regular expression matching with support for '.' and '*'.
*
* '.' Matches any single character.
* '*' Matches zero or more of the preceding element.
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
* isMatch("aa", "a*") → true
* isMatch("aa", ".*") → true
* isMatch("ab", ".*") → true
* isMatch("aab", "c*a*b") → true
*
*
**********************************************************************************/

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
const isMatch = function (s, p) {
  const FRONT = -1
  const loop = (s, i, p, j) => {
    if (j === FRONT) {
      if (i === FRONT) {
        return true
      } else {
        return false
      }
    }

    if (p[j] === '*') {
      if (i > FRONT && (p[j - 1] === '.' || p[j - 1] === s[i])) {
        if (loop(s, i - 1, p, j)) {
          return true
        }
      }
      return loop(s, i, p, j - 2)
    }

    if (p[j] === '.' || p[j] === s[i]) {
      return loop(s, i - 1, p, j - 1)
    }

    return false
  }

  return loop(s, s.length - 1, p, p.length - 1)
}

export { isMatch }
