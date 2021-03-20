import { isHappy } from './happyNumber'

describe('isHappy', function () {
  it('test case 1', function () {
    const n = 19

    const result = true
    expect(isHappy(n)).toEqual(result)
  })
  it('test case 2', function () {
    const n = 2

    const result = false
    expect(isHappy(n)).toEqual(result)
  })
})
