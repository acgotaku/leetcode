// Source : https://leetcode.com/problems/word-break-ii/
// Author : acgotaku311
// Date   : 2021-02-01

/** ********************************************************************************
*
* Given a string s and a dictionary of words dict, add spaces in s to construct a sentence
* where each word is a valid dictionary word.
*
* Return all such possible sentences.
*
* For example, given
* s = "catsanddog",
* dict = ["cat", "cats", "and", "sand", "dog"].
*
* A solution is ["cats and dog", "cat sand dog"].
*
*
**********************************************************************************/

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
const wordBreak = function (s, wordDict) {
  const cache = {}
  const dict = {}
  wordDict.forEach((word) => {
    dict[word] = true
  })
  const dfs = (s) => {
    if (cache[s]) {
      return cache[s]
    }
    const result = []
    for (let i = 0; i < s.length; i++) {
      const word = s.substr(0, i + 1)
      if (dict[word]) {
        if (i === s.length - 1) {
          result.push(word)
          break
        }
        const res = dfs(s.substr(i + 1, s.length - i - 1))
        for (let j = 0; j < res.length; j++) {
          result.push(word + ' ' + res[j])
        }
      }
    }
    cache[s] = result
    return result
  }

  return dfs(s)
}
export { wordBreak }
