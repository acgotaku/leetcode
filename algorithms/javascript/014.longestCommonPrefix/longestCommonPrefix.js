// Source : https://leetcode.com/problems/longest-common-prefix/description/
// Author : acgotaku311
// Date   : 2018-01-18

/**********************************************************************************
*
* Write a function to find the longest common prefix string amongst an array of strings.
*
*
**********************************************************************************/

/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = (strs) => {
  if (strs.length <= 0) {
    return ''
  }
  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== strs[0][i]) {
        return strs[0].slice(0, i)
      }
    }
  }

  return strs[0]
}
export { longestCommonPrefix }
