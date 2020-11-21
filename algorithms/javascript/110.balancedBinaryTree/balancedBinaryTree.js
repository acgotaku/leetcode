// Source : https://leetcode.com/problems/balanced-binary-tree/
// Author : acgotaku311
// Date   : 2020-11-21

/** ********************************************************************************
*
* Given a binary tree, determine if it is height-balanced.
*
* For this problem, a height-balanced binary tree is defined as a binary tree in which
* the depth of the two subtrees of every node never differ by more than 1.
*
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
 * @return {boolean}
 */

const treeDepth = (node) => {
  if (node === null) {
    return 0
  }
  if (node.left === null && node.right === null) {
    return 1
  }
  return Math.max(treeDepth(node.left), treeDepth(node.right)) + 1
}

const isBalanced = function (root) {
  if (root === null) {
    return true
  }

  const left = treeDepth(root.left)
  const right = treeDepth(root.right)

  if (Math.abs(left - right) > 1) {
    return false
  }
  return isBalanced(root.left) && isBalanced(root.right)
}

export { TreeNode, isBalanced }
