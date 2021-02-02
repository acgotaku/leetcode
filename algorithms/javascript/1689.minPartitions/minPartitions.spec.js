import { minPartitions } from './minPartitions'

describe('minPartitions', function () {
  it('test case 1', function () {
    const n = '32'

    const result = 3

    expect(minPartitions(n)).toEqual(result)
  })
  it('test case 2', function () {
    const n = '82734'

    const result = 8

    expect(minPartitions(n)).toEqual(result)
  })
  it('test case 3', function () {
    const n = '27346209830709182346'

    const result = 9

    expect(minPartitions(n)).toEqual(result)
  })
})
