// Source : https://leetcode.com/problems/interleaving-string/
// Author : acgotaku311
// Date   : 2020-09-17

/** ********************************************************************************
*
* Given s1, s2, s3, find whether s3 is formed by the interleaving of s1 and s2.
*
* For example,
* Given:
* s1 = "aabcc",
* s2 = "dbbca",
*
* When s3 = "aadbbcbcac", return true.
* When s3 = "aadbbbaccc", return false.
*
*
**********************************************************************************/

/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
const isInterleave = function (s1, s2, s3) {
  const len1 = s1.length
  const len2 = s2.length
  const len3 = s3.length
  const loop = (index1, index2, index3) => {
    if (s1[index1] === s3[index3]) {
      if (index3 === len3 - 1) {
        return true
      }
      if (loop(index1 + 1, index2, index3 + 1)) {
        return true
      }
    }

    if (s2[index2] === s3[index3]) {
      if (index3 === len3 - 1) {
        return true
      }
      if (loop(index1, index2 + 1, index3 + 1)) {
        return true
      }
    }
    return false
  }

  if (len3 !== len1 + len2) {
    return false
  }
  if (len1 === 0 && len2 === 0 && len3 === 0) {
    return true
  }
  return loop(0, 0, 0)
}

const isInterleaveDP = function (s1, s2, s3) {
  const len1 = s1.length
  const len2 = s2.length
  const len3 = s3.length

  if (len3 !== len1 + len2) {
    return false
  }

  const dp = []
  for (let i = 0; i < len1 + 1; i++) {
    dp.push(new Array(len2 + 1).fill(false))
  }

  dp[0][0] = true

  for (let i = 1; i <= len1; i++) {
    if (s1[i - 1] === s3[i - 1]) {
      dp[i][0] = true
    } else {
      break
    }
  }

  for (let j = 1; j <= len2; j++) {
    if (s2[j - 1] === s3[j - 1]) {
      dp[0][j] = true
    } else {
      break
    }
  }

  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      if (s1[i - 1] === s3[i + j - 1]) {
        dp[i][j] = dp[i - 1][j] || dp[i][j]
      }

      if (s2[j - 1] === s3[i + j - 1]) {
        dp[i][j] = dp[i][j - 1] || dp[i][j]
      }
    }
  }

  return dp[len1][len2]
}
export { isInterleave, isInterleaveDP }
