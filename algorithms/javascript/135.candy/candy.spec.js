import { candy } from './candy'

describe('candy', function () {
  it('test case 1', function () {
    const ratings = [1, 0, 2]
    const result = 5
    expect(candy(ratings)).toEqual(result)
  })
  it('test case 2', function () {
    const ratings = [1, 2, 2]
    const result = 4
    expect(candy(ratings)).toEqual(result)
  })
  it('test case 3', function () {
    const ratings = [1, 2, 87, 87, 87, 2, 1]
    const result = 13
    expect(candy(ratings)).toEqual(result)
  })
  it('test case 4', function () {
    const ratings = [1, 3, 4, 5, 2]
    const result = 11
    expect(candy(ratings)).toEqual(result)
  })
})
