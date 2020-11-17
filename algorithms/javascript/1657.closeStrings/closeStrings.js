// Source : https://leetcode.com/problems/determine-if-two-strings-are-close/
// Author : acgotaku311
// Date   : 2020-11-17

/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
const closeStrings = function (word1, word2) {
  if (word1.length !== word2.length) {
    return false
  }
  const dict1 = {}
  for (let i = 0; i < word1.length; i++) {
    const word = word1[i]
    if (dict1[word]) {
      dict1[word]++
    } else {
      dict1[word] = 1
    }
  }
  const dict2 = {}
  for (let i = 0; i < word2.length; i++) {
    const word = word2[i]
    if (dict2[word]) {
      dict2[word]++
    } else {
      dict2[word] = 1
    }
  }

  if (Object.keys(dict1).sort().join('') !== Object.keys(dict2).sort().join('')) {
    return false
  }

  if (Object.values(dict1).sort().join('') !== Object.values(dict2).sort().join('')) {
    return false
  }

  return true
}
export { closeStrings }
