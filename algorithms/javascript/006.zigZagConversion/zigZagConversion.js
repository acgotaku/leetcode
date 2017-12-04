// Source : https://leetcode.com/problems/zigzag-conversion/#/description
// Author : acgotaku311
// Date   : 2017-07-15

/**********************************************************************************
*
* The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this:
* (you may want to display this pattern in a fixed font for better legibility)
*
* P   A   H   N
* A P L S I I G
* Y   I   R
*
* And then read line by line: "PAHNAPLSIIGYIR"
*
* Write the code that will take a string and make this conversion given a number of rows:
*
* string convert(string text, int nRows);
*
* convert("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR".
*
* This is the zigzag pattern
* Δ=2n-2    1                           2n-1                         4n-3
* Δ=        2                     2n-2  2n                    4n-4   4n-2
* Δ=        3               2n-3        2n+1              4n-5       .
* Δ=        .           .               .               .            .
* Δ=        .       n+2                 .           3n               .
* Δ=        n-1 n+1                     3n-3    3n-1                 5n-5
* Δ=2n-2    n                           3n-2                         5n-4

**********************************************************************************/

export default function convert (s, numRows) {
  let pos = 0
  const len = s.length
  let result = ''
  let step1 = 0
  let step2 = 0
  if (numRows === 1) {
    return s
  }
  for (let i = 0; i < numRows; i++) {
    step1 = (numRows - i - 1) * 2
    step2 = i * 2
    pos = i
    if (pos < len) {
      result = result + s[pos]
    }
    while (true) {
      pos += step1
      if (pos >= len) {
        break
      }
      if (step1) {
        result = result + s[pos]
      }
      pos += step2
      if (pos >= len) {
        break
      }
      if (step2) {
        result = result + s[pos]
      }
    }
  }
  return result
};
