// Source : https://leetcode.com/problems/rotate-list/
// Author : acgotaku311
// Date   : 2020-08-14

/** ********************************************************************************
*
* Given a list, rotate the list to the right by k places, where k is non-negative.
*
* For example:
* Given 1->2->3->4->5->NULL and k = 2,
* return 4->5->1->2->3->NULL.
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
 * @param {number} k
 * @return {ListNode}
 */
const rotateRight = function (head, k) {
  if (k <= 0 || !head) {
    return head
  }

  let len = 1
  let p = head
  while (p.next !== null) {
    p = p.next
    len++
  }
  p.next = head

  k = len - k % len
  // find the tail
  for (let i = 0; i < k; i++) {
    p = p.next
  }

  // break list
  head = p.next
  p.next = null

  return head
}

export { ListNode, rotateRight }
