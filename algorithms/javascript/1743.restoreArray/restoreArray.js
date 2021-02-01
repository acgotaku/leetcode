// Source : https://leetcode.com/problems/restore-the-array-from-adjacent-pairs/
// Author : acgotaku311
// Date   : 2021-01-31

/**
 * @param {number[][]} adjacentPairs
 * @return {number[]}
 */
const restoreArray = function (adjacentPairs) {
  const dict = {}
  const res = []
  const len = adjacentPairs.length
  for (let i = 0; i < len; i++) {
    const a = adjacentPairs[i][0]
    const b = adjacentPairs[i][1]
    if (dict[a]) {
      dict[a].push(b)
    } else {
      dict[a] = [b]
    }
    if (dict[b]) {
      dict[b].push(a)
    } else {
      dict[b] = [a]
    }
  }

  for (const key in dict) {
    if (dict[key].length === 1) {
      res.push(Number(key))
      res.push(dict[key][0])
      break
    }
  }

  while (res.length < len + 1) {
    const tail = res[res.length - 1]
    const prev = res[res.length - 2]
    if (dict[tail][0] !== prev) {
      res.push(dict[tail][0])
    } else {
      res.push(dict[tail][1])
    }
  }
  return res
}

export { restoreArray }
