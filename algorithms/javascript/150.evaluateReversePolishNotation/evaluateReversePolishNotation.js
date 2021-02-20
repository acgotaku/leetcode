// Source : https://leetcode.com/problems/evaluate-reverse-polish-notation/
// Author : acgotaku311
// Date   : 2021-02-20

/** ********************************************************************************
*
* Evaluate the value of an arithmetic expression in Reverse Polish Notation.
*
* Valid operators are +, -, *, /. Each operand may be an integer or another expression.
*
* Some examples:
*
*   ["2", "1", "+", "3", "*"] -> ((2 + 1) * 3) -> 9
*   ["4", "13", "5", "/", "+"] -> (4 + (13 / 5)) -> 6
*
*
**********************************************************************************/

/**
 * @param {string[]} tokens
 * @return {number}
 */
const evalRPN = function (tokens) {
  if (tokens.length === 1) {
    return tokens[0]
  }

  const operate = ['+', '-', '*', '/']

  for (let i = 2; i < tokens.length; i++) {
    const token = tokens[i]
    if (operate.includes(token)) {
      const a = Number(tokens[i - 2])
      const b = Number(tokens[i - 1])
      switch (token) {
        case '+': {
          const res = a + b
          tokens.splice(i - 2, 3, res)
          return evalRPN(tokens)
        }
        case '-': {
          const res = a - b
          tokens.splice(i - 2, 3, res)
          return evalRPN(tokens)
        }
        case '*': {
          const res = a * b
          tokens.splice(i - 2, 3, res)
          return evalRPN(tokens)
        }
        case '/': {
          const res = Number.parseInt(a / b)
          tokens.splice(i - 2, 3, res)
          return evalRPN(tokens)
        }
      }
    }
  }
}
export { evalRPN }
