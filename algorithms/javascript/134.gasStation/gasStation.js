// Source : https://leetcode.com/problems/gas-station/
// Author : acgotaku311
// Date   : 2021-01-20

/** ********************************************************************************
*
* There are N gas stations along a circular route, where the amount of gas at station i is gas[i].
*
* You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from station i to
* its next station (i+1). You begin the journey with an empty tank at one of the gas stations.
*
* Return the starting gas station's index if you can travel around the circuit once, otherwise return -1.
*
* Note:
* The solution is guaranteed to be unique.
*
*
**********************************************************************************/

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
const canCompleteCircuit = function (gas, cost) {
  const len = gas.length
  for (let i = 0; i < len; i++) {
    let tank = gas[i]
    for (let j = 1; j <= len && tank >= 0; j++) {
      const next = (i + j) % len
      const cur = (i + j - 1) % len
      tank = tank - cost[cur]
      if (tank < 0) {
        break
      }
      if (next !== i) {
        tank = tank + gas[next]
      }
    }
    if (tank >= 0) {
      return i
    }
  }
  return -1
}

export { canCompleteCircuit }
