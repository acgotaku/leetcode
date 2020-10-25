// Source : https://leetcode.com/problems/maximum-depth-of-binary-tree/
// Author : acgotaku311
// Date   : 2020-10-25

/** ********************************************************************************
*
* Given preorder and inorder traversal of a tree, construct the binary tree.
*
* Note:
* You may assume that duplicates do not exist in the tree.
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
const buildTree = function (preorder, inorder) {
  const inPos = {}
  for (let i = 0; i < inorder.length; i++) {
    inPos[inorder[i]] = i
  }

  const buildByPreIn = (preStart, preEnd, inStart) => {
    if (preStart > preEnd) {
      return null
    }
    const root = new TreeNode(preorder[preStart])
    const rootIndex = inPos[preorder[preStart]]
    const leftLen = rootIndex - inStart
    root.left = buildByPreIn(preStart + 1, preStart + leftLen, inStart)
    root.right = buildByPreIn(preStart + leftLen + 1, preEnd, rootIndex + 1)
    return root
  }
  return buildByPreIn(0, preorder.length - 1, 0)
}

export { TreeNode, buildTree }
