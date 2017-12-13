import { combinationSum } from './combinationSum'

describe('combinationSum', function () {
  it('combinationSum test case 1', function () {
    const candidates = [2, 3, 6, 7]
    const target = 7
    const result = [
      [2, 2, 3],
      [7]
    ]
    expect(combinationSum(candidates, target)).toEqual(result)
  })
})
