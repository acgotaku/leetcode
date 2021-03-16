// Source : https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/
// Author : acgotaku311
// Date   : 2021-03-16

/** ***************************************************************************************************
 *
 * Say you have an array for which the ith element is the price of a given stock on day i.
 *
 * Design an algorithm to find the maximum profit. You may complete at most k transactions.
 *
 * Note:
 * You may not engage in multiple transactions at the same time (ie, you must sell the stock before
 * you buy again).
 *
 * Example 1:
 *
 * Input: [2,4,1], k = 2
 * Output: 2
 * Explanation: Buy on day 1 (price = 2) and sell on day 2 (price = 4), profit = 4-2 = 2.
 *
 * Example 2:
 *
 * Input: [3,2,6,5,0,3], k = 2
 * Output: 7
 * Explanation: Buy on day 2 (price = 2) and sell on day 3 (price = 6), profit = 6-2 = 4.
 *              Then buy on day 5 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.
 ******************************************************************************************************/

/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (k, prices) {
  if (!prices.length) {
    return 0
  }
  const len = prices.length
  k = Math.min(k, Math.floor(len / 2))
  const buy = new Array(len).fill(0).map(() => new Array(k + 1).fill(0))
  const sell = new Array(len).fill(0).map(() => new Array(k + 1).fill(0))
  buy[0][0] = -prices[0]
  sell[0][0] = 0
  for (let i = 1; i <= k; i++) {
    buy[0][i] = -Number.MAX_VALUE
    sell[0][i] = -Number.MAX_VALUE
  }

  for (let i = 1; i < len; i++) {
    buy[i][0] = Math.max(buy[i - 1][0], sell[i - 1][0] - prices[i])
    for (let j = 1; j <= k; j++) {
      buy[i][j] = Math.max(buy[i - 1][j], sell[i - 1][j] - prices[i])
      sell[i][j] = Math.max(sell[i - 1][j], buy[i - 1][j - 1] + prices[i])
    }
  }

  return Math.max(...sell[len - 1])
}
export { maxProfit }
