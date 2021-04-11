import { minSideJumps } from './minSideJumps'

describe('minSideJumps', function () {
  it('test case 1', function () {
    const obstacles = [0, 1, 2, 3, 0]

    const result = 2
    expect(minSideJumps(obstacles)).toEqual(result)
  })
  it('test case 2', function () {
    const obstacles = [0, 1, 1, 3, 3, 0]

    const result = 0
    expect(minSideJumps(obstacles)).toEqual(result)
  })
  it('test case 3', function () {
    const obstacles = [0, 2, 1, 0, 3, 0]

    const result = 2
    expect(minSideJumps(obstacles)).toEqual(result)
  })
})
