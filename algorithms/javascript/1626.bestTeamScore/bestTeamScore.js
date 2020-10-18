// Source : https://leetcode.com/problems/best-team-with-no-conflicts/
// Author : acgotaku311
// Date   : 2020-10-18

/**
 * @param {number[]} scores
 * @param {number[]} ages
 * @return {number}
 */
const bestTeamScore = function (scores, ages) {
  const len = scores.length
  const dp = new Array(len + 1).fill(0)
  let result = 0

  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (ages[j] < ages[j + 1]) {
        const age = ages[j]
        ages[j] = ages[j + 1]
        ages[j + 1] = age

        const score = scores[j]
        scores[j] = scores[j + 1]
        scores[j + 1] = score
      }
      if (ages[j] === ages[j + 1]) {
        if (scores[j] < scores[j + 1]) {
          const score = scores[j]
          scores[j] = scores[j + 1]
          scores[j + 1] = score
        }
      }
    }
  }
  for (let i = 0; i < len; i++) {
    const score = scores[i]
    dp[i] = score

    for (let j = 0; j < i; j++) {
      if (scores[j] >= scores[i]) {
        dp[i] = Math.max(dp[i], dp[j] + score)
      }
    }

    result = Math.max(result, dp[i])
  }
  return result
}

export { bestTeamScore }
