// Source : https://leetcode.com/problems/reverse-linked-list-ii/
// Author : acgotaku311
// Date   : 2020-09-11

/** ********************************************************************************
*
* Reverse a linked list from position m to n. Do it in-place and in one-pass.
*
* For example:
* Given 1->2->3->4->5->NULL, m = 2 and n = 4,
*
* return 1->4->3->2->5->NULL.
*
* Note:
* Given m, n satisfy the following condition:
* 1 ≤ m ≤ n ≤ length of list.
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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
const reverseBetween = function (head, m, n) {
  if (head === null || m >= n) {
    return head
  }

  const pHead = new ListNode(null)
  pHead.next = head

  let mBefore = pHead
  for (let i = 0; mBefore.next !== null && i < m - 1; i++) {
    mBefore = mBefore.next
  }

  const p = mBefore.next

  for (let i = 0; i < n - m; i++) {
    const pNext = mBefore.next
    mBefore.next = p.next
    p.next = p.next.next
    mBefore.next.next = pNext
  }

  return pHead.next
}

export { ListNode, reverseBetween }
