import { containsDuplicate } from './containsDuplicate'

describe('containsDuplicate', function () {
  it('test case 1', function () {
    const nums = [1, 2, 3, 1]

    const result = true
    expect(containsDuplicate(nums)).toEqual(result)
  })
  it('test case 2', function () {
    const nums = [1, 2, 3, 4]

    const result = false
    expect(containsDuplicate(nums)).toEqual(result)
  })
  it('test case 3', function () {
    const nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]

    const result = true
    expect(containsDuplicate(nums)).toEqual(result)
  })
})
