import { reinitializePermutation } from './reinitializePermutation'

describe('reinitializePermutation', function () {
  it('test case 1', function () {
    const n = 2

    const result = 1
    expect(reinitializePermutation(n)).toEqual(result)
  })
  it('test case 2', function () {
    const n = 4

    const result = 2
    expect(reinitializePermutation(n)).toEqual(result)
  })
  it('test case 3', function () {
    const n = 6

    const result = 4
    expect(reinitializePermutation(n)).toEqual(result)
  })
})
