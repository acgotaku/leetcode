// Source : https://leetcode.com/problems/insertion-sort-list/
// Author : acgotaku311
// Date   : 2021-02-16

/** ********************************************************************************
*
* Sort a linked list using insertion sort.
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
const insertionSortList = function (head) {
  const pHead = new ListNode()
  pHead.next = head
  let prev = head
  let p = head
  if (!head || !head.next) {
    return head
  }
  while (p.next) {
    if (p.next === prev) {
      p = p.next
      prev = pHead.next
    } else {
      if (p.next.val < prev.val) {
        const temp = p.next
        p.next = p.next.next
        pHead.next = temp
        temp.next = prev
        prev = pHead.next
      } else if (p.next.val >= prev.val && p.next.val < prev.next.val) {
        const temp = p.next
        p.next = p.next.next
        const next = prev.next
        prev.next = temp
        temp.next = next
        prev = pHead.next
      } else {
        prev = prev.next
      }
    }
  }

  return pHead.next
}
export { ListNode, insertionSortList }
