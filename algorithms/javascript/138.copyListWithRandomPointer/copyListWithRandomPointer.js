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
  const map = new Map()
  let p = head

  while (p) {
    map.set(p, new Node(p.val))
    p = p.next
  }

  p = head
  while (p) {
    const newNode = map.get(p)
    if (p.next) {
      newNode.next = map.get(p.next)
    } else {
      newNode.next = null
    }

    if (p.random) {
      newNode.random = map.get(p.random)
    } else {
      newNode.random = null
    }

    p = p.next
  }
  return map.get(head)
}
export { Node, copyRandomList }
