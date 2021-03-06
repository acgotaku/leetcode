import { maximumGap } from './maximumGap'

describe('maximumGap', function () {
  it('test case 1', function () {
    const nums = [3, 6, 9, 1]
    const result = 3

    expect(maximumGap(nums)).toEqual(result)
  })
  it('test case 2', function () {
    const nums = [10]
    const result = 0

    expect(maximumGap(nums)).toEqual(result)
  })
})
