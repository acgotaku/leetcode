// Source : https://leetcode.com/problems/repeated-dna-sequences/
// Author : acgotaku311
// Date   : 2021-03-15

/** ********************************************************************************
 *
 * All DNA is composed of a series of nucleotides abbreviated as A, C, G, and T,
 *
 * For example: "ACGAATTCCG".
 * When studying DNA, it is sometimes useful to identify repeated sequences within the DNA.
 *
 * Write a function to find all the 10-letter-long sequences (substrings) that
 * occur more than once in a DNA molecule.
 *
 * For example,
 *
 * Given s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT",
 *
 * Return:
 * ["AAAAACCCCC", "CCCCCAAAAA"].
 *
 *
 **********************************************************************************/

/**
 * @param {string} s
 * @return {string[]}
 */
const findRepeatedDnaSequences = function (s) {
  const res = new Set()
  const set = new Set()
  const len = 10
  for (let i = 0; i <= s.length - len; i++) {
    const key = s.substr(i, len)
    if (set.has(key) && !res.has(key)) {
      res.add(key)
    } else {
      set.add(key)
    }
  }
  return Array.from(res)
}
export { findRepeatedDnaSequences }
