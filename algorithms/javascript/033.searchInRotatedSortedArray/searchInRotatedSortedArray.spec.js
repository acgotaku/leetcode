import { search } from './searchInRotatedSortedArray'

describe('search', function () {
  it('search test case 1', function () {
    const nums = [4, 5, 6, 7, 0, 1, 2]
    const target = 1
    expect(search(nums, target)).toEqual(5)
  })
  it('search test case 2', function () {
    const nums = [10, 5, 6, 7, 8, 9]
    const target = 8
    expect(search(nums, target)).toEqual(4)
  })
  it('search test case 3', function () {
    const nums = [10, 5, 6, 7, 8, 9]
    const target = 11
    expect(search(nums, target)).toEqual(-1)
  })
  it('search test case 4', function () {
    const nums = [6, 7, 8, 9, 10, 11, 12, 13, 5]
    const target = 7
    expect(search(nums, target)).toEqual(1)
  })
})
