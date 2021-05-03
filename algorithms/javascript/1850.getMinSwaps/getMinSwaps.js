// Source : https://leetcode.com/problems/minimum-adjacent-swaps-to-reach-the-kth-smallest-number/
// Author : acgotaku311
// Date   : 2021-05-03

const nextPermutation = (num) => {
  const len = num.length
  let i = len - 2
  while (i >= 0 && num[i] >= num[i + 1]) {
    i--
  }
  if (i >= 0) {
    let j = len - 1
    while (j >= 0 && num[j] <= num[i]) {
      j--
    }
    [num[j], num[i]] = [num[i], num[j]]
  }
  return num.slice(0, i + 1).concat(num.slice(i + 1, len).reverse())
}
/**
 * @param {string} num
 * @param {number} k
 * @return {number}
 */
const getMinSwaps = function (num, k) {
  let numArray = num.split('')
  const len = num.length
  let count = 0
  for (let c = 0; c < k; c++) {
    numArray = nextPermutation(numArray)
  }

  for (let i = 0; i < len; i++) {
    if (numArray[i] !== num[i]) {
      for (let j = i + 1; j < len; j++) {
        if (numArray[j] === num[i]) {
          for (let c = j - 1; c >= i; --c) {
            count++;
            [numArray[c], numArray[c + 1]] = [numArray[c + 1], numArray[c]]
          }
          break
        }
      }
    }
  }

  return count
}

export { getMinSwaps }
