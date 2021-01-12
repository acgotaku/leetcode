import { decode } from './decode'

describe('decode', function () {
  it('test case 1', function () {
    const encoded = [1, 2, 3]
    const first = 1
    const result = [1, 0, 2, 1]

    expect(decode(encoded, first)).toEqual(result)
  })
  it('test case 2', function () {
    const encoded = [6, 2, 7, 3]
    const first = 4
    const result = [4, 2, 0, 7, 4]

    expect(decode(encoded, first)).toEqual(result)
  })
})
