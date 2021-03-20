// Source : https://leetcode.com/problems/remove-linked-list-elements/
// Author : acgotaku311
// Date   : 2021-03-20

/** ********************************************************************************
 *
 * Remove all elements from a linked list of integers that have value val.
 *
 * Example
 * Given: 1 --> 2 --> 6 --> 3 --> 4 --> 5 --> 6,  val = 6
 * Return: 1 --> 2 --> 3 --> 4 --> 5
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
 * @param {number} val
 * @return {ListNode}
 */
const removeElements = function (head, val) {
  const pHead = new ListNode(0)
  pHead.next = head

  let p = pHead

  while (p && p.next) {
    if (p.next.val === val) {
      p.next = p.next.next
    } else {
      p = p.next
    }
  }

  return pHead.next
}
export { ListNode, removeElements }
