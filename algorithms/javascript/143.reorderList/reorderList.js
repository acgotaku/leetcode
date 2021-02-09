// Source : https://leetcode.com/problems/reorder-list/
// Author : acgotaku311
// Date   : 2021-02-09

/** ********************************************************************************
*
* Given a singly linked list L: L0→L1→…→Ln-1→Ln,
* reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…
*
* You must do this in-place without altering the nodes' values.
*
* For example,
* Given {1,2,3,4}, reorder it to {1,4,2,3}.
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
const reorderList = function (head) {
  if (!head) {
    return head
  }

  let p = head
  const arr = []
  while (p) {
    arr.push(p)
    p = p.next
  }
  const n = arr.length - 1
  let start = 0
  for (let i = 0; i < n; i++) {
    const index = i % 2 === 0 ? start : n - start
    const next = i % 2 === 0 ? n - start : ++start
    arr[index].next = arr[next]
  }
  arr[Number.parseInt(arr.length / 2)].next = null
  return head
}
export { ListNode, reorderList }
