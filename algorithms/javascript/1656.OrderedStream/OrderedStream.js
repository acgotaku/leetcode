// Source : https://leetcode.com/problems/design-an-ordered-stream/
// Author : acgotaku311
// Date   : 2020-11-17

/**
 * @param {number} n
 */
const OrderedStream = function (n) {
  this.ptr = 1
  this.dict = {}
  for (let i = 1; i <= n; i++) {
    this.dict[i] = null
  }
}

/**
* @param {number} id
* @param {string} value
* @return {string[]}
*/
OrderedStream.prototype.insert = function (id, value) {
  const result = []
  this.dict[id] = value
  while (this.dict[this.ptr]) {
    result.push(this.dict[this.ptr])
    this.ptr++
  }
  return result
}

/**
* Your OrderedStream object will be instantiated and called as such:
* var obj = new OrderedStream(n)
* var param_1 = obj.insert(id,value)
*/

export { OrderedStream }
