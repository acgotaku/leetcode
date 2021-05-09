// Source : https://leetcode.com/problems/maximum-population-year/
// Author : acgotaku311
// Date   : 2021-05-09

/**
 * @param {number[][]} logs
 * @return {number}
 */
const maximumPopulation = function (logs) {
  const dict = {}
  let max = 0
  let year = null
  logs.forEach(log => {
    for (let i = log[0]; i < log[1]; i++) {
      if (dict[i]) {
        dict[i]++
      } else {
        dict[i] = 1
      }
    }
  })

  for (let i = 1950; i <= 2050; i++) {
    if (dict[i] && dict[i] > max) {
      max = dict[i]
      year = i
    }
  }
  return year
}

export { maximumPopulation }
