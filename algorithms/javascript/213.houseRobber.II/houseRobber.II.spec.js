import { rob } from './houseRobber.II'

describe('rob', function () {
  it('test case 1', function () {
    const num = [2, 3, 2]

    const result = 3
    expect(rob(num)).toEqual(result)
  })
  it('test case 2', function () {
    const num = [1, 2, 3, 1]

    const result = 4
    expect(rob(num)).toEqual(result)
  })
  it('test case 3', function () {
    const num = [0]

    const result = 0
    expect(rob(num)).toEqual(result)
  })
  it('test case 4', function () {
    const num = [3, 8]

    const result = 8
    expect(rob(num)).toEqual(result)
  })
})
