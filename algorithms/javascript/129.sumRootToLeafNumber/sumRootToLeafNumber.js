// Source : https://leetcode.com/problems/sum-root-to-leaf-numbers/
// Author : acgotaku311
// Date   : 2020-12-23

/** ********************************************************************************
*
* Given a binary tree containing digits from 0-9 only, each root-to-leaf path could represent a number.
* An example is the root-to-leaf path 1->2->3 which represents the number 123.
*
* Find the total sum of all root-to-leaf numbers.
*
* For example,
*
*     1
*    / \
*   2   3
*
* The root-to-leaf path 1->2 represents the number 12.
* The root-to-leaf path 1->3 represents the number 13.
*
* Return the sum = 12 + 13 = 25.
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
const sumNumbers = function (root) {
  if (!root) {
    return 0
  }

  const queue = [root]
  let sum = 0
  while (queue.length > 0) {
    const node = queue.shift()
    if (node.left) {
      node.left.val += (node.val * 10)
      queue.push(node.left)
    }
    if (node.right) {
      node.right.val += (node.val * 10)
      queue.push(node.right)
    }
    if (!node.left && !node.right) {
      sum += node.val
    }
  }

  return sum
}

export { TreeNode, sumNumbers }
