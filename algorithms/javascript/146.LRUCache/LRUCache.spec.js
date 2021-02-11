import { LRUCache } from './LRUCache'

describe('LRUCache', function () {
  it('test case 1', function () {
    const lRUCache = new LRUCache(2)
    lRUCache.put(1, 1)
    lRUCache.put(2, 2)
    expect(lRUCache.get(1)).toEqual(1)
    lRUCache.put(3, 3)
    expect(lRUCache.get(2)).toEqual(-1)
    lRUCache.put(4, 4)
    expect(lRUCache.get(1)).toEqual(-1)
    expect(lRUCache.get(3)).toEqual(3)
    expect(lRUCache.get(4)).toEqual(4)
  })
  it('test case 2', function () {
    const lRUCache = new LRUCache(2)
    expect(lRUCache.get(2)).toEqual(-1)
    lRUCache.put(2, 6)
    expect(lRUCache.get(1)).toEqual(-1)
    lRUCache.put(1, 5)
    lRUCache.put(1, 2)
    expect(lRUCache.get(1)).toEqual(2)
    expect(lRUCache.get(2)).toEqual(6)
  })
})
