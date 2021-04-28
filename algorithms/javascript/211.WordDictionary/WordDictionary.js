// Source : https://leetcode.com/problems/design-add-and-search-words-data-structure/
// Author : acgotaku311
// Date   : 2021-04-28

/**
 * Initialize your data structure here.
 */
const WordDictionary = function () {
  this.words = []
}

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  this.words.push(word)
}

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  let validWords = this.words.slice()
  const len = word.length

  for (let i = 0; i < word.length; i++) {
    if (validWords.length === 0) {
      return false
    }
    const alphabet = word[i]
    const tempWords = []
    for (let j = 0; j < validWords.length; j++) {
      if (word[i] === '.') {
        if (validWords[j][i] && validWords[j].length === len) {
          tempWords.push(validWords[j])
        }
      } else if (validWords[j][i] === alphabet && validWords[j].length === len) {
        tempWords.push(validWords[j])
      }
    }
    validWords = tempWords
  }
  return validWords.length > 0
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

export { WordDictionary }
