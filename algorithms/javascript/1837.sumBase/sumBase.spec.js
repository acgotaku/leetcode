import { sumBase } from './sumBase'

describe('sumBase', function () {
  it('test case 1', function () {
    const n = 34
    const k = 6

    const result = 9
    expect(sumBase(n, k)).toEqual(result)
  })
  it('test case 2', function () {
    const n = 10
    const k = 10

    const result = 1
    expect(sumBase(n, k)).toEqual(result)
  })
})
