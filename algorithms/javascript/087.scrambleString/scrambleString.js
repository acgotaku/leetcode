// Source : https://leetcode.com/problems/scramble-string/
// Author : acgotaku311
// Date   : 2020-09-07

/** ********************************************************************************
*
* Given a string s1, we may represent it as a binary tree by partitioning it to two non-empty substrings recursively.
*
* Below is one possible representation of s1 = "great":
*
*     great
*    /    \
*   gr    eat
*  / \    /  \
* g   r  e   at
*            / \
*           a   t
*
* To scramble the string, we may choose any non-leaf node and swap its two children.
*
* For example, if we choose the node "gr" and swap its two children, it produces a scrambled string "rgeat".
*
*     rgeat
*    /    \
*   rg    eat
*  / \    /  \
* r   g  e   at
*            / \
*           a   t
*
* We say that "rgeat" is a scrambled string of "great".
*
* Similarly, if we continue to swap the children of nodes "eat" and "at", it produces a scrambled string "rgtae".
*
*     rgtae
*    /    \
*   rg    tae
*  / \    /  \
* r   g  ta  e
*        / \
*       t   a
*
* We say that "rgtae" is a scrambled string of "great".
*
* Given two strings s1 and s2 of the same length, determine if s2 is a scrambled string of s1.
*
*
**********************************************************************************/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const isScramble = function (s1, s2) {
  const recursion = (s1, s2) => {
    if (s1 === s2) {
      return true
    }
    const sort1 = s1.split('').sort().join('')
    const sort2 = s2.split('').sort().join('')
    if (sort1 !== sort2) {
      return false
    }

    for (let i = 1; i < s1.length; i++) {
      if (recursion(s1.substr(0, i), s2.substr(0, i)) && recursion(s1.substr(i, s1.length - i), s2.substr(i, s2.length - i))) {
        return true
      }
      if (recursion(s1.substr(0, i), s2.substr(s2.length - i, i)) && recursion(s1.substr(i, s1.length - i), s2.substr(0, s2.length - i))) {
        return true
      }
    }
    return false
  }
  return recursion(s1, s2)
}

export { isScramble }
