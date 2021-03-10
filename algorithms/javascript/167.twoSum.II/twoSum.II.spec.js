import { twoSum } from './twoSum.II'

describe('twoSum', function () {
  it('test case 1', function () {
    const numbers = [2, 7, 11, 15]
    const target = 9

    const result = [1, 2]

    expect(twoSum(numbers, target)).toEqual(result)
  })
  it('test case 2', function () {
    const numbers = [2, 3, 4]
    const target = 6

    const result = [1, 3]

    expect(twoSum(numbers, target)).toEqual(result)
  })
  it('test case 3', function () {
    const numbers = [-1, 0]
    const target = -1

    const result = [1, 2]

    expect(twoSum(numbers, target)).toEqual(result)
  })
  it('test case 4', function () {
    const numbers = [2, 7, 11, 15]
    const target = 18

    const result = [2, 3]

    expect(twoSum(numbers, target)).toEqual(result)
  })
})
