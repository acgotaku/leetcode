// Source : https://leetcode.com/problems/binary-search-tree-iterator/
// Author : acgotaku311
// Date   : 2021-03-12

/** ********************************************************************************
 *
 * Implement an iterator over a binary search tree (BST). Your iterator will be initialized with the root node of a BST.
 *
 * Calling next() will return the next smallest number in the BST.
 *
 * Note: next() and hasNext() should run in average O(1) time and uses O(h) memory, where h is the height of the tree.
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
 */
const BSTIterator = function (root) {
  this.nodes = []
  const inorder = (node) => {
    if (node) {
      inorder(node.left)
      this.nodes.push(node.val)
      inorder(node.right)
    }
  }
  inorder(root)
}

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
  return this.nodes.shift()
}

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
  return this.nodes.length > 0
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
export { TreeNode, BSTIterator }
