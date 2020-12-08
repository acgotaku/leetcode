import { interpret } from './interpret'

describe('minMoves', function () {
  it('test case 1', function () {
    const command = 'G()(al)'
    const result = 'Goal'

    expect(interpret(command)).toEqual(result)
  })
  it('test case 2', function () {
    const command = 'G()()()()(al)'
    const result = 'Gooooal'

    expect(interpret(command)).toEqual(result)
  })
  it('test case 3', function () {
    const command = '(al)G(al)()()G'
    const result = 'alGalooG'

    expect(interpret(command)).toEqual(result)
  })
})
