// Source : https://leetcode.com/problems/lru-cache/
// Author : acgotaku311
// Date   : 2021-02-11

/** ********************************************************************************
*
* Design and implement a data structure for Least Recently Used (LRU) cache.
* It should support the following operations: get and set.
*
*    get(key) - Get the value (will always be positive) of the key if the key exists
*               in the cache, otherwise return -1.
*
*    set(key, value) - Set or insert the value if the key is not already present.
*                      When the cache reached its capacity, it should invalidate
*                      the least recently used item before inserting a new item.
*
**********************************************************************************/

/**
 * @param {number} capacity
 */
const LRUCache = function (capacity) {
  this.capacity = capacity
  this.dict = {}
  this.access = 0
}

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.dict[key]) {
    this.dict[key].access = this.access++
    return this.dict[key].value
  } else {
    return -1
  }
}

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.dict[key]) {
    this.dict[key] = {
      value,
      access: this.access++
    }
  } else {
    const keys = Object.keys(this.dict)
    if (keys.length >= this.capacity) {
      const remove = keys.sort((a, b) => this.dict[a].access - this.dict[b].access)
      delete this.dict[remove[0]]
    }

    this.dict[key] = {
      value,
      access: this.access++
    }
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

export { LRUCache }
