// Source : https://leetcode.com/problems/unique-binary-search-trees-ii/
// Author : acgotaku311
// Date   : 2020-09-16

/** ********************************************************************************
*
* Given n, generate all structurally unique BST's (binary search trees) that store values 1...n.
*
* For example,
* Given n = 3, your program should return all 5 unique BST's shown below.
*
*    1         3     3      2      1
*     \       /     /      / \      \
*      3     2     1      1   3      2
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
 * @param {number} n
 * @return {TreeNode[]}
 */
const generateTrees = function (n) {
  const BST = (start, end) => {
    const arr = []
    if (start > end || end <= 0 || start <= 0) {
      arr.push(null)
      return arr
    }
    if (start === end) {
      const node = new TreeNode(start)
      arr.push(node)
      return arr
    }
    for (let i = start; i <= end; i++) {
      const left = BST(start, i - 1)
      const right = BST(i + 1, end)
      for (let l = 0; l < left.length; l++) {
        for (let r = 0; r < right.length; r++) {
          const node = new TreeNode(i)
          node.left = left[l]
          node.right = right[r]
          arr.push(node)
        }
      }
    }
    return arr
  }
  if (n === 0) {
    return []
  }
  return BST(1, n)
}

export { TreeNode, generateTrees }
