// Source : https://leetcode.com/contest/weekly-contest-230/problems/closest-dessert-cost/
// Author : acgotaku311
// Date   : 2021-02-28

/**
 * @param {number[]} baseCosts
 * @param {number[]} toppingCosts
 * @param {number} target
 * @return {number}
 */
const closestCost = function (baseCosts, toppingCosts, target) {
  let result = Number.MAX_SAFE_INTEGER

  const calcCost = (index, sum) => {
    if (index > toppingCosts.length) {
      return
    }
    if (Math.abs(target - sum) < Math.abs(target - result)) {
      result = sum
    }

    calcCost(index + 1, sum)
    calcCost(index + 1, sum + toppingCosts[index])
    calcCost(index + 1, sum + toppingCosts[index] * 2)
  }
  for (let i = 0; i < baseCosts.length; i++) {
    const base = baseCosts[i]
    calcCost(0, base)
  }

  return result
}
export { closestCost }
