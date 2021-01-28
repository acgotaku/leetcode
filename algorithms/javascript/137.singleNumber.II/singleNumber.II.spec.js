import { singleNumber } from './singleNumber.II'

describe('candy', function () {
  it('test case 1', function () {
    const nums = [2, 2, 3, 2]
    const result = 3
    expect(singleNumber(nums)).toEqual(result)
  })
  it('test case 2', function () {
    const nums = [0, 1, 0, 1, 0, 1, 99]
    const result = 99
    expect(singleNumber(nums)).toEqual(result)
  })
})
