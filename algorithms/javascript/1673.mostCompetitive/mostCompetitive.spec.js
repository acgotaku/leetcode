import { mostCompetitive } from './mostCompetitive'

describe('mostCompetitive', function () {
  it('test case 1', function () {
    const nums = [3, 5, 2, 6]
    const k = 2
    const result = [2, 6]

    expect(mostCompetitive(nums, k)).toEqual(result)
  })
  it('test case 2', function () {
    const nums = [2, 4, 3, 3, 5, 4, 9, 6]
    const k = 4
    const result = [2, 3, 3, 4]

    expect(mostCompetitive(nums, k)).toEqual(result)
  })
  it('test case 3', function () {
    const nums = [71, 18, 52, 29, 55, 73, 24, 42, 66, 8, 80, 2]
    const k = 3
    const result = [8, 80, 2]

    expect(mostCompetitive(nums, k)).toEqual(result)
  })
})
