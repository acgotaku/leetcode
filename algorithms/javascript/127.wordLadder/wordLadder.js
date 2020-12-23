// Source : https://leetcode.com/problems/word-ladder/
// Author : acgotaku311
// Date   : 2020-12-23

/** ********************************************************************************
*
* Given two words (start and end), and a dictionary, find the length of shortest
* transformation sequence from start to end, such that:
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
* As one shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog",
* return its length 5.
*
* Note:
*
* Return 0 if there is no such transformation sequence.
* All words have the same length.
* All words contain only lowercase alphabetic characters.
*
*
**********************************************************************************/

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
const ladderLength = function (beginWord, endWord, wordList) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')

  const dict = {}
  const dictList = {}

  wordList.forEach(word => {
    dictList[word] = true
  })

  const queue = [beginWord]
  dict[beginWord] = 1
  while (queue.length > 0) {
    const len = queue.length
    for (let i = 0; i < len; i++) {
      const word = queue.shift()
      for (let j = 0; j < word.length; j++) {
        const newWord = word.split('')
        for (let k = 0; k < alphabet.length; k++) {
          newWord[j] = alphabet[k]
          const newStr = newWord.join('')
          if (newStr === word || dict[newStr]) {
            continue
          }
          if (dictList[newStr]) {
            dict[newStr] = dict[word] + 1
            queue.push(newStr)

            if (newStr === endWord) {
              return dict[newStr]
            }
          }
        }
      }
    }
  }

  return 0
}

export { ladderLength }
