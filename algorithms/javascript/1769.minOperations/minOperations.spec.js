import { minOperations } from './minOperations'

describe('minOperations', function () {
  it('test case 1', function () {
    const boxes = '110'
    const result = [1, 1, 3]
    expect(minOperations(boxes)).toEqual(result)
  })
  it('test case 2', function () {
    const boxes = '001011'
    const result = [11, 8, 5, 4, 3, 4]
    expect(minOperations(boxes)).toEqual(result)
  })
})
