import { removeDuplicates } from './removeDuplicatesFromSortedArray.II'

describe('removeDuplicates', function () {
  it('test case 1', function () {
    const nums = [0, 0, 1, 1, 1, 1, 2, 3, 3]
    expect(removeDuplicates(nums)).toEqual(7)
  })
  it('test case 2', function () {
    const nums = [1, 1, 1, 2, 2, 3]
    expect(removeDuplicates(nums)).toEqual(5)
  })
  it('test case 3', function () {
    const nums = [1, 1]
    expect(removeDuplicates(nums)).toEqual(2)
  })
})
