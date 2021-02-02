// Source : https://leetcode.com/problems/count-of-matches-in-tournament/
// Author : acgotaku311
// Date   : 2020-12-13

/**
 * @param {number} n
 * @return {number}
 */
const numberOfMatches = function (n) {
  const isEven = (num) => num % 2 === 0
  let sum = 0

  while (n >= 2) {
    const matches = Number.parseInt(n / 2)
    sum += matches
    if (isEven(n)) {
      n = matches
    } else {
      n = matches + 1
    }
  }
  return sum
}

export { numberOfMatches }
