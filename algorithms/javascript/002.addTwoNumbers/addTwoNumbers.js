// Source : https://leetcode.com/problems/add-two-numbers/description/
// Author : acgotaku311
// Date   : 2017-12-26

/**********************************************************************************
*
* You are given two linked lists representing two non-negative numbers.
* The digits are stored in reverse order and each of their nodes contain a single digit.
* Add the two numbers and return it as a linked list.
*
* Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
* Output: 7 -> 0 -> 8
* Explanation: 342 + 465 = 807
*
**********************************************************************************/

function ListNode (val) {
  this.val = val
  this.next = null
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
  let l = new ListNode(0)
  const head = l
  let carry = 0
  while (l1 || l2 || carry !== 0) {
    let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry
    if (sum >= 10) {
      carry = 1
      sum = sum % 10
    } else {
      carry = 0
    }
    l1 = l1 ? l1.next : null
    l2 = l2 ? l2.next : null
    l.next = new ListNode(sum)
    l = l.next
  }
  return head.next
}

export { ListNode, addTwoNumbers }
