// Source : https://leetcode.com/problems/house-robber-ii/
// Author : acgotaku311
// Date   : 2021-04-29

/** ********************************************************************************
 *
 * Note: This is an extension of House Robber.
 *
 * After robbing those houses on that street, the thief has found himself a new place
 * for his thievery so that he will not get too much attention. This time, all houses
 * at this place are arranged in a circle. That means the first house is the neighbor
 * of the last one. Meanwhile, the security system for these houses remain the same as
 * for those in the previous street.
 *
 * Given a list of non-negative integers representing the amount of money of each house,
 * determine the maximum amount of money you can rob tonight without alerting the police.
 *
 *
 **********************************************************************************/

const lineRob = function (nums) {
  const len = nums.length
  if (len < 2) {
    return nums[0]
  }
  const dp = new Array(len + 1).fill(0)
  dp[1] = nums[0]
  for (let i = 2; i <= len; i++) {
    dp[i] = Math.max(dp[i - 1], nums[i - 1] + dp[i - 2])
  }
  return dp[len]
}

/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = function (nums) {
  const len = nums.length
  if (len < 2) {
    return nums[0]
  }
  const rob1 = nums.slice(1)
  const rob2 = nums.slice(0, len - 1)
  return Math.max(lineRob(rob1), lineRob(rob2))
}

export { rob }
