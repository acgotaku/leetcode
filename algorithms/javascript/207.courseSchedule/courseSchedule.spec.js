import { canFinish } from './courseSchedule'

describe('canFinish', function () {
  it('test case 1', function () {
    const numCourses = 2
    const prerequisites = [[1, 0]]
    const result = true
    expect(canFinish(numCourses, prerequisites)).toEqual(result)
  })
  it('test case 2', function () {
    const numCourses = 2
    const prerequisites = [[1, 0], [0, 1]]
    const result = false
    expect(canFinish(numCourses, prerequisites)).toEqual(result)
  })
  it('test case 3', function () {
    const numCourses = 3
    const prerequisites = [[1, 0], [1, 2], [0, 1]]
    const result = false
    expect(canFinish(numCourses, prerequisites)).toEqual(result)
  })
})
