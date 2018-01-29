// Source : https://leetcode.com/problems/generate-parentheses/description/
// Author : acgotaku311
// Date   : 2018-01-29

/**********************************************************************************
*
* Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
*
* For example, given n = 3, a solution set is:
*
* "((()))", "(()())", "(())()", "()(())", "()()()"
*
*
**********************************************************************************/

/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = (n) => {
  const result = []
  const loop = (left, right, s) => {
    if (left === 0 && right === 0) {
      result.push(s)
      return
    }
    if (left > 0) {
      loop(left - 1, right, s + '(')
    }

    if (right > 0 && right > left) {
      loop(left, right - 1, s + ')')
    }
  }

  loop(n, n, '')
  return result
}

export { generateParenthesis }
