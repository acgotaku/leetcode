// Source : https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/
// Author : acgotaku311
// Date   : 2020-09-04

/** ********************************************************************************
*
* Given a sorted linked list, delete all nodes that have duplicate numbers,
* leaving only distinct numbers from the original list.
*
* For example,
* Given 1->2->3->3->4->4->5, return 1->2->5.
* Given 1->1->1->2->3, return 2->3.
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
  let tail = pHead
  let dup = false

  while (p) {
    if (p.next && p.val === p.next.val) {
      dup = true
      p.next = p.next.next
    } else {
      if (dup) {
        tail.next = p.next
        p = tail.next
        dup = false
      } else {
        p = p.next
        tail = tail.next
      }
    }
  }

  return pHead.next
}

export { ListNode, deleteDuplicates }
