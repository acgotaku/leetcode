// Source : https://leetcode.com/problems/min-stack/
// Author : acgotaku311
// Date   : 2021-03-04

/** ********************************************************************************
*
* Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
*
* push(x) -- Push element x onto stack.
*
* pop() -- Removes the element on top of the stack.
*
* top() -- Get the top element.
*
* getMin() -- Retrieve the minimum element in the stack.
*
*
**********************************************************************************/

/**
 * initialize your data structure here.
 */
const MinStack = function () {
  this.minArray = []
  this.stack = []
}

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.stack.push(x)
  if (!this.minArray.length) {
    this.minArray.push(x)
  } else if (this.minArray[this.minArray.length - 1] >= x) {
    this.minArray.push(x)
  }
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  const last = this.stack.pop()
  if (this.minArray[this.minArray.length - 1] === last) {
    this.minArray.pop()
  }
}

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1]
}

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.minArray[this.minArray.length - 1]
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
export { MinStack }
