// Source : https://leetcode.com/problems/linked-list-cycle-ii/
// Author : acgotaku311
// Date   : 2021-02-02

/** ********************************************************************************
*
* Given a linked list, return the node where the cycle begins. If there is no cycle, return null.
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
 * @return {ListNode}
 */
const detectCycle = function (head) {
  const map = new Map()
  while (head) {
    if (map.has(head)) {
      return head
    } else {
      map.set(head, true)
      head = head.next
    }
  }
  return null
}
export { ListNode, detectCycle }
