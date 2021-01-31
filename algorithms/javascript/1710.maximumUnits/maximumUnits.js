// Source : https://leetcode.com/problems/maximum-units-on-a-truck/
// Author : acgotaku311
// Date   : 2021-01-03

/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
const maximumUnits = function (boxTypes, truckSize) {
  let unit = 0
  boxTypes = boxTypes.sort((a, b) => a[1] - b[1])

  while (truckSize > 0 && boxTypes.length > 0) {
    const box = boxTypes.pop()
    const num = Math.min(truckSize, box[0])
    unit += num * box[1]
    truckSize -= num
  }

  return unit
}

export { maximumUnits }
