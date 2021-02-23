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
  if (s1 === s2) {
    return true
  }
  const a1 = s1.split('')
  const a2 = s2.split('')
  if (a1.length !== a2.length) {
    return false
  }

  const n = a1.length
  const arr = new Array(n).fill(false)
  for (let i = 0; i < n; i++) {
    arr[i] = new Array(n).fill(false)
    for (let j = 0; j < n; j++) {
      arr[i][j] = new Array(n + 1).fill(false)
      arr[i][j][1] = a1[i] === a2[j]
    }
  }
  for (let k = 2; k <= n; k++) {
    for (let i = 0; i <= n - k; i++) {
      for (let j = 0; j <= n - k; j++) {
        arr[i][j][k] = false
        for (let w = 1; w <= k - 1; w++) {
          if (arr[i][j][w] && arr[i + w][j + w][k - w]) {
            arr[i][j][k] = true
            break
          }
        }
        for (let w = 1; w <= k - 1; w++) {
          if (arr[i][j + k - w][w] && arr[i + w][j][k - w]) {
            arr[i][j][k] = true
            break
          }
        }
      }
    }
  }

  return arr[0][0][n]
}

export { isScramble }
