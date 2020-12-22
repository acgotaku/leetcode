// Source : https://leetcode.com/problems/word-ladder-ii/
// Author : acgotaku311
// Date   : 2020-12-22

/** ********************************************************************************
*
* Given two words (start and end), and a dictionary, find all shortest transformation
* sequence(s) from start to end, such that:
*
* Only one letter can be changed at a time
* Each intermediate word must exist in the dictionary
*
* For example,
*
* Given:
* start = "hit"
* end = "cog"
* dict = ["hot","dot","dog","lot","log"]
*
* Return
*
*   [
*     ["hit","hot","dot","dog","cog"],
*     ["hit","hot","lot","log","cog"]
*   ]
*
* Note:
*
* All words have the same length.
* All words contain only lowercase alphabetic characters.
*
*
**********************************************************************************/

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
const findLadders = function (beginWord, endWord, wordList) {
  const result = []
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')

  if (!wordList.includes(endWord)) {
    return result
  }

  const levels = {}
  const visited = {}
  const dictList = {}
  let findLevel = false

  wordList.forEach(word => {
    dictList[word] = true
  })

  const queue = [beginWord]
  visited[beginWord] = true
  while (queue.length > 0) {
    const len = queue.length
    const accessed = []
    for (let i = 0; i < len; i++) {
      const word = queue.shift()
      for (let j = 0; j < word.length; j++) {
        const newWord = word.split('')
        for (let k = 0; k < alphabet.length; k++) {
          newWord[j] = alphabet[k]
          const newStr = newWord.join('')
          if (newStr === word || visited[newStr]) {
            continue
          }
          if (dictList[newStr]) {
            if (levels[word]) {
              levels[word].push(newStr)
            } else {
              levels[word] = [newStr]
            }
            accessed.push(newStr)
            if (!queue.includes(newStr)) {
              queue.push(newStr)
            }
          }
          if (word === endWord) {
            findLevel = true
            break
          }
        }
      }
    }
    accessed.forEach(word => {
      visited[word] = true
    })
    if (findLevel) {
      break
    }
  }

  const DFS = (list) => {
    const lastWord = list[list.length - 1]
    if (lastWord === endWord) {
      result.push(list.slice())
    }
    const next = levels[lastWord]
    if (next) {
      for (let i = 0; i < next.length; i++) {
        list.push(next[i])
        DFS(list)
        list.pop()
      }
    }
  }
  DFS([beginWord])
  return result
}

export { findLadders }
