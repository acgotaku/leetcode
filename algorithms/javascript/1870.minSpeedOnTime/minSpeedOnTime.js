// Source : https://leetcode.com/problems/minimum-speed-to-arrive-on-time/
// Author : acgotaku311
// Date   : 2021-05-24

/**
 * @param {number[]} dist
 * @param {number} hour
 * @return {number}
 */
const minSpeedOnTime = function (dist, hour) {
  const len = dist.length
  let maxSpeed = 1
  let minSpeed = 1

  if (hour < len - 1) {
    return -1
  }

  const rest = hour - Math.floor(hour)
  for (let i = 0; i < len; i++) {
    maxSpeed = Math.max(maxSpeed, dist[i])
    if (i === len - 1 && rest > 0) {
      maxSpeed = Math.max(maxSpeed, dist[i] / rest)
    }
  }

  while (minSpeed < maxSpeed) {
    const speed = Number.parseInt((minSpeed + maxSpeed) / 2)
    let usedHour = 0
    for (let i = 0; i < len; i++) {
      usedHour = Math.ceil(usedHour) + dist[i] / speed
    }

    if (usedHour > hour) {
      minSpeed = speed + 1
    } else {
      maxSpeed = speed
    }
  }

  return minSpeed
}
export { minSpeedOnTime }
