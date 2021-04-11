import { arraySign } from './arraySign'

describe('arraySign', function () {
  it('test case 1', function () {
    const nums = [-1, -2, -3, -4, 3, 2, 1]

    const result = 1
    expect(arraySign(nums)).toEqual(result)
  })
  it('test case 2', function () {
    const nums = [1, 5, 0, 2, -3]

    const result = 0
    expect(arraySign(nums)).toEqual(result)
  })
  it('test case 3', function () {
    const nums = [-1, 1, -1, 1, -1]

    const result = -1
    expect(arraySign(nums)).toEqual(result)
  })
})
