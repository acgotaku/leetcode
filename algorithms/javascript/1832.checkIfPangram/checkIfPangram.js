// Source : https://leetcode.com/problems/check-if-the-sentence-is-pangram/
// Author : acgotaku311
// Date   : 2021-04-19

/**
 * @param {string} sentence
 * @return {boolean}
 */
const checkIfPangram = function (sentence) {
  const dict = {}
  for (let i = 0; i < sentence.length; i++) {
    const alphabet = sentence[i]
    if (dict[alphabet]) {
      dict[alphabet]++
    } else {
      dict[alphabet] = 1
    }
  }

  if (Object.keys(dict).length === 26) {
    return true
  } else {
    return false
  }
}
export { checkIfPangram }
