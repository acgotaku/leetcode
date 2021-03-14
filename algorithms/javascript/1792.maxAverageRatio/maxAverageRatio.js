// Source : https://leetcode.com/problems/find-center-of-star-graph/
// Author : acgotaku311
// Date   : 2021-03-14

import { MaxPriorityQueue } from '@datastructures-js/priority-queue'

/**
 * @param {number[][]} classes
 * @param {number} extraStudents
 * @return {number}
 */
const maxAverageRatio = function (classes, extraStudents) {
  let total = 0
  const queue = new MaxPriorityQueue({ priority: (room) => room.profit })
  const profit = (pass, total) => {
    return (pass + 1) / (total + 1) - pass / total
  }

  for (let i = 0; i < classes.length; i++) {
    queue.enqueue({
      profit: profit(classes[i][0], classes[i][1]),
      room: [classes[i][0], classes[i][1]]
    })
    total += classes[i][0] / classes[i][1]
  }

  while (extraStudents > 0) {
    extraStudents--
    const maxProfit = queue.dequeue()
    total += maxProfit.element.profit
    queue.enqueue({
      profit: profit(maxProfit.element.room[0] + 1, maxProfit.element.room[1] + 1),
      room: [maxProfit.element.room[0] + 1, maxProfit.element.room[1] + 1]
    })
  }
  return Number((total / classes.length).toFixed(5))
}
export { maxAverageRatio }
