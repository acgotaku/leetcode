// Source : https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/
// Author : acgotaku311
// Date   : 2020-10-25

/** ********************************************************************************
*
* Given inorder and postorder traversal of a tree, construct the binary tree.
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
const buildTree = function (inorder, postorder) {
  const inPos = {}
  for (let i = 0; i < inorder.length; i++) {
    inPos[inorder[i]] = i
  }

  const buildByPreIn = (postStart, postEnd, inStart) => {
    if (postStart > postEnd) {
      return null
    }
    const root = new TreeNode(postorder[postEnd])
    const rootIndex = inPos[postorder[postEnd]]
    const leftLen = rootIndex - inStart
    root.left = buildByPreIn(postStart, postStart + leftLen - 1, inStart)
    root.right = buildByPreIn(postStart + leftLen, postEnd - 1, rootIndex + 1)
    return root
  }
  return buildByPreIn(0, postorder.length - 1, 0)
}

export { TreeNode, buildTree }
