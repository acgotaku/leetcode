// Source : https://leetcode.com/problems/linked-list-cycle/
// Author : acgotaku311
// Date   : 2021-02-02

/** ********************************************************************************
*
* Given a linked list, determine if it has a cycle in it.
*
* Follow up:
* Can you solve it without using extra space?
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
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = function (head) {
  const map = new Map()
  while (head) {
    if (map.has(head)) {
      return true
    } else {
      map.set(head, true)
      head = head.next
    }
  }
  return false
}
export { ListNode, hasCycle }
