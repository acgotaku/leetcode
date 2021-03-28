import { evaluate } from './evaluate'

describe('evaluate', function () {
  it('test case 1', function () {
    const s = '(name)is(age)yearsold'
    const knowledge = [['name', 'bob'], ['age', 'two']]

    const result = 'bobistwoyearsold'
    expect(evaluate(s, knowledge)).toEqual(result)
  })
  it('test case 2', function () {
    const s = 'hi(name)'
    const knowledge = [['a', 'b']]

    const result = 'hi?'
    expect(evaluate(s, knowledge)).toEqual(result)
  })
  it('test case 3', function () {
    const s = '(a)(a)(a)aaa'
    const knowledge = [['a', 'yes']]

    const result = 'yesyesyesaaa'
    expect(evaluate(s, knowledge)).toEqual(result)
  })
  it('test case 4', function () {
    const s = '(a)(b)'
    const knowledge = [['a', 'b'], ['b', 'a']]

    const result = 'ba'
    expect(evaluate(s, knowledge)).toEqual(result)
  })
})
