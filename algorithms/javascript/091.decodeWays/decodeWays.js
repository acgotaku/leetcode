// Source : https://leetcode.com/problems/decode-ways/
// Author : acgotaku311
// Date   : 2020-09-09

/** ********************************************************************************
*
* A message containing letters from A-Z is being encoded to numbers using the following mapping:
*
* 'A' -> 1
* 'B' -> 2
* ...
* 'Z' -> 26
*
* Given an encoded message containing digits, determine the total number of ways to decode it.
*
* For example,
* Given encoded message "12",
* it could be decoded as "AB" (1 2) or "L" (12).
*
* The number of ways decoding "12" is 2.
*
*
**********************************************************************************/

/**
 * @param {string} s
 * @return {number}
 */
const numDecodings = function (s) {
  const isAlphabet = s => {
    if (s.length === 1) {
      if (s >= '1' && s <= '9') {
        return 1
      } else {
        return 0
      }
    } else {
      if (s[0] === '1' || (s[0] === '2' && s[1] <= '6')) {
        return 1
      } else {
        return 0
      }
    }
  }

  if (s.length <= 0) {
    return 0
  }

  if (s.length <= 1) {
    return isAlphabet(s)
  }

  const dp = new Array(s.length).fill(0)
  dp[0] = isAlphabet(s.substr(0, 1))
  dp[1] = isAlphabet(s.substr(0, 1)) * isAlphabet(s.substr(1, 1)) + isAlphabet(s.substr(0, 2))

  for (let i = 2; i < s.length; i++) {
    if (isAlphabet(s.substr(i, 1))) {
      dp[i] = dp[i - 1]
    }
    if (isAlphabet(s.substr(i - 1, 2))) {
      dp[i] = dp[i - 2] + dp[i]
    }
  }

  return dp[s.length - 1]
}

export { numDecodings }
