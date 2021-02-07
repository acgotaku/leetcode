import { check } from './check'

describe('check', function () {
  it('test case 1', function () {
    const nums = [3, 4, 5, 1, 2]
    const result = true
    expect(check(nums)).toEqual(result)
  })
  it('test case 2', function () {
    const nums = [2, 1, 3, 4]
    const result = false
    expect(check(nums)).toEqual(result)
  })
  it('test case 3', function () {
    const nums = [1, 2, 3]
    const result = true
    expect(check(nums)).toEqual(result)
  })
  it('test case 4', function () {
    const nums = [1, 1, 1]
    const result = true
    expect(check(nums)).toEqual(result)
  })
  it('test case 5', function () {
    const nums = [2, 1]
    const result = true
    expect(check(nums)).toEqual(result)
  })
})
