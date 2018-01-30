// Source : https://leetcode.com/problems/merge-k-sorted-lists/description/
// Author : acgotaku311
// Date   : 2018-01-30

/**********************************************************************************
*
* Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.
*
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
 * @param {ListNode[]} lists
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
const mergeKLists = function (lists) {
  if (lists == null || lists.length === 0) {
    return null
  }
  while (lists.length > 1) {
    lists.push(mergeTwoLists(lists.shift(), lists.shift()))
  }
  if (lists.length === 1) {
    return lists.pop()
  } else {
    return null
  }
}

export { ListNode, mergeKLists }
