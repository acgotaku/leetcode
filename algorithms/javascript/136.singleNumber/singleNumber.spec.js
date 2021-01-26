import { singleNumber } from './singleNumber'

describe('candy', function () {
  it('test case 1', function () {
    const nums = [2, 2, 1]
    const result = 1
    expect(singleNumber(nums)).toEqual(result)
  })
  it('test case 2', function () {
    const nums = [4, 1, 2, 1, 2]
    const result = 4
    expect(singleNumber(nums)).toEqual(result)
  })
  it('test case 3', function () {
    const nums = [1]
    const result = 1
    expect(singleNumber(nums)).toEqual(result)
  })
})
