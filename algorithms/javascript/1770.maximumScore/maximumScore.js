// Source : https://leetcode.com/problems/maximum-score-from-performing-multiplication-operations/
// Author : acgotaku311
// Date   : 2021-02-21

/**
 * @param {number[]} nums
 * @param {number[]} multipliers
 * @return {number}
 */
const maximumScore = function (nums, multipliers) {
  const n = nums.length
  const m = multipliers.length
  const dp = []
  for (let i = 0; i < m; i++) {
    dp.push(new Array(m).fill(null))
  }

  const dfs = (left, index) => {
    if (index === m) {
      return 0
    }
    if (dp[left][index] === null) {
      const pickLeft = dfs(left + 1, index + 1) + nums[left] * multipliers[index]
      const pickRight = dfs(left, index + 1) + nums[n - (index - left) - 1] * multipliers[index]
      dp[left][index] = Math.max(pickLeft, pickRight)
    }
    return dp[left][index]
  }
  return dfs(0, 0)
}
export { maximumScore }
