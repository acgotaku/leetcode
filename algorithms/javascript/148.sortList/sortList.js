// Source : https://leetcode.com/problems/sort-list/
// Author : acgotaku311
// Date   : 2021-02-17

/** ********************************************************************************
*
* Sort a linked list in O(n log n) time using constant space complexity.
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

const mergeTwoList = (head1, head2) => {
  const pHead = new ListNode()
  let p1 = head1
  let p2 = head2
  let tail = pHead
  while (p1 && p2) {
    if (p1.val < p2.val) {
      tail.next = p1
      p1 = p1.next
    } else {
      tail.next = p2
      p2 = p2.next
    }
    tail = tail.next
  }
  if (p1) {
    tail.next = p1
  }
  if (p2) {
    tail.next = p2
  }

  return pHead.next
}
const sortList = function (head) {
  if (!head || !head.next) {
    return head
  }
  let p1 = head
  let p2 = head.next
  while (p2 && p2.next) {
    p1 = p1.next
    p2 = p2.next.next
  }
  p2 = p1.next
  p1.next = null
  return mergeTwoList(sortList(head), sortList(p2))
}
export { ListNode, sortList }
