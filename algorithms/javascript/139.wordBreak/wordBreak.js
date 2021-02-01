// Source : https://leetcode.com/problems/word-break/
// Author : acgotaku311
// Date   : 2021-02-01

/** ********************************************************************************
*
* Given a string s and a dictionary of words dict, determine if s can be segmented
* into a space-separated sequence of one or more dictionary words.
*
* For example, given
* s = "leetcode",
* dict = ["leet", "code"].
*
* Return true because "leetcode" can be segmented as "leet code".
*
*
**********************************************************************************/

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
const wordBreak = function (s, wordDict) {
  const len = s.length
  const dp = new Array(len + 1).fill(false)
  dp[0] = true
  for (let i = 1; i <= len; i++) {
    for (let j = 0; j < wordDict.length; j++) {
      const word = wordDict[j]
      const m = word.length
      if (i >= m && dp[i - m] && s.substr(i - m, m) === word) {
        dp[i] = true
        break
      }
    }
  }
  return dp[len]
}
export { wordBreak }
