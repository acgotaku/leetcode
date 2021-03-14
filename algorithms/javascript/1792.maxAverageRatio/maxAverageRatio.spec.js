import { maxAverageRatio } from './maxAverageRatio'

describe('maxAverageRatio', function () {
  it('test case 1', function () {
    const classes = [[1, 2], [3, 5], [2, 2]]
    const extraStudents = 2
    const result = 0.78333
    expect(maxAverageRatio(classes, extraStudents)).toEqual(result)
  })
  it('test case 2', function () {
    const classes = [[2, 4], [3, 9], [4, 5], [2, 10]]
    const extraStudents = 4
    const result = 0.53485
    expect(maxAverageRatio(classes, extraStudents)).toEqual(result)
  })
})
