// Source : https://leetcode.com/problems/substring-with-concatenation-of-all-words/description
// Author : acgotaku311
// Date   : 2017-07-24

/**********************************************************************************
*
* You are given a string, S, and a list of words, L, that are all of the same length.
* Find all starting indices of substring(s) in S that is a concatenation of each word
* in L exactly once and without any intervening characters.
*
* For example, given:
* S: "barfoothefoobarman"
* L: ["foo", "bar"]
*
* You should return the indices: [0,9].
* (order does not matter).
*
*  https://segmentfault.com/a/1190000002625580
**********************************************************************************/

const findSubstring = function (s, words) {
  let result = []
  if (s.length <= 0 || words.length <= 0) {
    return result
  }
  let sLength = s.length
  let wordsCount = words.length
  let wordLength = words[0].length
  let wordObject = {}
  for (let i = 0; i < wordsCount; i++) {
    if (!wordObject[words[i]]) {
      wordObject[words[i]] = 1
    } else {
      wordObject[words[i]]++
    }
  }
  for (let i = 0; i < wordLength; i++) {
    let currObject = {}
    let count = 0
    let left = i
    for (let j = i; j <= sLength - wordLength; j = j + wordLength) {
      let curStr = s.substring(j, j + wordLength)
      if (curStr in wordObject) {
        if (curStr in currObject) {
          currObject[curStr]++
        } else {
          currObject[curStr] = 1
        }
        if (currObject[curStr] <= wordObject[curStr]) {
          count++
        } else {
          // delete duplicate word
          while (true) {
            let temp = s.substring(left, left + wordLength)
            currObject[temp]--
            left += wordLength
            if (temp === curStr) {
              break
            } else {
              count--
            }
          }
        }
        if (count === wordsCount) {
          result.push(left)
          // remove first word and keep searching
          let temp = s.substring(left, left + wordLength)
          currObject[temp]--
          left = left + wordLength
          count--
        }
      } else {
        currObject = {}
        count = 0
        left = j + wordLength
      }
    }
  }
  return result
}

export { findSubstring }
