// Source : https://leetcode.com/problems/stone-game-vii/
// Author : acgotaku311
// Date   : 2020-12-13

/**
 * @param {number[]} stones
 * @return {number}
 */
const stoneGameVII = function (stones) {
  const len = stones.length
  const psum = new Array(len + 1).fill(0)
  for (let i = 1; i <= stones.length; i++) {
    psum[i] = psum[i - 1] + stones[i - 1]
  }
  const dp = []
  for (let i = 0; i < len; i++) {
    dp.push(new Array(len).fill(0))
  }
  const getScore = (i, j) => {
    return psum[j + 1] - psum[i]
  }
  for (let i = len - 2; i >= 0; i--) {
    for (let j = i + 1; j < len; j++) {
      dp[i][j] = Math.max(getScore(i + 1, j) - dp[i + 1][j], getScore(i, j - 1) - dp[i][j - 1])
    }
  }
  return dp[0][len - 1]
}

export { stoneGameVII }
