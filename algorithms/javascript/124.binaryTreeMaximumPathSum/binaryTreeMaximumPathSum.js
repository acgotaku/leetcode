// Source : https://leetcode.com/problems/binary-tree-maximum-path-sum/
// Author : acgotaku311
// Date   : 2020-12-19

/** ********************************************************************************
*
* Given a binary tree, find the maximum path sum.
*
* The path may start and end at any node in the tree.
*
* For example:
* Given the below binary tree,
*
*        1
*       / \
*      2   3
*
* Return 6.
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
 * @return {number}
 */
const maxPathSum = function (root) {
  let sum = Number.MIN_SAFE_INTEGER
  if (root === null) {
    return 0
  }
  const getPathSum = (root) => {
    if (root === null) {
      return Number.MIN_SAFE_INTEGER
    }
    const left = getPathSum(root.left)
    const right = getPathSum(root.right)
    const maxBranch = Math.max(root.val, left + root.val, right + root.val)
    sum = Math.max(maxBranch, root.val + left + right, sum)
    return maxBranch
  }

  getPathSum(root)
  return sum
}

export { TreeNode, maxPathSum }
