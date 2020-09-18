// Source : https://leetcode.com/problems/recover-binary-search-tree/
// Author : acgotaku311
// Date   : 2020-09-18

/** ********************************************************************************
*
* Two elements of a binary search tree (BST) are swapped by mistake.
*
* Recover the tree without changing its structure.
*
* Note:
* A solution using O(n) space is pretty straight forward. Could you devise a constant space solution?
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
const recoverTree = function (root) {
  let prev = null
  let p = null
  let q = null
  const findMissing = (node) => {
    if (node) {
      findMissing(node.left)
      if (prev) {
        if (prev.val > node.val) {
          if (p === null) {
            p = prev
          }
          q = node
        }
      }
      prev = node
      findMissing(node.right)
    }
  }

  findMissing(root)
  if (p && q) {
    [p.val, q.val] = [q.val, p.val]
  }
}

export { TreeNode, recoverTree }
