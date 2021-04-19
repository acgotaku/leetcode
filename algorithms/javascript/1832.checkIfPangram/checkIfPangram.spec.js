import { checkIfPangram } from './checkIfPangram'

describe('checkIfPangram', function () {
  it('test case 1', function () {
    const sentence = 'thequickbrownfoxjumpsoverthelazydog'

    const result = true
    expect(checkIfPangram(sentence)).toEqual(result)
  })
  it('test case 2', function () {
    const sentence = 'leetcode'

    const result = false
    expect(checkIfPangram(sentence)).toEqual(result)
  })
})
