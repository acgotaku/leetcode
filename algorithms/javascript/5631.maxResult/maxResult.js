// Source : https://leetcode.com/problems/jump-game-vi/
// Author : acgotaku311
// Date   : 2020-12-20

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maxResult = function (nums, k) {
  const dp = new Array(nums.length).fill(0)
  const queue = []
  dp[0] = nums[0]
  for (let i = 1; i < nums.length; i++) {
    while (queue.length >= k) {
      queue.shift()
    }
    while (queue.length > 0 && dp[queue[0]] < dp[i - 1]) {
      queue.shift()
    }
    queue.push(i - 1)
    dp[i] = nums[i] + dp[queue[0]]
  }
  return dp[nums.length - 1]
}

export { maxResult }
