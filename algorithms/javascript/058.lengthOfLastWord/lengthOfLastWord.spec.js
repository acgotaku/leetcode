import { lengthOfLastWord } from './lengthOfLastWord'

describe('lengthOfLastWord', function () {
  it('lengthOfLastWord test case 1', function () {
    const str = 'Hello World'
    expect(lengthOfLastWord(str)).toEqual(5)
  })

  it('lengthOfLastWord test case 2', function () {
    const str = 'a '
    expect(lengthOfLastWord(str)).toEqual(1)
  })
  it('lengthOfLastWord test case 3', function () {
    const str = ''
    expect(lengthOfLastWord(str)).toEqual(0)
  })
})
