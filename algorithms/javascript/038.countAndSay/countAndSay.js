// Source : https://leetcode.com/problems/count-and-say/description/
// Author : acgotaku311
// Date   : 2017-12-12

/**********************************************************************************
*
* The count-and-say sequence is the sequence of integers beginning as follows:
* 1, 11, 21, 1211, 111221, ...
*
* 1 is read off as "one 1" or 11.
* 11 is read off as "two 1s" or 21.
* 21 is read off as "one 2, then one 1" or 1211.
*
* Given an integer n, generate the nth sequence.
*
* Note: The sequence of integers will be represented as a string.
*
*
**********************************************************************************/

/**
 * @param {number} n
 * @return {string}
 */
const countAndSay = (n) => {
  if (n <= 0) {
    return ''
  }

  if (n === 1) {
    return '1'
  }
  let array = [1]
  const getNext = (array) => {
    const len = array.length
    const nextArray = []
    let flag = array[0]
    let count = 1
    for (let i = 1; i < len; i++) {
      if (flag !== array[i]) {
        nextArray.push(count)
        nextArray.push(flag)
        flag = array[i]
        count = 1
      } else {
        count++
      }
    }
    nextArray.push(count)
    nextArray.push(flag)
    return nextArray
  }
  for (let i = 1; i < n; i++) {
    array = getNext(array)
  }
  return array.join('')
}

export { countAndSay }
