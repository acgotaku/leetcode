// Source : https://leetcode.com/problems/number-of-orders-in-the-backlog/
// Author : acgotaku311
// Date   : 2021-03-21

import { MaxPriorityQueue, MinPriorityQueue } from '@datastructures-js/priority-queue'

/**
 * @param {number[][]} orders
 * @return {number}
 */
const getNumberOfBacklogOrders = function (orders) {
  const mod = Math.pow(10, 9) + 7
  let count = 0
  const buyQueue = new MaxPriorityQueue({ priority: (order) => order.price })
  const sellQueue = new MinPriorityQueue({ priority: (order) => order.price })
  const sell = (buyOrder) => {
    if (!sellQueue.isEmpty() && sellQueue.front().element.price <= buyOrder.price) {
      const sellOrder = sellQueue.dequeue()
      if (sellOrder.element.amount > buyOrder.amount) {
        sellQueue.enqueue({
          price: sellOrder.element.price,
          amount: sellOrder.element.amount - buyOrder.amount
        })
      } else if (sellOrder.element.amount < buyOrder.amount) {
        sell({
          price: buyOrder.price,
          amount: buyOrder.amount - sellOrder.element.amount
        })
      }
    } else {
      buyQueue.enqueue(buyOrder)
    }
  }
  const buy = (sellOrder) => {
    if (!buyQueue.isEmpty() && buyQueue.front().element.price >= sellOrder.price) {
      const buyOrder = buyQueue.dequeue()
      if (buyOrder.element.amount > sellOrder.amount) {
        buyQueue.enqueue({
          price: buyOrder.element.price,
          amount: buyOrder.element.amount - sellOrder.amount
        })
      } else if (buyOrder.element.amount < sellOrder.amount) {
        buy({
          price: sellOrder.price,
          amount: sellOrder.amount - buyOrder.element.amount
        })
      }
    } else {
      sellQueue.enqueue(sellOrder)
    }
  }
  orders.forEach(order => {
    const price = order[0]
    const amount = order[1]
    const type = order[2]
    if (type === 0) {
      if (sellQueue.isEmpty()) {
        buyQueue.enqueue({
          price,
          amount
        })
      } else {
        sell({
          price,
          amount
        })
      }
    } else {
      if (buyQueue.isEmpty()) {
        sellQueue.enqueue({
          price,
          amount
        })
      } else {
        buy({
          price,
          amount
        })
      }
    }
  })

  const buyArray = buyQueue.toArray()
  buyArray.forEach(order => {
    count = (count + order.element.amount) % mod
  })

  const sellArray = sellQueue.toArray()
  sellArray.forEach(order => {
    count = (count + order.element.amount) % mod
  })

  return count
}
export { getNumberOfBacklogOrders }
