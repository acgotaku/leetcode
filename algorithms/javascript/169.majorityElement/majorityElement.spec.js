import { majorityElement } from './majorityElement'

describe('majorityElement', function () {
  it('test case 1', function () {
    const nums = [3, 2, 3]
    const result = 3

    expect(majorityElement(nums)).toEqual(result)
  })
  it('test case 2', function () {
    const nums = [2, 2, 1, 1, 1, 2, 2]
    const result = 2

    expect(majorityElement(nums)).toEqual(result)
  })
  it('test case 3', function () {
    const nums = [2, 2, 1, 1, 1, 1, 1, 1, 1, 12, 2]
    const result = 1

    expect(majorityElement(nums)).toEqual(result)
  })
})
