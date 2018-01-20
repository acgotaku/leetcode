// Source : https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/
// Author : acgotaku311
// Date   : 2018-01-20

/**********************************************************************************
*
* Given a digit string, return all possible letter combinations that the number could represent.
*
* A mapping of digit to letters (just like on the telephone buttons) is given below.
*
* Input:Digit string "23"
* Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
*
* Note:
* Although the above answer is in lexicographical order, your answer could be in any order you want.
*
*
**********************************************************************************/

/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = (digits) => {
  const phone = [
    [' '],
    [],
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i'],
    ['j', 'k', 'l'],
    ['m', 'n', 'o'],
    ['p', 'q', 'r', 's'],
    ['t', 'u', 'v'],
    ['w', 'x', 'y', 'z']
  ]

  const len = digits.length
  let result = []
  let stack = []
  if (len === 0) {
    return result
  }
  const loop = (str, start) => {
    if (start === len) {
      result.push(stack.join(''))
      return
    }
    const item = +str[start]
    for (let i = 0; i < phone[item].length; i++) {
      stack.push(phone[item][i])
      loop(str, start + 1)
      stack.pop()
    }
  }
  loop(digits, 0)
  return result
}

export { letterCombinations }
