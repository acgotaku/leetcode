// Source : https://leetcode.com/problems/minimize-hamming-distance-after-swap-operations/
// Author : acgotaku311
// Date   : 2021-02-14

/**
 * @param {number[]} source
 * @param {number[]} target
 * @param {number[][]} allowedSwaps
 * @return {number}
 */
const minimumHammingDistance = function (source, target, allowedSwaps) {
  const len = source.length
  const hashMap = {}
  let diff = 0
  const find = (union, node) => {
    if (union[node] === node) {
      return node
    }
    // eslint-disable-next-line no-return-assign
    return union[node] = find(union, union[node])
  }
  const union = new Array(len).fill(0)
  for (let i = 0; i < len; i++) {
    union[i] = i
  }
  for (let i = 0; i < allowedSwaps.length; i++) {
    const swap = allowedSwaps[i]
    const indexA = swap[0]
    const indexB = swap[1]
    const parentA = find(union, indexA)
    const parentB = find(union, indexB)
    if (parentA !== parentB) {
      union[parentA] = parentB
    }
  }
  for (let i = 0; i < len; i++) {
    const num = source[i]
    const root = find(union, i)
    if (!hashMap[root]) {
      hashMap[root] = {}
    }
    const store = hashMap[root]
    if (store[num]) {
      store[num]++
    } else {
      store[num] = 1
    }
  }
  for (let i = 0; i < len; i++) {
    const num = target[i]
    const root = find(union, i)
    const store = hashMap[root]

    if (store[num] > 0) {
      store[num]--
    } else {
      diff++
    }
  }
  return diff
}

export { minimumHammingDistance }
