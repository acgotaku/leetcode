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
  this.cache = new Map()
  this.least = new Set()
}

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (!this.cache.has(key)) {
    return -1
  }
  this.least.delete(key)
  this.least.add(key)
  return this.cache.get(key)
}

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.cache.size < this.capacity || this.cache.has(key)) {
    this.cache.set(key, value)
  } else {
    const evicted = this.least.values().next().value
    this.least.delete(evicted)
    this.cache.delete(evicted)
    this.cache.set(key, value)
  }
  if (this.least.has(key)) {
    this.least.delete(key)
  }
  this.least.add(key)
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

export { LRUCache }
