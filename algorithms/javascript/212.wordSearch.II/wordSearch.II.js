// Source : https://leetcode.com/problems/word-search-ii/
// Author : acgotaku311
// Date   : 2021-04-29

/** ********************************************************************************
 *
 * Given a 2D board and a list of words from the dictionary, find all words in the board.
 *
 * Each word must be constructed from letters of sequentially adjacent cell, where "adjacent"
 * cells are those horizontally or vertically neighboring. The same letter cell may not be used
 * more than once in a word.
 *
 * For example,
 *   Given words = ["oath","pea","eat","rain"] and board =
 *
 *   [
 *     ['o','a','a','n'],
 *     ['e','t','a','e'],
 *     ['i','h','k','r'],
 *     ['i','f','l','v']
 *   ]
 *
 * Return ["eat","oath"].
 *
 * Note:
 * You may assume that all inputs are consist of lowercase letters a-z.
 *
 * click to show hint.
 *
 * You would need to optimize your backtracking to pass the larger test. Could you stop backtracking earlier?
 *
 * If the current candidate does not exist in all words' prefix, you could stop backtracking immediately.
 * What kind of data structure could answer such query efficiently? Does a hash table work? Why or why not?
 * How about a Trie? If you would like to learn how to implement a basic trie, please work on this problem:
 * Implement Trie (Prefix Tree) first.
 *
 **********************************************************************************/

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
const findWords = function (board, words) {
  const row = board.length
  const col = board[0].length
  const result = []
  let found = false
  let visitedBoard = new Array(row).fill(false).map(() => new Array(col).fill(false))
  const near = ({ x, y }) => {
    const arr = []
    if (x > 0 && visitedBoard[x - 1][y] === false) {
      arr.push({ x: x - 1, y })
    }
    if (y > 0 && visitedBoard[x][y - 1] === false) {
      arr.push({ x, y: y - 1 })
    }
    if (x < row - 1 && visitedBoard[x + 1][y] === false) {
      arr.push({ x: x + 1, y })
    }
    if (y < col - 1 && visitedBoard[x][y + 1] === false) {
      arr.push({ x, y: y + 1 })
    }
    return arr
  }
  const DFS = ({ x, y }, word, index) => {
    if (board[x][y] === word[index] && visitedBoard[x][y] === false) {
      if (index === word.length - 1) {
        return true
      }
      visitedBoard[x][y] = true
      const nearPoint = near({ x, y })
      for (let i = 0; i < nearPoint.length; i++) {
        if (DFS(nearPoint[i], word, index + 1)) {
          return true
        }
      }
    }
    return false
  }
  for (let k = 0; k < words.length; k++) {
    const word = words[k]
    found = false
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        if (board[i][j] === word[0] && found === false) {
          visitedBoard = new Array(row).fill(false).map(() => new Array(col).fill(false))
          if (DFS({ x: i, y: j }, word, 0)) {
            result.push(word)
            found = true
            break
          }
        }
      }
      if (found) {
        break
      }
    }
  }

  return result
}

export { findWords }
