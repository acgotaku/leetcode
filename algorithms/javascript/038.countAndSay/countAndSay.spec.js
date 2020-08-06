import { countAndSay } from './countAndSay'

describe('countAndSay', function () {
  it('countAndSay test case 1', function () {
    const n = 5
    const result = '111221'
    expect(countAndSay(n)).toEqual(result)
  })
  it('countAndSay test case 2', function () {
    const n = 0
    const result = ''
    expect(countAndSay(n)).toEqual(result)
  })
  it('countAndSay test case 3', function () {
    const n = 1
    const result = '1'
    expect(countAndSay(n)).toEqual(result)
  })
})
