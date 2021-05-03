// Source : https://leetcode.com/problems/splitting-a-string-into-descending-consecutive-values/
// Author : acgotaku311
// Date   : 2021-05-03

/**
 * @param {string} s
 * @return {boolean}
 */
const splitString = function (s) {
  const len = s.length
  let word = ''
  for (let i = 0; i < len - 1; i++) {
    word += s[i]
    let nextNum = Number(word) - 1
    let nextWord = ''
    for (let j = i + 1; j < len; j++) {
      nextWord += s[j]
      if (nextNum === 0) {
        if (Number(s.substring(j, len)) === 0) {
          return true
        }
      }
      if (nextNum === Number(nextWord)) {
        nextNum--
        nextWord = ''
        if (j === len - 1) {
          return true
        }
      } else if (Number(nextWord) > nextNum) {
        break
      }
    }
  }

  return false
}

export { splitString }
