// Source : https://leetcode.com/problems/single-threaded-cpu/
// Author : acgotaku311
// Date   : 2021-04-20

import { MinPriorityQueue } from '@datastructures-js/priority-queue'

/**
 * @param {number[][]} tasks
 * @return {number[]}
 */
const getOrder = function (tasks) {
  const len = tasks.length
  const result = []
  let time = 0
  let index = 0
  tasks = tasks.map((task, index) => {
    task.push(index)
    return task
  })
  tasks.sort((a, b) => { return a[0] - b[0] })
  const queue = new MinPriorityQueue({ priority: ([e, p, idx]) => p + 10 ** (-7) * (idx + 1) })
  for (let i = 0; i < len; i++) {
    if (queue.isEmpty()) {
      time = Math.max(time, tasks[index][0])
    }

    while (index < len && tasks[index][0] <= time) {
      queue.enqueue(tasks[index])
      index++
    }
    const minTask = queue.dequeue()
    time += minTask.element[1]
    result.push(minTask.element[2])
  }
  return result
}
export { getOrder }
