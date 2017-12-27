// Source : https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
// Author : acgotaku311
// Date   : 2017-12-27

/**********************************************************************************
*
* Given a string, find the length of the longest substring without repeating characters.
* For example, the longest substring without repeating letters for "abcabcbb" is "abc",
* which the length is 3. For "bbbbb" the longest substring is "b", with the length of 1.
*
**********************************************************************************/

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
  let map = Object.create(null)
  const len = s.length
  let max = 0
  let lastRepeater = -1
  for (let i = 0; i < len; i++) {
    const word = s[i]
    if (word in map && lastRepeater < map[word]) {
      lastRepeater = map[word]
    }
    if (i - lastRepeater > max) {
      max = i - lastRepeater
    }
    map[word] = i
  }
  return max
}

export { lengthOfLongestSubstring }
