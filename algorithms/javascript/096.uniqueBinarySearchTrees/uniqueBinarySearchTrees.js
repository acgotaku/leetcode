// Source : https://leetcode.com/problems/unique-binary-search-trees/
// Author : acgotaku311
// Date   : 2020-09-17

/** ********************************************************************************
*
* Given n, how many structurally unique BST's (binary search trees) that store values 1...n?
*
* For example,
* Given n = 3, there are a total of 5 unique BST's.
*
*    1         3     3      2      1
*     \       /     /      / \      \
*      3     2     1      1   3      2
*
*
**********************************************************************************/

/**
 * @param {number} n
 * @return {number}
 */
const numTrees = function (n) {
  const dp = new Array(n + 1).fill(0)
  dp[0] = dp[1] = 1
  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      dp[i] += dp[j - 1] * dp[i - j]
    }
  }
  return dp[n]
}
export { numTrees }
