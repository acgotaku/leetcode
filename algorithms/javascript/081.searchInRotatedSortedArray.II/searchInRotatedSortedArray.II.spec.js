import { search } from './searchInRotatedSortedArray.II'

describe('search', function () {
  it('test case 1', function () {
    const nums = [2, 5, 6, 0, 0, 1, 2]
    const target = 0
    expect(search(nums, target)).toEqual(true)
  })
  it('test case 2', function () {
    const nums = [2, 5, 6, 0, 0, 1, 2]
    const target = 3
    expect(search(nums, target)).toEqual(false)
  })
  it('test case 3', function () {
    const nums = [3, 3, 3, 4, 5, 6, 3, 3]
    const target = 3
    expect(search(nums, target)).toEqual(true)
  })
  it('test case 4', function () {
    const nums = [9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9]
    const target = 8
    expect(search(nums, target)).toEqual(true)
  })
  it('test case 5', function () {
    const nums = [1, 3]
    const target = 3
    expect(search(nums, target)).toEqual(true)
  })
  it('test case 6', function () {
    const nums = [3, 1, 1]
    const target = 3
    expect(search(nums, target)).toEqual(true)
  })
  it('test case 7', function () {
    const nums = [2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 1]
    const target = 3
    expect(search(nums, target)).toEqual(true)
  })
})
