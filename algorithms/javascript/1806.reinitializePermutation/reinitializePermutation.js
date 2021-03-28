// Source : https://leetcode.com/problems/minimum-number-of-operations-to-reinitialize-a-permutation/
// Author : acgotaku311
// Date   : 2021-03-28

/**
 * @param {number} n
 * @return {number}
 */
const reinitializePermutation = function (n) {
  let prem = new Array(n).fill(0)
  const init = new Array(n).fill(0)
  let count = 0
  for (let i = 0; i < n; i++) {
    prem[i] = i
    init[i] = i
  }
  const arr = new Array(n).fill(0)
  do {
    for (let i = 0; i < n; i++) {
      if (i % 2 === 0) {
        arr[i] = prem[Number.parseInt(i / 2)]
      } else {
        arr[i] = prem[Number.parseInt(n / 2) + Number.parseInt((i - 1) / 2)]
      }
    }
    prem = arr.slice()
    count++
    if (init.join('') === prem.join('')) {
      return count
    }
  } while (true)
}
export { reinitializePermutation }
