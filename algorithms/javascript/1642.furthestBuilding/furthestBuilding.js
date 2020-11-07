// Source : https://leetcode.com/problems/path-with-minimum-effort/
// Author : acgotaku311
// Date   : 2020-10-25

/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */

const canReach = (heights, bricks, ladders) => {
  const steps = []
  for (let i = 0; i < heights.length - 1; i++) {
    const step = heights[i + 1] - heights[i]
    if (step > 0) {
      steps.push(step)
    }
  }
  steps.sort((a, b) => b - a)
  while (steps.length > 0) {
    const step = steps.pop()
    if (bricks >= step) {
      bricks -= step
    } else if (ladders > 0) {
      ladders -= 1
    } else {
      return false
    }
  }
  return true
}

const furthestBuilding = function (heights, bricks, ladders) {
  let result = 0
  let left = 0
  let right = heights.length - 1
  while (left <= right) {
    const mid = Number.parseInt((left + right) / 2)
    if (canReach(heights.slice(0, mid + 1), bricks, ladders)) {
      result = mid
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return result
}

export { furthestBuilding }
