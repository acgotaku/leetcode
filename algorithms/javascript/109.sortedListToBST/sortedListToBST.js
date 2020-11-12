// Source : https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/
// Author : acgotaku311
// Date   : 2020-11-12

/** ********************************************************************************
*
* Given a singly linked list where elements are sorted in ascending order,
* convert it to a height balanced BST.
*
**********************************************************************************/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function ListNode (val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
function TreeNode (val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
const findMiddlePrev = (head) => {
  let prev = head
  let slow = head
  let fast = head
  while (fast && fast.next) {
    prev = slow
    slow = slow.next
    fast = fast.next.next
  }
  return prev
}

const sortedListToBST = function (head) {
  if (!head) {
    return null
  }
  const prev = findMiddlePrev(head)
  if (!prev.next) {
    return new TreeNode(prev.val)
  }
  const middle = prev.next
  prev.next = null
  const node = new TreeNode(middle.val)

  node.left = sortedListToBST(head)
  node.right = sortedListToBST(middle.next)
  return node
}

export { ListNode, TreeNode, sortedListToBST }
