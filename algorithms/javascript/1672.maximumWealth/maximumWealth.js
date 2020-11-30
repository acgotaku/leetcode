// Source : https://leetcode.com/problems/richest-customer-wealth/
// Author : acgotaku311
// Date   : 2020-11-30

/**
 * @param {number[][]} accounts
 * @return {number}
 */
const maximumWealth = function (accounts) {
  const wealth = accounts.map(account => {
    return account.reduce((acc, current) => acc + current, 0)
  })
  return wealth.sort((a, b) => a - b).pop()
}
export { maximumWealth }
