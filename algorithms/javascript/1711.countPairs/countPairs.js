// Source : https://leetcode.com/problems/count-good-meals/
// Author : acgotaku311
// Date   : 2021-01-03

/**
 * @param {number[]} deliciousness
 * @return {number}
 */
const countPairs = function (deliciousness) {
  const len = deliciousness.length
  let result = 0
  const MAX_SUM = Math.pow(2, 20) * 2
  const mod = Math.pow(10, 9) + 7
  const valid = []
  const dict = {}
  let sum = 1
  while (sum <= MAX_SUM) {
    valid.push(sum)
    sum = sum * 2
  }

  for (let i = 0; i < len; i++) {
    const meal = deliciousness[i]
    for (let j = 0; j < valid.length; j++) {
      const validMeal = valid[j]
      if (validMeal < meal) {
        continue
      }
      if (dict[validMeal - meal]) {
        result = (result + dict[validMeal - meal]) % mod
      }
    }
    if (dict[meal]) {
      dict[meal]++
    } else {
      dict[meal] = 1
    }
  }

  return result
}
export { countPairs }
