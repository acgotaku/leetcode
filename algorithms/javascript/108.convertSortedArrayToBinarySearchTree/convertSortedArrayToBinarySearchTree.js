// Source : https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/
// Author : acgotaku311
// Date   : 2020-10-25

/** ********************************************************************************
*
* Given an array where elements are sorted in ascending order, convert it to a height balanced BST.
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
const sortedArrayToBST = function (nums) {
  if (nums.length === 0) {
    return null
  }
  const len = nums.length
  const middle = Number.parseInt(len / 2)
  const node = new TreeNode(nums[middle])
  node.left = sortedArrayToBST(nums.slice(0, middle))
  node.right = sortedArrayToBST(nums.slice(middle + 1))
  return node
}

export { TreeNode, sortedArrayToBST }
