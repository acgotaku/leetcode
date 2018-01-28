// Source : https://leetcode.com/problems/valid-parentheses/description/
// Author : acgotaku311
// Date   : 2018-01-28

/**********************************************************************************
*
* Given a string containing just the characters '(', ')', '{', '}', '[' and ']',
* determine if the input string is valid.
*
* The brackets must close in the correct order, "()" and "()[]{}" are all valid
* but "(]" and "([)]" are not.
*
*
**********************************************************************************/

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
  const stack = []
  const len = s.length
  for (let i = 0; i < len; i++) {
    const item = s[i]
    let pair = null
    if (item === '(' || item === '{' || item === '[') {
      stack.push(item)
    } else {
      pair = stack.pop()
      if (item === ')' && pair === '(') {
        continue
      } else if (item === ']' && pair === '[') {
        continue
      } else if (item === '}' && pair === '{') {
        continue
      } else {
        return false
      }
    }
  }

  return !stack.length
}

export { isValid }
