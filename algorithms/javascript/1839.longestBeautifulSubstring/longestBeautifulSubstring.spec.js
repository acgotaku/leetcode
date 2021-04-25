import { longestBeautifulSubstring } from './longestBeautifulSubstring'

describe('longestBeautifulSubstring', function () {
  it('test case 1', function () {
    const word = 'aeiaaioaaaaeiiiiouuuooaauuaeiu'

    const result = 13
    expect(longestBeautifulSubstring(word)).toEqual(result)
  })
  it('test case 2', function () {
    const word = 'aeeeiiiioooauuuaeiou'

    const result = 5
    expect(longestBeautifulSubstring(word)).toEqual(result)
  })
  it('test case 3', function () {
    const word = 'a'

    const result = 0
    expect(longestBeautifulSubstring(word)).toEqual(result)
  })
  it('test case 4', function () {
    const word = 'eauoiouieaaoueiuaieoeauoiaueoiaeoiuieuaoiaeouiaueo'

    const result = 0
    expect(longestBeautifulSubstring(word)).toEqual(result)
  })
  it('test case 5', function () {
    const word = 'ueoiauoiaeeouaiuiaeoeouiaoaeiueuaiooiueaiaeouoaeiu'

    const result = 0
    expect(longestBeautifulSubstring(word)).toEqual(result)
  })
})
