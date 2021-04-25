// Source : https://leetcode.com/problems/longest-substring-of-all-vowels-in-order/
// Author : acgotaku311
// Date   : 2021-04-25

/**
 * @param {string} word
 * @return {number}
 */
const longestBeautifulSubstring = function (word) {
  const len = word.length

  let dict = {}
  let l = 0
  let count = 0
  for (let r = 0; r < len; r++) {
    if (r > 0) {
      if (word[r] < word[r - 1]) {
        l = r
        dict = {}
      }
    }
    dict[word[r]] = true
    if (word[l] === 'a' && word[r] === 'u' && r - l + 1 >= 5) {
      if (Object.keys(dict).length >= 5) {
        count = Math.max(count, r - l + 1)
      }
    }
  }
  return count
}
export { longestBeautifulSubstring }
