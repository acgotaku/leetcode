// Source : https://leetcode.com/problems/partitioning-into-minimum-number-of-deci-binary-numbers/
// Author : acgotaku311
// Date   : 2020-12-13

/**
 * @param {string} n
 * @return {number}
 */
const minPartitions = function (n) {
  let count = 0
  const isValidBinary = (str) => {
    str = str.toString()
    for (let i = 0; i < str.length; i++) {
      if (str[i] === '0' || str[i] === '1') {
        continue
      } else {
        return false
      }
    }
    return true
  }

  while (!isValidBinary(n)) {
    const arr = []
    for (let i = 0; i < n.length; i++) {
      const num = Number(n[i])
      if (num > 1) {
        arr.push(num - 1)
      } else {
        if (arr[0] > 0) {
          arr.push(0)
        }
      }
    }
    n = arr.join('')
    count++
  }

  return count + 1
}

export { minPartitions }
