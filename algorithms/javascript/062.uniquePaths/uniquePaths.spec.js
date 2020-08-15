import { uniquePaths } from './uniquePaths'

describe('uniquePaths', function () {
  it('uniquePaths test case 1', function () {
    const m = 3
    const n = 2
    expect(uniquePaths(m, n)).toEqual(3)
  })
  it('uniquePaths test case 2', function () {
    const m = 7
    const n = 3
    expect(uniquePaths(m, n)).toEqual(28)
  })
})
