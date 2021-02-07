// Source : https://leetcode.com/problems/reformat-phone-number/
// Author : acgotaku311
// Date   : 2020-12-20

/**
 * @param {string} number
 * @return {string}
 */
const reformatNumber = function (number) {
  let num = number.replace(/[-|\s]/g, '')
  const results = []
  while (num.length > 0) {
    const len = num.length
    if (len > 4) {
      results.push(num.slice(0, 3))
      num = num.slice(3)
    } else if (len === 4) {
      results.push(num.slice(0, 2))
      results.push(num.slice(2, 4))
      num = ''
    } else {
      results.push(num)
      num = ''
    }
  }
  return results.join('-')
}

export { reformatNumber }
