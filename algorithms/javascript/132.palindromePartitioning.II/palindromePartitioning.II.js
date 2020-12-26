// Source : https://leetcode.com/problems/palindrome-partitioning-ii/
// Author : acgotaku311
// Date   : 2020-12-25

/** ********************************************************************************
*
* Given a string s, partition s such that every substring of the partition is a palindrome.
*
* Return the minimum cuts needed for a palindrome partitioning of s.
*
* For example, given s = "aab",
* Return 1 since the palindrome partitioning ["aa","b"] could be produced using 1 cut.
*
*
**********************************************************************************/

/**
 * @param {string} s
 * @return {number}
 */
const minCut = function (s) {
  const len = s.length
  const dp = new Array(len).fill(0)
  const table = []
  for (let i = 0; i < len; i++) {
    table.push(new Array(len).fill(false))
  }

  for (let i = len - 1; i >= 0; i--) {
    for (let j = i; j < len; j++) {
      if (s[i] === s[j] && (j - i < 2 || table[i + 1][j - 1])) {
        table[i][j] = true
      }
    }
  }

  for (let i = 0; i < len; i++) {
    if (table[0][i]) {
      dp[i] = 0
    } else {
      let size = len
      for (let j = 0; j < i; j++) {
        if (table[j + 1][i] && size > dp[j] + 1) {
          size = dp[j] + 1
        }
      }
      dp[i] = size
    }
  }
  return dp[len - 1]
}

export { minCut }
