// Source : https://leetcode.com/problems/house-robber/
// Author : acgotaku311
// Date   : 2021-03-18

/** ********************************************************************************
 *
 * Given a binary tree, imagine yourself standing on the right side of it, return
 * the values of the nodes you can see ordered from top to bottom.
 *
 * For example:
 * Given the following binary tree,
 *
 *      1            <---
 *    /   \
 *   2     3         <---
 *    \     \
 *     5     4       <---
 *
 * You should return [1, 3, 4].
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
 * @return {number[]}
 */
const rightSideView = function (root) {
  const dict = {}
  let maxLevel = -1
  if (!root) {
    return []
  }
  const stack = [{ node: root, level: 0 }]
  while (stack.length > 0) {
    const { node, level } = stack.pop()
    if (node) {
      maxLevel = Math.max(level, maxLevel)
      if (!dict[level]) {
        dict[level] = node.val
      }
      stack.push({
        node: node.left,
        level: level + 1
      })
      stack.push({
        node: node.right,
        level: level + 1
      })
    }
  }
  const nums = []
  for (let i = 0; i <= maxLevel; i++) {
    nums.push(dict[i])
  }
  return nums
}
export { rightSideView, TreeNode }
