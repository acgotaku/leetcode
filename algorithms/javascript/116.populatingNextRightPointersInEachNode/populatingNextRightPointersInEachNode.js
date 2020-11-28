// Source : https://leetcode.com/problems/populating-next-right-pointers-in-each-node/
// Author : acgotaku311
// Date   : 2020-11-28

/** ********************************************************************************
*
* Given a binary tree
*
*     struct TreeLinkNode {
*       TreeLinkNode *left;
*       TreeLinkNode *right;
*       TreeLinkNode *next;
*     }
*
* Populate each next pointer to point to its next right node.
* If there is no next right node, the next pointer should be set to NULL.
*
* Initially, all next pointers are set to NULL.
*
* Note:
*
* You may only use constant extra space.
* You may assume that it is a perfect binary tree (ie, all leaves are at the same level, and every parent has two children).
*
* For example,
* Given the following perfect binary tree,
*
*          1
*        /  \
*       2    3
*      / \  / \
*     4  5  6  7
*
* After calling your function, the tree should look like:
*
*          1 -> NULL
*        /  \
*       2 -> 3 -> NULL
*      / \  / \
*     4->5->6->7 -> NULL
*
*
**********************************************************************************/

/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */
function Node (val, left, right, next) {
  this.val = val === undefined ? null : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
  this.next = next === undefined ? null : next
};

/**
 * @param {Node} root
 * @return {Node}
 */
const connect = function (root) {
  if (!root) return root
  const queue = []
  queue.push(root)
  while (queue.length > 0) {
    let len = queue.length
    while (len > 0) {
      const node = queue.shift()
      if (len > 1) {
        node.next = queue[0]
      }
      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
      len--
    }
  }
  return root
}
export { Node, connect }
