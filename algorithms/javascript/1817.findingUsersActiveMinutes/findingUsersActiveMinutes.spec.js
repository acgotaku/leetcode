import { findingUsersActiveMinutes } from './findingUsersActiveMinutes'

describe('findingUsersActiveMinutes', function () {
  it('test case 1', function () {
    const logs = [[0, 5], [1, 2], [0, 2], [0, 5], [1, 3]]
    const k = 5

    const result = [0, 2, 0, 0, 0]
    expect(findingUsersActiveMinutes(logs, k)).toEqual(result)
  })
  it('test case 2', function () {
    const logs = [[1, 1], [2, 2], [2, 3]]
    const k = 4

    const result = [1, 1, 0, 0]
    expect(findingUsersActiveMinutes(logs, k)).toEqual(result)
  })
})
