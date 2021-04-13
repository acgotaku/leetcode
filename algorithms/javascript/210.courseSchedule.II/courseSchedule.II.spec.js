import { findOrder } from './courseSchedule.II'

describe('findOrder', function () {
  it('test case 1', function () {
    const numCourses = 2
    const prerequisites = [[1, 0]]
    const result = [0, 1]
    expect(findOrder(numCourses, prerequisites)).toEqual(result)
  })
  it('test case 2', function () {
    const numCourses = 4
    const prerequisites = [[1, 0], [2, 0], [3, 1], [3, 2]]
    const result = [0, 1, 2, 3]
    expect(findOrder(numCourses, prerequisites)).toEqual(result)
  })
  it('test case 3', function () {
    const numCourses = 1
    const prerequisites = []
    const result = [0]
    expect(findOrder(numCourses, prerequisites)).toEqual(result)
  })
  it('test case 4', function () {
    const numCourses = 3
    const prerequisites = [[1, 0], [1, 2], [0, 1]]
    const result = []
    expect(findOrder(numCourses, prerequisites)).toEqual(result)
  })
  it('test case 5', function () {
    const numCourses = 2
    const prerequisites = [[0, 1]]
    const result = [1, 0]
    expect(findOrder(numCourses, prerequisites)).toEqual(result)
  })
})
