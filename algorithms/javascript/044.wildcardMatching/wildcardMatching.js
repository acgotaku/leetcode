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
  const m = s.length
  const n = p.length
  const dp = new Array(m + 1).fill(false).map(() => new Array(n + 1).fill(false))
  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      if (i === 0 && j === 0) {
        dp[i][j] = true
        continue
      }
      if (j === 0) {
        dp[i][j] = false
        continue
      }
      if (p[j - 1] !== '*') {
        if (i > 0 && (p[j - 1] === '?' || p[j - 1] === s[i - 1])) {
          dp[i][j] = dp[i - 1][j - 1]
        }
      } else {
        dp[i][j] = dp[i][j] || dp[i][j - 1]

        if (i > 0) {
          dp[i][j] = dp[i][j] || dp[i - 1][j]
        }
      }
    }
  }

  return dp[m][n]
}

export { isMatch }
