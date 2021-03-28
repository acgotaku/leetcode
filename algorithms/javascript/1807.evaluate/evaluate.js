// Source : https://leetcode.com/problems/evaluate-the-bracket-pairs-of-a-string/
// Author : acgotaku311
// Date   : 2021-03-28

/**
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 */
const evaluate = function (s, knowledge) {
  const dict = {}
  let str = ''
  let word = ''
  let record = false
  for (let i = 0; i < knowledge.length; i++) {
    const word = knowledge[i]
    const key = word[0]
    const value = word[1]
    dict[key] = value
  }
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      record = true
      continue
    }

    if (record && s[i] === ')') {
      if (dict[word]) {
        str += dict[word]
      } else {
        str += '?'
      }
      record = false
      word = ''
      continue
    }

    if (record) {
      word += s[i]
    } else {
      str += s[i]
    }
  }

  return str
}
export { evaluate }
