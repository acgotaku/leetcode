import { minDeletions } from './minDeletions'

describe('minDeletions', function () {
  it('test case 1', function () {
    const s = 'aab'
    const result = 0

    expect(minDeletions(s)).toEqual(result)
  })
  it('test case 2', function () {
    const s = 'aaabbbcc'
    const result = 2

    expect(minDeletions(s)).toEqual(result)
  })
  it('test case 3', function () {
    const s = 'ceabaacb'
    const result = 2

    expect(minDeletions(s)).toEqual(result)
  })
  it('test case 4', function () {
    const s = 'gagblhlbfjdagcjcccgjmncfleblmgoanoghedggmanoookejcafofbjnonggfjdmaclbikdidoaihoigbjccioijfnjljmbj'
    const result = 31

    expect(minDeletions(s)).toEqual(result)
  })
})
