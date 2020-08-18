import { plusOne } from './plusOne'

describe('plusOne', function () {
  it('plusOne test case 1', function () {
    const digits = [1, 2, 3]
    const result = [1, 2, 4]
    expect(plusOne(digits)).toEqual(result)
  })
  it('plusOne test case 2', function () {
    const digits = [1, 2, 9]
    const result = [1, 3, 0]
    expect(plusOne(digits)).toEqual(result)
  })
  it('plusOne test case 3', function () {
    const digits = [9, 9]
    const result = [1, 0, 0]
    expect(plusOne(digits)).toEqual(result)
  })
})
