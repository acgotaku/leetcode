// Source : https://leetcode.com/problems/binary-tree-postorder-traversal/
// Author : acgotaku311
// Date   : 2021-02-11

/** ********************************************************************************
*
* Given a binary tree, return the postorder traversal of its nodes' values.
*
* For example:
* Given binary tree {1,#,2,3},
*
*    1
*     \
*      2
*     /
*    3
*
* return [3,2,1].
*
* Note: Recursive solution is trivial, could you do it iteratively?
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
 * @return {number[]}
 */
const postorderTraversal = function (root) {
  const result = []
  const loop = (node) => {
    if (node) {
      loop(node.left)
      loop(node.right)
      result.push(node.val)
    }
  }
  loop(root)
  return result
}

export { TreeNode, postorderTraversal }
