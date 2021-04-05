// Source : https://leetcode.com/problems/implement-trie-prefix-tree/
// Author : acgotaku311
// Date   : 2021-04-03

/** ********************************************************************************
 *
 * Implement a trie with insert, search, and startsWith methods.
 *
 * Note:
 * You may assume that all inputs are consist of lowercase letters a-z.
 *
 *
 **********************************************************************************/

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
const Trie = function () {
  this.root = new TrieNode()
}

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
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

Trie.prototype.searchPrefix = function (word) {
  let node = this.root
  for (let i = 0; i < word.length; i++) {
    const currentChar = word[i]
    if (node.containsKey(currentChar)) {
      node = node.get(currentChar)
    } else {
      return null
    }
  }
  return node
}

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  const node = this.searchPrefix(word)
  return node !== null && node.isEnd()
}

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  const node = this.searchPrefix(prefix)
  return node !== null
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

export { Trie }
