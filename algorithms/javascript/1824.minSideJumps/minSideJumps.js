// Source : https://leetcode.com/problems/minimum-sideway-jumps/
// Author : acgotaku311
// Date   : 2021-04-11

/**
 * @param {number[]} obstacles
 * @return {number}
 */
const minSideJumps = function (obstacles) {
  const row = 4
  const col = obstacles.length
  const dp = new Array(row).fill(col).map(() => new Array(col).fill(col))
  for (let i = 0; i < obstacles.length; i++) {
    const obstacle = obstacles[i]
    dp[obstacle][i] = Number.MAX_VALUE
  }

  for (let i = 0; i < col; i++) {
    for (let j = 1; j < row; j++) {
      if (i === 0) {
        if (j === 1) {
          dp[j][i] = 1
        } else if (j === 2) {
          dp[j][i] = 0
        } else if (j === 3) {
          dp[j][i] = 1
        }
      } else {
        if (dp[j][i] === Number.MAX_VALUE) {
          continue
        }
        if (j === 1) {
          dp[j][i] = Math.min(dp[j][i], dp[j + 1][i] + 1, dp[j + 2][i] + 1)
        }
        if (j === 2) {
          dp[j][i] = Math.min(dp[j][i], dp[j - 1][i] + 1, dp[j + 1][i] + 1)
        }
        if (j === 3) {
          dp[j][i] = Math.min(dp[j][i], dp[j - 1][i] + 1, dp[j - 2][i] + 1)
        }
      }
      if (i < col - 1) {
        if (dp[j][i + 1] !== Number.MAX_VALUE) {
          dp[j][i + 1] = dp[j][i]
        }
      }
    }
  }
  return Math.min(dp[1][col - 1], dp[2][col - 1], dp[3][col - 1])
}
export { minSideJumps }
