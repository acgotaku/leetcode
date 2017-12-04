// Source : https://leetcode.com/problems/reverse-nodes-in-k-group/#/description
// Author : acgotaku311
// Date   : 2017-07-15

/**********************************************************************************
*
* Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.
*
* If the number of nodes is not a multiple of k then left-out nodes in the end should remain as it is.
*
* You may not alter the values in the nodes, only nodes itself may be changed.
*
* Only constant memory is allowed.
*
* For example,
* Given this linked list: 1->2->3->4->5
*
* For k = 2, you should return: 2->1->4->3->5
*
* For k = 3, you should return: 3->2->1->4->5
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
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseList = function (head, k) {
  var pEnd = head
  while (pEnd && k > 0) {
    pEnd = pEnd.next
    k--
  }
  if (k > 0) {
    return head
  }

  var pHead = pEnd
  var p = head
  while (p !== pEnd) {
    var q = p.next
    p.next = pHead
    pHead = p
    p = q
  }
  return pHead
}
var reverseKGroup = function (head, k) {
  if (k <= 0) {
    return head
  }
  var pHead = new ListNode()
  pHead.next = head
  var p = pHead
  while (p) {
    p.next = reverseList(p.next, k)
    for (var i = 0; p && i < k; i++) {
      p = p.next
    }
  }
  return pHead.next
}
