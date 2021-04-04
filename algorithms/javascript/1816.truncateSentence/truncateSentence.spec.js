import { truncateSentence } from './truncateSentence'

describe('truncateSentence', function () {
  it('test case 1', function () {
    const s = 'Hello how are you Contestant'
    const k = 4

    const result = 'Hello how are you'
    expect(truncateSentence(s, k)).toEqual(result)
  })
  it('test case 2', function () {
    const s = 'What is the solution to this problem'
    const k = 4

    const result = 'What is the solution'
    expect(truncateSentence(s, k)).toEqual(result)
  })
  it('test case 3', function () {
    const s = 'chopper is not a tanuki'
    const k = 5

    const result = 'chopper is not a tanuki'
    expect(truncateSentence(s, k)).toEqual(result)
  })
})
