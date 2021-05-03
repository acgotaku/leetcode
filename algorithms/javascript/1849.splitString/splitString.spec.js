import { splitString } from './splitString'

describe('splitString', function () {
  it('test case 1', function () {
    const s = '1234'

    const result = false
    expect(splitString(s)).toEqual(result)
  })
  it('test case 2', function () {
    const s = '050043'

    const result = true
    expect(splitString(s)).toEqual(result)
  })
  it('test case 3', function () {
    const s = '9080701'

    const result = false
    expect(splitString(s)).toEqual(result)
  })
  it('test case 4', function () {
    const s = '10009998'

    const result = true
    expect(splitString(s)).toEqual(result)
  })
  it('test case 5', function () {
    const s = '200100'

    const result = true
    expect(splitString(s)).toEqual(result)
  })
  it('test case 6', function () {
    const s = '1000'

    const result = true
    expect(splitString(s)).toEqual(result)
  })
})
