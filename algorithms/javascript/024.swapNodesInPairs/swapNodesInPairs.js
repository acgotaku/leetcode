// Source : https://leetcode.com/problems/swap-nodes-in-pairs/description/
// Author : acgotaku311
// Date   : 2018-01-30

/**********************************************************************************
*
* Given a linked list, swap every two adjacent nodes and return its head.
*
* For example,
* Given 1->2->3->4, you should return the list as 2->1->4->3.
*
* Your algorithm should use only constant space. You may not modify the values in the list,
* only nodes itself can be changed.
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
const swapPairs = function (head) {
  if (!head || !head.next) {
    return head
  }
  const pHead = head.next
  head.next = swapPairs(pHead.next)
  pHead.next = head
  return pHead
}

export { ListNode, swapPairs }
