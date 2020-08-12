import { permute } from './permutations'

describe('permutations', function () {
  it('permutations test case 1', function () {
    const nums = [1, 2, 3]
    const result = [
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 1, 2],
      [3, 2, 1]
    ]
    expect(permute(nums).sort()).toEqual(result.sort())
  })
  it('permutations test case 2', function () {
    const nums = []
    const result = []
    expect(permute(nums).sort()).toEqual(result.sort())
  })
  it('permutations test case 3', function () {
    const nums = [1]
    const result = [
      [1]
    ]
    expect(permute(nums).sort()).toEqual(result.sort())
  })
})
