import { largestNumber } from './largestNumber'

describe('largestNumber', function () {
  it('test case 1', function () {
    const nums = [10, 2]
    const result = '210'

    expect(largestNumber(nums)).toEqual(result)
  })
  it('test case 2', function () {
    const nums = [3, 30, 34, 5, 9]
    const result = '9534330'

    expect(largestNumber(nums)).toEqual(result)
  })
  it('test case 3', function () {
    const nums = [1, 1, 2]
    const result = '211'

    expect(largestNumber(nums)).toEqual(result)
  })
  it('test case 4', function () {
    const nums = [10]
    const result = '10'

    expect(largestNumber(nums)).toEqual(result)
  })
  it('test case 5', function () {
    const nums = [0, 0]
    const result = '0'

    expect(largestNumber(nums)).toEqual(result)
  })
  it('test case 6', function () {
    const nums = [999999998, 999999997, 999999999]
    const result = '999999999999999998999999997'

    expect(largestNumber(nums)).toEqual(result)
  })
})
