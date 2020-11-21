// Source : https://leetcode.com/problems/palindrome-number/description/
// Author : acgotaku311
// Date   : 2018-01-13

/**********************************************************************************
*
* Determine whether an integer is a palindrome. Do this without extra space.
*
*
* Some hints:
*
* Could negative integers be palindromes? (ie, -1)
*
* If you are thinking of converting the integer to string, note the restriction of using extra space.
*
* You could also try reversing an integer. However, if you have solved the problem "Reverse Integer",
* you know that the reversed integer might overflow. How would you handle such case?
*
* There is a more generic way of solving this problem.
*
*
**********************************************************************************/

/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = (x) => {
  const str = x.toString()
  const len = str.length
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - i - 1]) {
      return false
    }
  }
  return true
}

export { isPalindrome }
