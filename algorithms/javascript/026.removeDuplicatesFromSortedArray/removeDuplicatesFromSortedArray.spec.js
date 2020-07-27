import { removeDuplicates } from './removeDuplicatesFromSortedArray'

describe('removeDuplicates', function () {
  it('removeDuplicates test case 1', function () {
    const nums = [1, 1, 2]
    expect(removeDuplicates(nums)).toEqual(2)
  })
  it('removeDuplicates test case 2', function () {
    const nums = [1]
    expect(removeDuplicates(nums)).toEqual(1)
  })
})
