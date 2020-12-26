// Source : https://leetcode.com/problems/palindrome-partitioning-ii/
// Author : acgotaku311
// Date   : 2020-12-25

/** ********************************************************************************
*
* Given a string s, partition s such that every substring of the partition is a palindrome.
*
* Return the minimum cuts needed for a palindrome partitioning of s.
*
* For example, given s = "aab",
* Return 1 since the palindrome partitioning ["aa","b"] could be produced using 1 cut.
*
*
**********************************************************************************/

/**
 * @param {string} s
 * @return {number}
 */
const minCut = function (s) {
  let cut = 0
  const queue = [s]
  const isPalindrome = (str) => {
    let start = 0
    let end = str.length - 1
    while (start < end) {
      if (str[start] !== str[end]) {
        return false
      }
      start++
      end--
    }
    return true
  }

  while (queue.length > 0) {
    const len = queue.length
    for (let i = 0; i < len; i++) {
      const str = queue.shift()
      if (isPalindrome(str)) {
        return cut
      }
      for (let j = 1; j < str.length; j++) {
        const left = str.substr(0, j)
        const right = str.substr(j)
        if (isPalindrome(left)) {
          if (isPalindrome(right)) {
            return cut + 1
          } else {
            queue.push(right)
          }
        }
      }
    }
    cut++
  }
}

export { minCut }
