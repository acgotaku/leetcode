// Source : https://leetcode.com/problems/minimum-incompatibility/
// Author : acgotaku311
// Date   : 2020-12-11

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const minimumIncompatibility = function (nums, k) {
  const len = nums.length / k
  let result = Math.pow(2, 31) - 1
  const stack = []
  const dict = {}
  for (let i = 0; i < nums.length; i++) {
    const key = nums[i]
    if (dict[key]) {
      dict[key]++
    } else {
      dict[key] = 1
    }
  }

  if (Math.max(...Object.values(dict)) > k) {
    return -1
  }

  const getSum = (subset) => {
    let sum = 0
    subset.forEach(item => {
      sum += item[item.length - 1] - item[0]
    })
    return sum
  }

  const genSubset = (data, subset, sets) => {
    if (sets.length === k) {
      result = Math.min(getSum(sets), result)
      return
    }
    if (subset.length === len) {
      sets.push(subset)
      stack.push({
        data: data,
        sets: sets
      })
      return
    }
    const keys = Object.keys(data).map(x => Number(x)).sort((a, b) => a - b)

    for (let i = 0; i < keys.length; i++) {
      const key = keys[i]
      if (!subset.includes(key)) {
        const lastElement = subset[subset.length - 1] || 0
        if (key > lastElement) {
          subset.push(key)
          if (data[key] > 1) {
            data[key]--
          } else {
            delete data[key]
          }
          genSubset(Object.assign({}, data), subset.slice(), sets.slice())
          subset.pop()
          if (data[key]) {
            data[key]++
          } else {
            data[key] = 1
          }
        }
      }
    }
  }
  genSubset(Object.assign({}, dict), [], [])
  while (stack.length > 0) {
    const { data, sets } = stack.shift()
    genSubset(data, [], sets)
  }
  return result
}

export { minimumIncompatibility }
