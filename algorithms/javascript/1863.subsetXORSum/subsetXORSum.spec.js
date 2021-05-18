import { subsetXORSum } from './subsetXORSum'

describe('subsetXORSum', function () {
  it('test case 1', function () {
    const nums = [1, 3]

    const result = 6
    expect(subsetXORSum(nums)).toEqual(result)
  })
  it('test case 2', function () {
    const nums = [5, 1, 6]

    const result = 28
    expect(subsetXORSum(nums)).toEqual(result)
  })
  it('test case 3', function () {
    const nums = [3, 4, 5, 6, 7, 8]

    const result = 480
    expect(subsetXORSum(nums)).toEqual(result)
  })
})
