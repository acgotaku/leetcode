import { lengthOfLastWord } from './lengthOfLastWord'

describe('lengthOfLastWord', function () {
  it('lengthOfLastWord test case 1', function () {
    const str = 'Hello World'
    expect(lengthOfLastWord(str)).toEqual(5)
  })

  it('lengthOfLastWord test case 1', function () {
    const str = 'a '
    expect(lengthOfLastWord(str)).toEqual(1)
  })
})
