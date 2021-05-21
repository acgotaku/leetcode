// Source : https://leetcode.com/problems/finding-pairs-with-a-certain-sum/
// Author : acgotaku311
// Date   : 2021-05-21

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 */
const FindSumPairs = function (nums1, nums2) {
  this.nums1 = nums1
  this.nums2 = nums2
  this.obj1 = {}
  this.obj2 = {}
  nums1.forEach(num1 => {
    if (this.obj1[num1]) {
      this.obj1[num1]++
    } else {
      this.obj1[num1] = 1
    }
  })
  nums2.forEach(num2 => {
    if (this.obj2[num2]) {
      this.obj2[num2]++
    } else {
      this.obj2[num2] = 1
    }
  })
}

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
FindSumPairs.prototype.add = function (index, val) {
  const oldNum = this.nums2[index]
  if (this.obj2[oldNum] === 1) {
    delete this.obj2[oldNum]
  } else {
    this.obj2[oldNum]--
  }
  this.nums2[index] += val
  const newNum = this.nums2[index]
  if (this.obj2[newNum]) {
    this.obj2[newNum]++
  } else {
    this.obj2[newNum] = 1
  }
}

/**
 * @param {number} tot
 * @return {number}
 */
FindSumPairs.prototype.count = function (tot) {
  let count = 0
  Object.keys(this.obj1).forEach(key => {
    const rest = tot - key
    if (rest > 0) {
      if (this.obj2[rest]) {
        count += this.obj2[rest] * this.obj1[key]
      }
    }
  })
  return count
}

/**
 * Your FindSumPairs object will be instantiated and called as such:
 * var obj = new FindSumPairs(nums1, nums2)
 * obj.add(index,val)
 * var param_2 = obj.count(tot)
 */
export { FindSumPairs }
