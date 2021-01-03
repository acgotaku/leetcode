import { maximumUnits } from './maximumUnits'

describe('maximumUnits', function () {
  it('test case 1', function () {
    const boxTypes = [[1, 3], [2, 2], [3, 1]]
    const truckSize = 4

    const result = 8

    expect(maximumUnits(boxTypes, truckSize)).toEqual(result)
  })
  it('test case 2', function () {
    const boxTypes = [[5, 10], [2, 5], [4, 7], [3, 9]]
    const truckSize = 10

    const result = 91

    expect(maximumUnits(boxTypes, truckSize)).toEqual(result)
  })
  it('test case 3', function () {
    const boxTypes = [[1, 3], [5, 5], [2, 5], [4, 2], [4, 1], [3, 1], [2, 2], [1, 3], [2, 5], [3, 2]]
    const truckSize = 35

    const result = 76

    expect(maximumUnits(boxTypes, truckSize)).toEqual(result)
  })
})
