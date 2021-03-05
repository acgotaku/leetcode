import { findPeakElement } from './findPeakElement'

describe('findPeakElement', function () {
  it('test case 1', function () {
    const nums = [1, 2, 3, 1]
    const result = 2

    expect(findPeakElement(nums)).toEqual(result)
  })
  it('test case 2', function () {
    const nums = [1, 2, 1, 3, 5, 6, 4]
    const result = 1

    expect(findPeakElement(nums)).toEqual(result)
  })
})
