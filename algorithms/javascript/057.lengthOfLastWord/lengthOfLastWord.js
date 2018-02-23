// Source : https://leetcode.com/problems/length-of-last-word/description/
// Author : acgotaku311
// Date   : 2018-02-23

/**********************************************************************************
*
* Given a string s consists of upper/lower-case alphabets and empty space characters ' ',
* return the length of last word in the string.
*
* If the last word does not exist, return 0.
*
* Note: A word is defined as a character sequence consists of non-space characters only.
*
* For example,
* Given s = "Hello World",
* return 5.
*
*
**********************************************************************************/

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function (s) {
  s = s.trim()
  if (s.length <= 0) {
    return 0
  }

  const words = s.split(' ')
  return words.pop().length
}

export { lengthOfLastWord }
