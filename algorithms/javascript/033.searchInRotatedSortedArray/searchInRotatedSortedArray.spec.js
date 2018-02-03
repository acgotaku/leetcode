import { search } from './searchInRotatedSortedArray'

describe('search', function () {
  it('search test case 1', function () {
    const nums = [4, 5, 6, 7, 0, 1, 2]
    const target = 1
    expect(search(nums, target)).toEqual(5)
  })
})
