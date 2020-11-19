// Source : https://leetcode.com/problems/sell-diminishing-valued-colored-balls/
// Author : acgotaku311
// Date   : 2020-11-19

/**
 * @param {number[]} inventory
 * @param {number} orders
 * @return {number}
 */
const maxProfit = function (inventory, orders) {
  let result = BigInt(0)
  const mod = BigInt(Math.pow(10, 9) + 7)
  orders = BigInt(orders)
  inventory = inventory.sort((a, b) => b - a).map(x => BigInt(x))

  let colors = BigInt(1)
  for (let i = 0; i < inventory.length && orders > 0; i++, ++colors) {
    const current = inventory[i]
    const next = i === inventory.length - 1 ? BigInt(0) : inventory[i + 1]
    const rounds = BigInt(Math.min(Number(orders / colors), Number(current - next)))
    orders -= rounds * colors
    result = (result + (colors * rounds * (current + current - rounds + BigInt(1)) / BigInt(2))) % mod
    if (current - next > rounds) {
      result = (result + orders * (current - rounds)) % mod
      break
    }
  }

  return Number(result % mod)
}

export { maxProfit }
