// Source : https://leetcode.com/problems/partition-list/
// Author : acgotaku311
// Date   : 2020-09-07

/** ********************************************************************************
*
* Given a linked list and a value x, partition it such that all nodes less than x come
* before nodes greater than or equal to x.
*
* You should preserve the original relative order of the nodes in each of the two partitions.
*
* For example,
* Given 1->4->3->2->5->2 and x = 3,
* return 1->2->2->4->3->5.
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
 * @param {number} x
 * @return {ListNode}
 */
const partition = function (head, x) {
  const pHead = new ListNode(null, head)
  let pos = null
  let p = pHead
  while (p && p.next) {
    if (p.next.val >= x && !pos) {
      pos = p
      p = p.next
      continue
    }
    if (pos && p.next.val < x) {
      const pNext = p.next
      p.next = pNext.next
      pNext.next = pos.next
      pos.next = pNext
      pos = pNext
      continue
    }

    p = p.next
  }

  return pHead.next
}

export { ListNode, partition }
