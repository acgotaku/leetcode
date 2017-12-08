import { searchInsert } from './searchInsert'

describe('searchInsert', function () {
  const nums = [1, 3, 5, 6]
  it('searchInsert test case 1', function () {
    expect(searchInsert(nums, 5)).toBe(2)
  })

  it('searchInsert test case 2', function () {
    expect(searchInsert(nums, 2)).toBe(1)
  })
  it('searchInsert test case 3', function () {
    expect(searchInsert(nums, 7)).toBe(4)
  })
  it('searchInsert test case 4', function () {
    expect(searchInsert(nums, 0)).toBe(0)
  })
})
