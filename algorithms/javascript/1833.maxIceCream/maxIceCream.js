// Source : https://leetcode.com/problems/maximum-ice-cream-bars/
// Author : acgotaku311
// Date   : 2021-04-19

/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
const maxIceCream = function (costs, coins) {
  costs = costs.sort((a, b) => { return a - b })
  let count = 0
  while (coins > 0 && costs.length > 0) {
    const cost = costs.shift()
    if (coins >= cost) {
      count++
      coins = coins - cost
    } else {
      return count
    }
  }
  return count
}
export { maxIceCream }
