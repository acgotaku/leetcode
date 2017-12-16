import { combinationSum2 } from './combinationSum.II'

describe('combinationSum2', function () {
  it('combinationSum2 test case 1', function () {
    const candidates = [10, 1, 2, 7, 6, 1, 5]
    const target = 8
    const result = [
      [1, 1, 6],
      [1, 2, 5],
      [1, 7],
      [2, 6]
    ]
    expect(combinationSum2(candidates, target)).toEqual(result)
  })
})
