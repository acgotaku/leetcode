import { minimumEffortPath } from './minimumEffortPath'

describe('minimumEffortPath', function () {
  it('test case 1', function () {
    const heights = [[1, 2, 2], [3, 8, 2], [5, 3, 5]]
    const result = 2

    expect(minimumEffortPath(heights)).toEqual(result)
  })
  it('test case 2', function () {
    const heights = [[3]]
    const result = 0

    expect(minimumEffortPath(heights)).toEqual(result)
  })
  it('test case 3', function () {
    const heights = [[1, 2, 3], [3, 8, 4], [5, 3, 5]]
    const result = 1

    expect(minimumEffortPath(heights)).toEqual(result)
  })
  it('test case 4', function () {
    const heights = [[1, 2, 1, 1, 1], [1, 2, 1, 2, 1], [1, 2, 1, 2, 1], [1, 2, 1, 2, 1], [1, 1, 1, 2, 1]]
    const result = 0

    expect(minimumEffortPath(heights)).toEqual(result)
  })
  it('test case 5', function () {
    const heights = [[4, 3, 4, 10, 5, 5, 9, 2], [10, 8, 2, 10, 9, 7, 5, 6], [5, 8, 10, 10, 10, 7, 4, 2], [5, 1, 3, 1, 1, 3, 1, 9], [6, 4, 10, 6, 10, 9, 4, 6]]
    const result = 5

    expect(minimumEffortPath(heights)).toEqual(result)
  })
})
