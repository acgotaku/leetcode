// Source : https://leetcode.com/problems/maximum-number-of-balls-in-a-box/
// Author : acgotaku311
// Date   : 2021-01-31

/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
const countBalls = function (lowLimit, highLimit) {
  const dict = {}
  let max = 0
  for (let i = lowLimit; i <= highLimit; i++) {
    const str = i.toString()
    let sum = 0
    for (let j = 0; j < str.length; j++) {
      sum += Number(str[j])
    }
    if (dict[sum]) {
      dict[sum]++
    } else {
      dict[sum] = 1
    }
  }
  for (const key in dict) {
    max = Math.max(dict[key], max)
  }
  return max
}

export { countBalls }
