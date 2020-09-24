// Source : https://leetcode.com/problems/binary-tree-level-order-traversal/
// Author : acgotaku311
// Date   : 2020-09-24

/** ********************************************************************************
*
* Given a binary tree, return the level order traversal of its nodes' values.
* (ie, from left to right, level by level).
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
* return its level order traversal as:
*
* [
*   [3],
*   [9,20],
*   [15,7]
* ]
*
* confused what "{1,#,2,3}" means? > read more on how binary tree is serialized on OJ.
*
* OJ's Binary Tree Serialization:
*
* The serialization of a binary tree follows a level order traversal, where '#' signifies
* a path terminator where no node exists below.
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
const levelOrder = function (root) {
  const result = []
  let row = []
  const queue = []
  let curNum = 1
  let nextNum = 0
  if (root === null) {
    return result
  }
  queue.push(root)
  while (queue.length > 0) {
    const node = queue.shift()
    row.push(node.val)
    curNum--
    if (node.left) {
      queue.push(node.left)
      nextNum++
    }
    if (node.right) {
      queue.push(node.right)
      nextNum++
    }
    if (curNum === 0) {
      curNum = nextNum
      nextNum = 0
      result.push(row.slice())
      row = []
    }
  }
  return result
}

export { TreeNode, levelOrder }
