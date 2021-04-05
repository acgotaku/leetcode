import { Trie } from './implementTriePrefixTree'

describe('Trie', function () {
  it('test case 1', function () {
    const trie = new Trie()
    trie.insert('apple')
    expect(trie.search('apple')).toEqual(true)
    expect(trie.search('app')).toEqual(false)
    expect(trie.startsWith('app')).toEqual(true)
    trie.insert('app')
    expect(trie.search('app')).toEqual(true)
    expect(trie.search('hello')).toEqual(false)
  })
})
