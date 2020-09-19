// Source : https://leetcode.com/problems/same-tree/
// Author : acgotaku311
// Date   : 2020-09-19

/** ********************************************************************************
*
* Given two binary trees, write a function to check if they are equal or not.
*
* Two binary trees are considered equal if they are structurally identical and the nodes have the same value.
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
const isSameTree = function (p, q) {
  const inorder = (a, b) => {
    if (a === null && b === null) {
      return true
    }
    if (a === null || b === null) {
      return false
    }
    if (a.val !== b.val) {
      return false
    }
    if (a.val === b.val) {
      if (inorder(a.left, b.left) && inorder(a.right, b.right)) {
        return true
      } else {
        return false
      }
    }
  }

  return inorder(p, q)
}

export { TreeNode, isSameTree }
