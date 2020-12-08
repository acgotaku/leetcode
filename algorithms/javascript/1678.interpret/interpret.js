// Source : https://leetcode.com/problems/goal-parser-interpretation/
// Author : acgotaku311
// Date   : 2020-12-08

/**
 * @param {string} command
 * @return {string}
 */
const interpret = function (command) {
  // return command.replaceAll('()', 'o').replaceAll('(al)', 'al')
  const result = []
  let left = -1
  for (let i = 0; i < command.length; i++) {
    if (command[i] === 'G') {
      result.push('G')
      continue
    } else if (command[i] === '(') {
      left = i
    } else if (command[i] === ')') {
      if (left === i - 1) {
        result.push('o')
      }
    } else if (command[i] === 'a') {
      result.push('al')
    }
  }
  return result.join('')
}

export { interpret }
