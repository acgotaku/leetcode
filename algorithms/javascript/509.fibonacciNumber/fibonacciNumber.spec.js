import { fib } from './fibonacciNumber'

describe('fib', function () {
  it('test case 1', function () {
    const n = 4
    const result = 3
    expect(fib(n)).toEqual(result)
  })
  it('test case 2', function () {
    const n = 1
    const result = 1
    expect(fib(n)).toEqual(result)
  })
})
