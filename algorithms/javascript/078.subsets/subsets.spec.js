import { subsets } from './subsets'

describe('subsets', function () {
  it('test case 1', function () {
    const nums = [1, 2, 3]
    const result = [
      [3],
      [1],
      [2],
      [1, 2, 3],
      [1, 3],
      [2, 3],
      [1, 2],
      []
    ]
    expect(subsets(nums).sort()).toEqual(result.sort())
  })
})
