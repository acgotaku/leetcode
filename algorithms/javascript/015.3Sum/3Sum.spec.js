import { threeSum } from './3Sum'

describe('threeSum', function () {
  it('threeSum test case 1', function () {
    const s = [-1, 0, 1, 2, -1, -4]
    const result = [
      [-1, 0, 1],
      [-1, -1, 2]
    ]
    expect(threeSum(s).sort()).toEqual(result.sort())
  })
  it('threeSum test case 2', function () {
    const s = [-1, 0, 1, 2, -1, -4, 8, -1, 1, 8]
    const result = [
      [-1, 0, 1],
      [-1, -1, 2]
    ]
    expect(threeSum(s).sort()).toEqual(result.sort())
  })
})
