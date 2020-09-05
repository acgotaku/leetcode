// Source : https://leetcode.com/problems/remove-duplicates-from-sorted-list/
// Author : acgotaku311
// Date   : 2020-09-05

/** ********************************************************************************
*
* Given a sorted linked list, delete all duplicates such that each element appear only once.
*
* For example,
* Given 1->1->2, return 1->2.
* Given 1->1->2->3->3, return 1->2->3.
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
const deleteDuplicates = function (head) {
  const pHead = new ListNode(null, head)
  let p = head

  while (p) {
    if (p.next && p.val === p.next.val) {
      p.next = p.next.next
    } else {
      p = p.next
    }
  }

  return pHead.next
}

export { ListNode, deleteDuplicates }
