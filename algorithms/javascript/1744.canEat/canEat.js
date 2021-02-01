// Source : https://leetcode.com/problems/can-you-eat-your-favorite-candy-on-your-favorite-day/
// Author : acgotaku311
// Date   : 2021-02-01

/**
 * @param {number[]} candiesCount
 * @param {number[][]} queries
 * @return {boolean[]}
 */
const canEat = function (candiesCount, queries) {
  const len = candiesCount.length
  const res = []
  const sum = new Array(len).fill(0)
  for (let i = 0; i < len; i++) {
    sum[i] = candiesCount[i]
    if (i > 0) {
      sum[i] += sum[i - 1]
    }
  }
  for (let i = 0; i < queries.length; i++) {
    const query = queries[i]
    const favoriteType = query[0]
    const favoriteDay = query[1]
    const dailyCap = query[2]
    const beforeSum = favoriteType > 0 ? sum[favoriteType - 1] : 0
    const minCandy = favoriteDay + 1
    const maxCandy = dailyCap * (favoriteDay + 1)
    if (minCandy > sum[favoriteType]) {
      res.push(false)
    } else if (beforeSum >= maxCandy) {
      res.push(false)
    } else {
      res.push(true)
    }
  }
  return res
}
export { canEat }
