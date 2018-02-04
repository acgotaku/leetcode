// Source : https://leetcode.com/problems/group-anagrams/description/
// Author : acgotaku311
// Date   : 2018-02-04

/**********************************************************************************
 *
 * Given an array of strings, group anagrams together.
 *
 * For example, given: ["eat", "tea", "tan", "ate", "nat", "bat"],
 * Return:
 *
 * [
 *   ["ate", "eat","tea"],
 *   ["nat","tan"],
 *   ["bat"]
 * ]
 *
 * Note:
 *
 * All inputs will be in lower-case.
 *
 **********************************************************************************/

/**
  * @param {string[]} strs
  * @return {string[][]}
  */
const groupAnagrams = function (strs) {
  const obj = Object.create(null)
  strs.forEach((item) => {
    const key = item.split('').sort().join('')
    if (obj[key]) {
      obj[key].push(item)
    } else {
      obj[key] = [item]
    }
  })

  const result = Object.keys(obj).map(item => obj[item])
  return result
}

export { groupAnagrams }
