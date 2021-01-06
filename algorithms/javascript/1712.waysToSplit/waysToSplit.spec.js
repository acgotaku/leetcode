import { waysToSplit } from './waysToSplit'

describe('waysToSplit', function () {
  it('test case 1', function () {
    const nums = [1, 1, 1]

    const result = 1

    expect(waysToSplit(nums)).toEqual(result)
  })
  it('test case 2', function () {
    const nums = [1, 2, 2, 2, 5, 0]

    const result = 3

    expect(waysToSplit(nums)).toEqual(result)
  })
  it('test case 3', function () {
    const nums = [3, 2, 1]

    const result = 0

    expect(waysToSplit(nums)).toEqual(result)
  })
})
