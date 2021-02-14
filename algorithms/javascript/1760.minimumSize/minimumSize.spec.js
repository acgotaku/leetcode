import { minimumSize } from './minimumSize'

describe('minimumSize', function () {
  it('test case 1', function () {
    const nums = [9]
    const maxOperations = 2
    const result = 3
    expect(minimumSize(nums, maxOperations)).toEqual(result)
  })
  it('test case 2', function () {
    const nums = [2, 4, 8, 2]
    const maxOperations = 4
    const result = 2
    expect(minimumSize(nums, maxOperations)).toEqual(result)
  })
  it('test case 3', function () {
    const nums = [7, 17]
    const maxOperations = 2
    const result = 7
    expect(minimumSize(nums, maxOperations)).toEqual(result)
  })
  it('test case 3', function () {
    const nums = [1]
    const maxOperations = 1
    const result = 1
    expect(minimumSize(nums, maxOperations)).toEqual(result)
  })
})
