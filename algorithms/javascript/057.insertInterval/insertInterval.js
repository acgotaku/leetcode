// Source : https://leetcode.com/problems/insert-interval/
// Author : acgotaku311
// Date   : 2020-08-13

/** ********************************************************************************
*
* Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).
*
* You may assume that the intervals were initially sorted according to their start times.
*
* Example 1:
* Given intervals [1,3],[6,9], insert and merge [2,5] in as [1,5],[6,9].
*
* Example 2:
* Given [1,2],[3,5],[6,7],[8,10],[12,16], insert and merge [4,9] in as [1,2],[3,10],[12,16].
*
* This is because the new interval [4,9] overlaps with [3,5],[6,7],[8,10].
*
*
**********************************************************************************/

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
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

const insert = (intervals, newInterval) => {
  intervals = intervals.concat(newInterval)
  return merge(intervals)
}

export { Interval, insert }
