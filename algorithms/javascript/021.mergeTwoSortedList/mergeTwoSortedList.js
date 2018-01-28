// Source : https://leetcode.com/problems/merge-two-sorted-lists/description/
// Author : acgotaku311
// Date   : 2018-01-28

/**********************************************************************************
*
* Merge two sorted linked lists and return it as a new list. The new list should be
* made by splicing together the nodes of the first two lists.
*
**********************************************************************************/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode (val) {
  this.val = val
  this.next = null
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = function (l1, l2) {
  const head = new ListNode(0)
  let p = head
  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      p.next = l1
      l1 = l1.next
    } else {
      p.next = l2
      l2 = l2.next
    }
    p = p.next
  }

  if (l1 !== null) {
    p.next = l1
  } else {
    p.next = l2
  }

  return head.next
}

export { ListNode, mergeTwoLists }
