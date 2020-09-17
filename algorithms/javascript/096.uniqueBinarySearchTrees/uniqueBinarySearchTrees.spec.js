import { numTrees } from './uniqueBinarySearchTrees'

describe('generateTrees', function () {
  it('test case 2', function () {
    const n = 3
    const result = 5
    expect(numTrees(n)).toEqual(result)
  })
})
