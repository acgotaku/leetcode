import { minimumJumps } from './minimumJumps'

describe('minimumJumps', function () {
  it('test case 1', function () {
    const forbidden = [14, 4, 18, 1, 15]
    const a = 3
    const b = 15
    const x = 9
    const result = 3

    expect(minimumJumps(forbidden, a, b, x)).toEqual(result)
  })
  it('test case 2', function () {
    const forbidden = [8, 3, 16, 6, 12, 20]
    const a = 15
    const b = 13
    const x = 11
    const result = -1

    expect(minimumJumps(forbidden, a, b, x)).toEqual(result)
  })
  it('test case 3', function () {
    const forbidden = [1, 6, 2, 14, 5, 17, 4]
    const a = 16
    const b = 9
    const x = 7
    const result = 2

    expect(minimumJumps(forbidden, a, b, x)).toEqual(result)
  })
  it('test case 4', function () {
    const forbidden = [118, 178, 152, 167, 100, 40, 74, 199, 186, 26, 73, 200, 127, 30, 124, 193, 84, 184, 36, 103, 149, 153, 9, 54, 154, 133, 95, 45, 198, 79, 157, 64, 122, 59, 71, 48, 177, 82, 35, 14, 176, 16, 108, 111, 6, 168, 31, 134, 164, 136, 72, 98]
    const a = 29
    const b = 98
    const x = 80
    const result = 121

    expect(minimumJumps(forbidden, a, b, x)).toEqual(result)
  })
})
