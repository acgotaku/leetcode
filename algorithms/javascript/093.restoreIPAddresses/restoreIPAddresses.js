// Source : https://leetcode.com/problems/restore-ip-addresses/
// Author : acgotaku311
// Date   : 2020-09-13

/** ********************************************************************************
*
* Given a string containing only digits, restore it by returning all possible valid IP address combinations.
*
* For example:
* Given "25525511135",
*
* return ["255.255.11.135", "255.255.111.35"]. (Order does not matter)
*
*
**********************************************************************************/

/**
 * @param {string} s
 * @return {string[]}
 */
const restoreIpAddresses = function (s) {
  const result = []
  const len = s.length

  const isIP = (ip) => {
    if (ip >= 0 && ip <= 255) {
      return true
    } else {
      return false
    }
  }

  const DFS = (stack, start, count) => {
    if (len - start < 4 - count || len - start > (4 - count) * 3) {
      return
    }

    if (count === 4 && start === len) {
      result.push(stack.join('.'))
      return
    }

    for (let i = start; i < start + 3; i++) {
      const ip = Number(s.substring(start, i + 1))
      if (isIP(ip)) {
        // todfo
        stack.push(ip)
        DFS(stack, i + 1, count + 1)
        stack.pop()
      }

      if (ip === 0) {
        break
      }
    }
  }

  DFS([], 0, 0)
  return result
}

export { restoreIpAddresses }
