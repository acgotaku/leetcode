import { subsetsWithDup } from './subsets.II'

describe('subsetsWithDup', function () {
  it('test case 1', function () {
    const nums = [1, 2, 2]
    const result = [
      [2],
      [1],
      [1, 2, 2],
      [2, 2],
      [1, 2],
      []
    ]
    expect(subsetsWithDup(nums).sort()).toEqual(result.sort())
  })
})
