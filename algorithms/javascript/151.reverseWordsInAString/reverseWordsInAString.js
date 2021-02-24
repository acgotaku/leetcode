// Source : https://leetcode.com/problems/reverse-words-in-a-string/
// Author : acgotaku311
// Date   : 2021-02-24

/** ********************************************************************************
*
* Given an input string, reverse the string word by word.
*
* For example,
* Given s = "the sky is blue",
* return "blue is sky the".
*
*
* Clarification:
*
* What constitutes a word?
* A sequence of non-space characters constitutes a word.
* Could the input string contain leading or trailing spaces?
* Yes. However, your reversed string should not contain leading or trailing spaces.
* How about multiple spaces between two words?
* Reduce them to a single space in the reversed string.
*
*
**********************************************************************************/

/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = function (s) {
  const words = s.trim().split(' ').filter(x => x)
  return words.reverse().join(' ')
}

export { reverseWords }
