// Source : https://leetcode.com/problems/maximum-number-of-eaten-apples/
// Author : acgotaku311
// Date   : 2020-12-27

import { MinPriorityQueue } from '@datastructures-js/priority-queue'
/**
 * @param {number[]} apples
 * @param {number[]} days
 * @return {number}
 */
const eatenApples = function (apples, days) {
  let apple = 0
  const trees = new MinPriorityQueue({ priority: (tree) => tree.expired })
  for (let i = 0; i < apples.length; i++) {
    const appleCount = apples[i]
    const expired = i + days[i]
    while (!trees.isEmpty() && trees.front().element.expired <= i) {
      trees.dequeue()
    }
    if (appleCount > 0 && expired > i) {
      trees.enqueue({
        expired,
        appleCount
      })
    }
    if (!trees.isEmpty()) {
      const tree = trees.front()
      if (tree.element.appleCount > 1) {
        tree.element.appleCount--
        apple++
      } else {
        trees.dequeue()
        apple++
      }
    }
  }
  for (let i = apples.length; trees.isEmpty() === false; i++) {
    while (!trees.isEmpty() && trees.front().element.expired <= i) {
      trees.dequeue()
    }
    if (!trees.isEmpty()) {
      const tree = trees.front()
      if (tree.element.appleCount > 1) {
        tree.element.appleCount--
        apple++
      } else {
        trees.dequeue()
        apple++
      }
    }
  }

  return apple
}

export { eatenApples }
