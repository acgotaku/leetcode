// Source : https://leetcode.com/problems/swapping-nodes-in-a-linked-list/
// Author : acgotaku311
// Date   : 2021-01-13

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
 * @param {number} k
 * @return {ListNode}
 */
const swapNodes = function (head, k) {
  let i = 1
  let p = head
  let q = head
  let h = head
  while (h) {
    if (i === k) {
      p = h
    } else if (i > k) {
      q = q.next
    }
    i++
    h = h.next
  }
  const temp = p.val
  p.val = q.val
  q.val = temp
  return head
}
export { ListNode, swapNodes }
