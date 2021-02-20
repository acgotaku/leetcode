import { evalRPN } from './evaluateReversePolishNotation'

describe('evalRPN', function () {
  it('test case 1', function () {
    const points = ['2', '1', '+', '3', '*']
    const result = 9
    expect(evalRPN(points)).toEqual(result)
  })
  it('test case 2', function () {
    const points = ['4', '13', '5', '/', '+']
    const result = 6
    expect(evalRPN(points)).toEqual(result)
  })
  it('test case 3', function () {
    const points = ['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+']
    const result = 22
    expect(evalRPN(points)).toEqual(result)
  })
  it('test case 4', function () {
    const points = ['10', '6', '-']
    const result = 4
    expect(evalRPN(points)).toEqual(result)
  })
})
