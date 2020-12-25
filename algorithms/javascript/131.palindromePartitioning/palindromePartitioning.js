// Source : https://leetcode.com/problems/palindrome-partitioning/
// Author : acgotaku311
// Date   : 2020-12-25

/** ********************************************************************************
*
* Given a string s, partition s such that every substring of the partition is a palindrome.
*
* Return all possible palindrome partitioning of s.
*
* For example, given s = "aab",
*
* Return
*
*   [
*     ["aa","b"],
*     ["a","a","b"]
*   ]
*
*
**********************************************************************************/

/**
 * @param {string} s
 * @return {string[][]}
 */
const partition = function (s) {
  const results = []
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

  const DFS = (str, list) => {
    if (isPalindrome(str)) {
      results.push(list.concat(str))
    }
    const len = str.length
    for (let i = 1; i < len; i++) {
      const left = str.substr(0, i)
      const right = str.substr(i)
      if (isPalindrome(left)) {
        list.push(left)
        DFS(right, list)
        list.pop()
      }
    }
  }
  DFS(s, [])
  return results
}

export { partition }
