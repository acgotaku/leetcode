// Source : https://leetcode.com/problems/finding-the-users-active-minutes/
// Author : acgotaku311
// Date   : 2021-04-04

/**
 * @param {number[][]} logs
 * @param {number} k
 * @return {number[]}
 */
const findingUsersActiveMinutes = function (logs, k) {
  const userMap = new Map()
  logs.forEach(log => {
    const user = log[0]
    const min = log[1]
    if (userMap.has(user)) {
      const minutes = userMap.get(user)
      minutes.add(min)
    } else {
      const set = new Set()
      set.add(min)
      userMap.set(user, set)
    }
  })
  const UAM = Array.from(userMap.values()).map(set => set.size)
  const res = new Array(k).fill(0)
  UAM.forEach(item => {
    res[item - 1]++
  })
  return res
}
export { findingUsersActiveMinutes }
