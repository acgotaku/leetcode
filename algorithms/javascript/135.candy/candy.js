// Source : https://leetcode.com/problems/candy/
// Author : acgotaku311
// Date   : 2021-01-21

/** ********************************************************************************
*
* There are N children standing in a line. Each child is assigned a rating value.
*
* You are giving candies to these children subjected to the following requirements:
*
* Each child must have at least one candy.
* Children with a higher rating get more candies than their neighbors.
*
* What is the minimum candies you must give?
*
*
**********************************************************************************/

/**
 * @param {number[]} ratings
 * @return {number}
 */
const candy = function (ratings) {
  const len = ratings.length
  const candies = new Array(len).fill(1)
  for (let i = 0; i < len - 1; i++) {
    if (ratings[i + 1] > ratings[i]) {
      candies[i + 1] = candies[i] + 1
    }
  }
  for (let i = len - 1; i > 0; i--) {
    if (ratings[i - 1] > ratings[i] && candies[i - 1] < candies[i] + 1) {
      candies[i - 1] = candies[i] + 1
    }
  }
  return candies.reduce((acc, current) => acc + current, 0)
}

export { candy }
