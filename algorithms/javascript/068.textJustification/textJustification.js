// Source : https://leetcode.com/problems/text-justification/
// Author : acgotaku311
// Date   : 2020-08-19

/** ********************************************************************************
*
* Given an array of words and a length L, format the text such that each line has
* exactly L characters and is fully (left and right) justified.
*
*
* You should pack your words in a greedy approach; that is, pack as many words as you can in each line.
* Pad extra spaces ' ' when necessary so that each line has exactly L characters.
*
* Extra spaces between words should be distributed as evenly as possible.
* If the number of spaces on a line do not divide evenly between words,
* the empty slots on the left will be assigned more spaces than the slots on the right.
*
* For the last line of text, it should be left justified and no extra space is inserted between words.
*
* For example,
* words: ["This", "is", "an", "example", "of", "text", "justification."]
* L: 16.
*
* Return the formatted lines as:
*
* [
*    "This    is    an",
*    "example  of text",
*    "justification.  "
* ]
*
* Note: Each word is guaranteed not to exceed L in length.
*
*
* Corner Cases:
*
* A line other than the last line might contain only one word. What should you do in this case?
* In this case, that line should be left-justified.
*
*
**********************************************************************************/

/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
const fullJustify = function (words, maxWidth) {
  const result = []
  let row = []
  let len = 0
  const justify = (lineWords) => {
    let str = ''
    let space = maxWidth - lineWords.join('').length
    while (lineWords.length > 0) {
      const word = lineWords.shift()
      const wordSpace = lineWords.length > 0 ? Math.ceil(space / (lineWords.length)) : space
      str = str + word.padEnd(word.length + wordSpace)
      space = space - wordSpace
    }
    return str
  }

  const lastJustify = (lineWords) => {
    let str = ''
    let space = maxWidth - lineWords.join('').length
    while (lineWords.length > 0) {
      const word = lineWords.shift()
      const wordSpace = lineWords.length === 0 ? space : 1
      str = str + word.padEnd(word.length + wordSpace)
      space = space - wordSpace
    }
    return str
  }

  while (words.length > 0) {
    const word = words.shift()
    if (len + row.length + word.length <= maxWidth) {
      row.push(word)
      len = len + word.length
    } else {
      const str = justify(row)
      result.push(str)
      len = word.length
      row = [word]
    }
  }

  const str = lastJustify(row)
  result.push(str)

  return result
}
export { fullJustify }
