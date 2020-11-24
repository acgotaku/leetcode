import { decrypt } from './decrypt'

describe('decrypt', function () {
  it('test case 1', function () {
    const code = [5, 7, 1, 4]
    const k = 3
    const result = [12, 10, 16, 13]

    expect(decrypt(code, k)).toEqual(result)
  })
  it('test case 2', function () {
    const code = [1, 2, 3, 4]
    const k = 0
    const result = [0, 0, 0, 0]

    expect(decrypt(code, k)).toEqual(result)
  })
  it('test case 3', function () {
    const code = [2, 4, 9, 3]
    const k = -2
    const result = [12, 5, 6, 13]

    expect(decrypt(code, k)).toEqual(result)
  })
})
