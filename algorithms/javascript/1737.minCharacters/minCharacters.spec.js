import { minCharacters } from './minCharacters'

describe('minCharacters', function () {
  it('test case 1', function () {
    const a = 'aba'
    const b = 'caa'
    const result = 2
    expect(minCharacters(a, b)).toEqual(result)
  })
  it('test case 2', function () {
    const a = 'dabadd'
    const b = 'cda'
    const result = 3
    expect(minCharacters(a, b)).toEqual(result)
  })
})
