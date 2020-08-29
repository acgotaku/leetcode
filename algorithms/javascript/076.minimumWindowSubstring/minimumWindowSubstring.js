// Source : https://leetcode.com/problems/minimum-window-substring/
// Author : acgotaku311
// Date   : 2020-08-29

/** ********************************************************************************
*
* Given a string S and a string T, find the minimum window in S which will
* contain all the characters in T in complexity O(n).
*
* For example,
* S = "ADOBECODEBANC"
* T = "ABC"
*
* Minimum window is "BANC".
*
* Note:
*
* > If there is no such window in S that covers all characters in T,
*   return the emtpy string "".
*
* > If there are multiple such windows, you are guaranteed that there
*   will always be only one unique minimum window in S.
*
*
**********************************************************************************/

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = function (s, t) {
  const dict = {}
  const window = {}
  const INT_MAX = 2147483647
  let win = ''
  let winSize = INT_MAX
  let start = -1
  for (let i = 0; i < t.length; i++) {
    const current = t[i]
    if (dict[current] !== undefined) {
      dict[current]++
    } else {
      dict[current] = 1
    }
    window[current] = 0
  }

  let letterFound = 0
  let left = 0

  for (let right = 0; right < s.length; right++) {
    const current = s[right]
    if (dict[current] === undefined) {
      continue
    }
    window[current]++

    if (window[current] <= dict[current]) {
      letterFound++
    }

    if (letterFound >= t.length) {
      let leftWord = s[left]
      while (window[leftWord] === undefined || window[leftWord] > dict[leftWord]) {
        if (dict[leftWord] !== undefined) {
          window[leftWord]--
        }
        leftWord = s[++left]
      }

      if (winSize > right - left + 1) {
        start = left
        winSize = right - left + 1
      }
    }
  }

  if (start >= 0) {
    win = s.substr(start, winSize)
  }
  return win
}

export { minWindow }
