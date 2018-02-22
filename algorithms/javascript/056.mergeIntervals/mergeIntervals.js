// Source : https://leetcode.com/problems/merge-intervals/description/
// Author : acgotaku311
// Date   : 2018-02-22

/**********************************************************************************
*
* Given a collection of intervals, merge all overlapping intervals.
*
* For example,
* Given [1,3],[2,6],[8,10],[15,18],
* return [1,6],[8,10],[15,18].
*
*
**********************************************************************************/

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */

function Interval (start, end) {
  this.start = start
  this.end = end
}
const merge = (intervals) => {
  intervals = intervals.sort((a, b) => {
    return a.start - b.start
  })
  const result = []

  for (let i = 0; i < intervals.length; i++) {
    if (result.length === 0 || result[result.length - 1].end < intervals[i].start) {
      result.push(intervals[i])
    } else {
      result[result.length - 1].end = Math.max(result[result.length - 1].end, intervals[i].end)
    }
  }
  return result
}

export { Interval, merge }
