// Source : https://leetcode.com/problems/closest-dessert-cost/
// Author : acgotaku311
// Date   : 2021-02-28

/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
const countMatches = function (items, ruleKey, ruleValue) {
  let keyIndex = 0
  switch (ruleKey) {
    case 'type': {
      keyIndex = 0
      break
    }
    case 'color': {
      keyIndex = 1
      break
    }
    case 'name': {
      keyIndex = 2
      break
    }
  }
  const selectItem = items.filter(item => {
    if (item[keyIndex] === ruleValue) {
      return true
    } else {
      return false
    }
  })
  return selectItem.length
}
export { countMatches }
