// Source : https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/
// Author : acgotaku311
// Date   : 2020-10-18

/** ********************************************************************************
*
* Given a binary tree, return the zigzag level order traversal of its nodes' values.
* (ie, from left to right, then right to left for the next level and alternate between).
*
* For example:
* Given binary tree {3,9,20,#,#,15,7},
*
*     3
*    / \
*   9  20
*     /  \
*    15   7
*
* return its zigzag level order traversal as:
*
* [
*   [3],
*   [20,9],
*   [15,7]
* ]
*
* confused what "{1,#,2,3}" means? > read more on how binary tree is serialized on OJ.
*
* OJ's Binary Tree Serialization:
*
* The serialization of a binary tree follows a level order traversal,
* where '#' signifies a path terminator where no node exists below.
*
* Here's an example:
*
*    1
*   / \
*  2   3
*     /
*    4
*     \
*      5
*
* The above binary tree is serialized as "{1,2,3,#,#,4,#,#,5}".
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
 * @return {number[][]}
 */
const zigzagLevelOrder = function (root) {
  const result = []
  const queue = []
  let level = 0
  let row = []
  let currentNum = 1
  let nextNum = 0
  if (root === null) {
    return result
  }
  queue.push(root)
  while (queue.length > 0) {
    const node = queue.shift()
    row.push(node.val)
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
      if (level % 2 === 0) {
        result.push(row.slice())
      } else {
        result.push(row.slice().reverse())
      }
      row = []
      level++
    }
  }
  return result
}

export { TreeNode, zigzagLevelOrder }
