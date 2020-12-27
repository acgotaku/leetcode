// Source : https://leetcode.com/problems/maximum-number-of-eaten-apples/
// Author : acgotaku311
// Date   : 2020-12-27

/**
 * @param {number[]} apples
 * @param {number[]} days
 * @return {number}
 */
const eatenApples = function (apples, days) {
  let apple = 0
  let eat = 0
  const len = apples.length
  const maxDays = 50000
  const count = new Array(maxDays).fill(0)
  for (let i = 0; i < maxDays; i++) {
    const temp = eat + count[i]
    eat = Math.max(temp, 0)
    count[i] = Math.min(temp, 0)
    if (i < len) {
      count[i] += apples[i]
      count[i + days[i]] -= apples[i]
    }
    count[i] += i > 0 ? count[i - 1] : 0
    if (count[i] > 0) {
      apple++
      eat++
      count[i]--
    }
  }

  return apple
}

export { eatenApples }
