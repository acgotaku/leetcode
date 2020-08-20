// Source : https://leetcode.com/problems/simplify-path/
// Author : acgotaku311
// Date   : 2020-08-20

/** ********************************************************************************
*
* Given an absolute path for a file (Unix-style), simplify it.
*
* For example,
* path = "/home/", => "/home"
* path = "/a/./b/../../c/", => "/c"
*
*
* Corner Cases:
*
* Did you consider the case where path = "/../"?
* In this case, you should return "/".
* Another corner case is the path might contain multiple slashes '/' together, such as "/home//foo/".
* In this case, you should ignore redundant slashes and return "/home/foo".
*
*
**********************************************************************************/

/**
 * @param {string} path
 * @return {string}
 */
const simplifyPath = function (path) {
  const stack = []
  const arr = path.split('/')
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i]
    if (current === '..') {
      stack.pop()
    } else if (current !== '.' && current.length > 0) {
      stack.push(current)
    }
  }

  return '/' + stack.join('/')
}

export { simplifyPath }
