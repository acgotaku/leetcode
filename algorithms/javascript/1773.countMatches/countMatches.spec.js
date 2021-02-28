import { countMatches } from './countMatches'

describe('countMatches', function () {
  it('test case 1', function () {
    const items = [['phone', 'blue', 'pixel'], ['computer', 'silver', 'lenovo'], ['phone', 'gold', 'iphone']]
    const ruleKey = 'color'
    const ruleValue = 'silver'
    const result = 1
    expect(countMatches(items, ruleKey, ruleValue)).toEqual(result)
  })
  it('test case 2', function () {
    const items = [['phone', 'blue', 'pixel'], ['computer', 'silver', 'lenovo'], ['phone', 'gold', 'iphone']]
    const ruleKey = 'type'
    const ruleValue = 'phone'
    const result = 2
    expect(countMatches(items, ruleKey, ruleValue)).toEqual(result)
  })
  it('test case 3', function () {
    const items = [['phone', 'blue', 'pixel'], ['computer', 'silver', 'lenovo'], ['phone', 'gold', 'iphone']]
    const ruleKey = 'name'
    const ruleValue = 'pixel'
    const result = 1
    expect(countMatches(items, ruleKey, ruleValue)).toEqual(result)
  })
})
