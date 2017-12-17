import { jump } from './jumpGame.II'

describe('jumpGame.II', function () {
  it('jumpGame.II test case 1', function () {
    const nums = [2, 3, 1, 1, 4]
    const result = 2
    expect(jump(nums)).toEqual(result)
  })
  it('jumpGame.II test case 2', function () {
    const nums = [2, 3, 1]
    const result = 1
    expect(jump(nums)).toEqual(result)
  })
  it('jumpGame.II test case 3', function () {
    const nums = [1, 2, 1, 1, 1]
    const result = 3
    expect(jump(nums)).toEqual(result)
  })
  it('jumpGame.II test case 4', function () {
    const nums = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 1, 0]
    const result = 2
    expect(jump(nums)).toEqual(result)
  })
})
