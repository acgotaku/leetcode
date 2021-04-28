// Source : https://leetcode.com/problems/design-add-and-search-words-data-structure/
// Author : acgotaku311
// Date   : 2021-04-28

const base = 'a'.charCodeAt(0)
const len = 26

const TrieNode = function () {
  this.isEndValue = false
  this.links = new Array(len).fill(null)
}

TrieNode.prototype.containsKey = function (key) {
  const code = key.charCodeAt(0)
  return this.links[code - base] !== null
}

TrieNode.prototype.get = function (key) {
  const code = key.charCodeAt(0)
  return this.links[code - base]
}

TrieNode.prototype.put = function (key, node) {
  const code = key.charCodeAt(0)
  this.links[code - base] = node
}

TrieNode.prototype.isEnd = function () {
  return this.isEndValue
}

TrieNode.prototype.setEnd = function () {
  this.isEndValue = true
}
/**
 * Initialize your data structure here.
 */
const WordDictionary = function () {
  this.root = new TrieNode()
}

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  let node = this.root
  for (let i = 0; i < word.length; i++) {
    const currentChar = word[i]
    if (!node.containsKey(currentChar)) {
      node.put(currentChar, new TrieNode())
    }
    node = node.get(currentChar)
  }
  node.setEnd()
}

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  const node = this.root
  return this.searchWord(word, node)
}

/**
 * @param {string} word
 * @param {TrieNode} root
 * @return {boolean}
 */
WordDictionary.prototype.searchWord = function (word, root) {
  let node = root
  for (let i = 0; i < word.length; i++) {
    const currentChar = word[i]
    if (currentChar === '.') {
      for (let j = 0; j < len; j++) {
        const tempChar = String.fromCharCode(base + j)
        if (node.containsKey(tempChar)) {
          if (this.searchWord(word.substring(i + 1), node.get(tempChar))) {
            return true
          }
        }
      }
      return false
    } else {
      if (node.containsKey(currentChar)) {
        node = node.get(currentChar)
      } else {
        return false
      }
    }
  }
  return node.isEnd()
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

export { WordDictionary }
