// Source : https://leetcode.com/problems/path-sum-ii/
// Author : acgotaku311
// Date   : 2020-11-25

/** ********************************************************************************
*
* Given a binary tree and a sum, find all root-to-leaf paths where each path's sum equals the given sum.
*
* For example:
* Given the below binary tree and sum = 22,
*
*               5
*              / \
*             4   8
*            /   / \
*           11  13  4
*          /  \    / \
*         7    2  5   1
*
* return
*
* [
*    [5,4,11,2],
*    [5,8,4,5]
* ]
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
 * @param {number} sum
 * @return {number[][]}
 */
const pathSum = function (root, sum) {
  const result = []
  const BFS = (node, target, queue) => {
    queue.push(node.val)
    const val = target - node.val
    if (val === 0 && node.left === null && node.right === null) {
      result.push(queue)
    }
    if (node.left) {
      BFS(node.left, val, queue.slice())
    }
    if (node.right) {
      BFS(node.right, val, queue.slice())
    }
  }

  BFS(root, sum, [])
  return result
}
export { TreeNode, pathSum }
