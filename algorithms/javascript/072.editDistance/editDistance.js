// Source : https://leetcode.com/problems/edit-distance/
// Author : acgotaku311
// Date   : 2020-08-22

/** ********************************************************************************
*
* Given two words word1 and word2, find the minimum number of steps required to
* convert word1 to word2. (each operation is counted as 1 step.)
*
* You have the following 3 operations permitted on a word:
*
* a) Insert a character
* b) Delete a character
* c) Replace a character
*
*
**********************************************************************************/

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
const minDistance = function (word1, word2) {
  const row = word1.length
  const col = word2.length
  const data = []
  for (let i = 0; i <= row; i++) {
    data.push(new Array(col + 1).fill(0))
  }

  for (let i = 0; i <= row; i++) {
    data[i][0] = i
  }

  for (let j = 0; j <= col; j++) {
    data[0][j] = j
  }

  for (let i = 1; i <= row; i++) {
    for (let j = 1; j <= col; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        data[i][j] = data[i - 1][j - 1]
      } else {
        data[i][j] = Math.min(data[i - 1][j], data[i][j - 1], data[i - 1][j - 1]) + 1
      }
    }
  }

  return data[row][col]
}

export { minDistance }
