// Source : https://leetcode.com/problems/longest-valid-parentheses/description/
// Author : acgotaku311
// Date   : 2017-12-08

/**********************************************************************************
*
* Given a string containing just the characters '(' and ')',
* find the length of the longest valid (well-formed) parentheses substring.
*
* For "(()", the longest valid parentheses substring is "()", which has length = 2.
*
* Another example is ")()())", where the longest valid parentheses substring is "()()",
* which has length = 4.
*
*
**********************************************************************************/

/**
 * @param {string} s
 * @return {number}
 */
const longestValidParentheses = function (s) {
  const len = s.length
  let maxCount = 0
  const stack = [-1]
  for (let i = 0; i < len; i++) {
    if (s[i] === '(') {
      stack.push(i)
    } else if (s[i] === ')') {
      stack.pop()
      if (stack.length === 0) {
        stack.push(i)
      } else {
        maxCount = Math.max(maxCount, i - stack[stack.length - 1])
      }
    }
  }
  return maxCount
}

export { longestValidParentheses }
