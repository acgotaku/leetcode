// Source : https://leetcode.com/problems/maximum-depth-of-binary-tree/
// Author : acgotaku311
// Date   : 2020-10-25

/** ********************************************************************************
*
* Given a binary tree, find its maximum depth.
*
* The maximum depth is the number of nodes along the longest path from the root node
* down to the farthest leaf node.
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
const maxDepth = function (root) {
  let depth = 0
  const queue = []
  let currentNum = 1
  let nextNum = 0
  if (root) {
    queue.push(root)
  } else {
    return depth
  }
  while (queue.length > 0) {
    const node = queue.shift()
    currentNum--
    if (node.left) {
      queue.push(node.left)
      nextNum++
    }
    if (node.right) {
      queue.push(node.right)
      nextNum++
    }
    if (currentNum === 0) {
      currentNum = nextNum
      nextNum = 0
      depth++
    }
  }
  return depth
}

export { TreeNode, maxDepth }
