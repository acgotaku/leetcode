import { getMinSwaps } from './getMinSwaps'

describe('getMinSwaps', function () {
  it('test case 1', function () {
    const num = '5489355142'
    const k = 4

    const result = 2
    expect(getMinSwaps(num, k)).toEqual(result)
  })
  it('test case 2', function () {
    const num = '11112'
    const k = 4

    const result = 4
    expect(getMinSwaps(num, k)).toEqual(result)
  })
  it('test case 3', function () {
    const num = '00123'
    const k = 1

    const result = 1
    expect(getMinSwaps(num, k)).toEqual(result)
  })
})
