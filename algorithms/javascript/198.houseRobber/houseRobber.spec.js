import { rob } from './houseRobber'

describe('rob', function () {
  it('test case 1', function () {
    const num = [1, 2, 3, 1]

    const result = 4
    expect(rob(num)).toEqual(result)
  })
  it('test case 2', function () {
    const num = [2, 7, 9, 3, 1]

    const result = 12
    expect(rob(num)).toEqual(result)
  })
  it('test case 3', function () {
    const num = []

    const result = 0
    expect(rob(num)).toEqual(result)
  })
  it('test case 4', function () {
    const num = [1]

    const result = 1
    expect(rob(num)).toEqual(result)
  })
})
