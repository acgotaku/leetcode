// Source : https://leetcode.com/problems/flatten-binary-tree-to-linked-list/
// Author : acgotaku311
// Date   : 2020-11-26

/** ********************************************************************************
*
* Given a binary tree, flatten it to a linked list in-place.
*
* For example,
* Given
*
*          1
*         / \
*        2   5
*       / \   \
*      3   4   6
*
* The flattened tree should look like:
*
*    1
*     \
*      2
*       \
*        3
*         \
*          4
*           \
*            5
*             \
*              6
*
*
* Hints:
* If you notice carefully in the flattened tree, each node's right child points to
* the next node of a pre-order traversal.
*
**********************************************************************************/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function TreeNode (val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
const flatten = function (root) {
  const sorted = []
  const queue = []
  queue.push(root)
  while (queue.length > 0) {
    const node = queue.pop()
    sorted.push(node)
    if (node && node.right) {
      queue.push(node.right)
    }
    if (node && node.left) {
      queue.push(node.left)
    }
  }

  for (let i = 0; i < sorted.length - 1; i++) {
    sorted[i].left = null
    sorted[i].right = sorted[i + 1]
  }
}
export { TreeNode, flatten }
