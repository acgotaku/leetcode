// Source : https://leetcode.com/problems/course-schedule/
// Author : acgotaku311
// Date   : 2021-04-03

/** ********************************************************************************
 *
 * Reverse a singly linked list.
 *
 * click to show more hints.
 *
 * Hint:
 * A linked list can be reversed either iteratively or recursively. Could you implement both?
 *
 *
 **********************************************************************************/

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
const canFinish = function (numCourses, prerequisites) {
  const dict = {}
  let valid = true
  const visited = {}
  for (let i = 0; i < prerequisites.length; i++) {
    const dep = prerequisites[i]
    const course = dep[0]
    const needCourse = dep[1]
    if (dict[course]) {
      dict[course].push(needCourse)
    } else {
      dict[course] = [needCourse]
    }
  }

  const dfs = (index) => {
    visited[index] = 1
    if (dict[index]) {
      const deps = dict[index]
      for (let i = 0; i < deps.length; i++) {
        const dep = deps[i]
        if (visited[dep] === undefined) {
          dfs(dep)
          if (!valid) {
            return
          }
        } else if (visited[dep] === 1) {
          valid = false
          return
        }
      }
    }
    visited[index] = 2
  }

  for (let i = 0; i < numCourses; i++) {
    if (!visited[i]) {
      dfs(i)
    }
  }

  return valid
}

export { canFinish }
