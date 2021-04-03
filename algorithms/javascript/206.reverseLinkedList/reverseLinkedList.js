// Source : https://leetcode.com/problems/reverse-linked-list/
// Author : acgotaku311
// Date   : 2021-04-03

/** ********************************************************************************
 *
 * Reverse a singly linked list.
 *
 * click to show more hints.
 *
 * Hint:
 * A linked list can be reversed either iteratively or recursively. Could you implement both?
 *
 *
 **********************************************************************************/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode (val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function (head) {
  const pHead = new ListNode(0)
  const stack = []
  let p = head
  while (p) {
    stack.push(p)
    p = p.next
  }
  p = pHead
  while (stack.length) {
    const node = stack.pop()
    p.next = node
    p = node
  }
  p.next = null

  return pHead.next
}

export { ListNode, reverseList }
