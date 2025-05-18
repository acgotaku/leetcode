// Source : https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/
// Author : acgotaku311
// Date   : 2018-01-25

/**********************************************************************************
*
* Given a linked list, remove the nth node from the end of list and return its head.
*
* For example,
*
*    Given linked list: 1->2->3->4->5, and n = 2.
*
*    After removing the second node from the end, the linked list becomes 1->2->3->5.
*
* Note:
* Given n will always be valid.
* Try to do this in one pass.
*
*
**********************************************************************************/

function ListNode (val) {
  this.val = val
  this.next = null
}
// const printListNode = function (head) {
//   const values = []
//   let current = head
//   while (current) {
//     values.push(current.val)
//     current = current.next
//   }
//   console.log(values.join(' -> '))
// }

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = function (head, n) {
  if (head === null || n < 0) {
    return null
  }
  const fakeHead = new ListNode(-1)
  fakeHead.next = head
  head = fakeHead
  let p1 = new ListNode(-1)
  let p2 = new ListNode(-1)
  p1.next = head
  p2.next = head
  for (let i = 0; i < n; i++) {
    p2 = p2.next
  }

  while (p2.next !== null) {
    p2 = p2.next
    p1 = p1.next
  }
  p1.next = p1.next.next
  return head.next
}

export { ListNode, removeNthFromEnd }
