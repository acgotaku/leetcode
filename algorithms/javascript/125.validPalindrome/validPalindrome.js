// Source : https://leetcode.com/problems/valid-palindrome/
// Author : acgotaku311
// Date   : 2020-12-21

/** ********************************************************************************
*
* Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
*
* For example,
* "A man, a plan, a canal: Panama" is a palindrome.
* "race a car" is not a palindrome.
*
* Note:
* Have you consider that the string might be empty? This is a good question to ask during an interview.
*
* For the purpose of this problem, we define empty string as valid palindrome.
*
*
**********************************************************************************/

/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function (s) {
  const removeNoise = (str) => {
    const result = []
    for (let i = 0; i < str.length; i++) {
      const alpha = str[i].toLowerCase()
      const ascii = alpha.charCodeAt(0)
      if ((ascii >= 97 && ascii <= 122) || (ascii >= 48 && ascii <= 57)) {
        result.push(alpha)
      }
    }
    return result.join('')
  }
  const str = removeNoise(s)
  for (let i = 0; i < Number.parseInt(str.length / 2); i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false
    }
  }
  return true
}

export { isPalindrome }
