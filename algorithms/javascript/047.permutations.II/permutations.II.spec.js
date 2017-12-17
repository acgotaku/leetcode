import { permuteUnique } from './permutations.II'

describe('permutations', function () {
  it('permutations test case 1', function () {
    const nums = [1, 1, 2]
    const result = [
      [1, 1, 2],
      [1, 2, 1],
      [2, 1, 1]
    ]
    expect(permuteUnique(nums).sort()).toEqual(result.sort())
  })
  it('permutations test case 2', function () {
    const nums = [2, 2, 1, 1]
    const result = [
      [1, 1, 2, 2],
      [1, 2, 1, 2],
      [1, 2, 2, 1],
      [2, 1, 1, 2],
      [2, 1, 2, 1],
      [2, 2, 1, 1]
    ]
    expect(permuteUnique(nums).sort()).toEqual(result.sort())
  })
})
