import { maxAscendingSum } from './maxAscendingSum'

describe('maxAscendingSum', function () {
  it('test case 1', function () {
    const nums = [10, 20, 30, 5, 10, 50]

    const result = 65
    expect(maxAscendingSum(nums)).toEqual(result)
  })
  it('test case 2', function () {
    const nums = [10, 20, 30, 40, 50]

    const result = 150
    expect(maxAscendingSum(nums)).toEqual(result)
  })
  it('test case 3', function () {
    const nums = [12, 17, 15, 13, 10, 11, 12]

    const result = 33
    expect(maxAscendingSum(nums)).toEqual(result)
  })
  it('test case 4', function () {
    const nums = [100, 10, 1]

    const result = 100
    expect(maxAscendingSum(nums)).toEqual(result)
  })
})
