// Source : https://leetcode.com/problems/number-of-different-integers-in-a-string/
// Author : acgotaku311
// Date   : 2021-03-28

/**
 * @param {string} word
 * @return {number}
 */
const numDifferentIntegers = function (word) {
  const dict = {}
  let num = ''
  for (let i = 0; i < word.length; i++) {
    if (word[i] >= '0' && word[i] <= '9') {
      num += word[i]
    } else {
      if (num.length) {
        num = Number(num)
        dict[num] = true
      }
      num = ''
    }
  }
  if (num.length) {
    num = Number(num)
    dict[num] = true
  }
  return Object.keys(dict).length
}
export { numDifferentIntegers }
