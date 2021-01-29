// Source : https://leetcode.com/problems/copy-list-with-random-pointer/
// Author : acgotaku311
// Date   : 2021-01-29

/** ********************************************************************************
*
* A linked list is given such that each node contains an additional random pointer
* which could point to any node in the list or null.
*
* Return a deep copy of the list.
*
*
**********************************************************************************/

/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
function Node (val, next, random) {
  this.val = val
  this.next = next
  this.random = random
};
/**
 * @param {Node} head
 * @return {Node}
 */
const copyRandomList = function (head) {
  if (head === null) {
    return null
  }
  let p = head
  const oldPointer = []
  const newPointer = []
  while (p) {
    oldPointer.push(p)
    p = p.next
  }
  let newHead = null
  for (let i = oldPointer.length - 1; i >= 0; i--) {
    const pointer = new Node(oldPointer[i].val)
    pointer.next = newHead
    newHead = pointer
    newPointer.unshift(pointer)
  }
  for (let i = 0; i < oldPointer.length; i++) {
    if (oldPointer[i].random) {
      const index = oldPointer.findIndex(p => p === oldPointer[i].random)
      newPointer[i].random = newPointer[index]
    } else {
      newPointer[i].random = null
    }
  }
  return newPointer[0]
}
export { Node, copyRandomList }
