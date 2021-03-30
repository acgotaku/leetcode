// Source : https://leetcode.com/problems/count-primes/
// Author : acgotaku311
// Date   : 2021-03-30

/** ********************************************************************************
 *
 * Description:
 * Count the number of prime numbers less than a non-negative number, n.
 *
 **********************************************************************************/

/**
 * @param {number} n
 * @return {number}
 */
const countPrimes = function (n) {
  let count = 0
  const isPrime = (num) => {
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) {
        return false
      }
    }
    return true
  }

  for (let i = 2; i < n; i++) {
    count += isPrime(i)
  }

  return count
}

export { countPrimes }
