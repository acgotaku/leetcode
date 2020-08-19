import { fullJustify } from './textJustification'

describe('fullJustify', function () {
  it('test case 1', function () {
    const words = ['This', 'is', 'an', 'example', 'of', 'text', 'justification.']
    const maxWidth = 16
    const result = [
      'This    is    an',
      'example  of text',
      'justification.  '
    ]
    expect(fullJustify(words, maxWidth)).toEqual(result)
  })
  it('test case 2', function () {
    const words = ['What', 'must', 'be', 'acknowledgment', 'shall', 'be']
    const maxWidth = 16
    const result = [
      'What   must   be',
      'acknowledgment  ',
      'shall be        '
    ]
    expect(fullJustify(words, maxWidth)).toEqual(result)
  })
  it('test case 3', function () {
    const words = ['Science', 'is', 'what', 'we', 'understand', 'well', 'enough', 'to', 'explain',
      'to', 'a', 'computer.', 'Art', 'is', 'everything', 'else', 'we', 'do']
    const maxWidth = 20
    const result = [
      'Science  is  what we',
      'understand      well',
      'enough to explain to',
      'a  computer.  Art is',
      'everything  else  we',
      'do                  '
    ]
    expect(fullJustify(words, maxWidth)).toEqual(result)
  })
})
