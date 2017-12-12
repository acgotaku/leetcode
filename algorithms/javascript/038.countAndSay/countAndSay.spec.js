import { countAndSay } from './countAndSay'

describe('countAndSay', function () {
  it('countAndSay test case 1', function () {
    const n = 5
    const result = '111221'
    expect(countAndSay(n)).toEqual(result)
  })
})
