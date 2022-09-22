// Find the longest increasing subsequence of a given array of integers, A.
// In other words, find a subsequence of array in which the subsequence’s elements are in strictly increasing order, and in which the subsequence is as long as possible.

// This subsequence is not necessarily contiguous, or unique.
// In this case, we only care about the length of the longest increasing subsequence.
// Input Format:
// The first and the only argument is an integer array A.
// Output Format:
// Return an integer representing the length of the longest increasing subsequence.
// Constraints:
// 1 <= length(A) <= 2500
// 1 <= A[i] <= 2000
// Example :
// Input 1:
//     A = [1, 2, 1, 5]
// Output 1:
//     3
// Explanation 1:
//     The sequence : [1, 2, 5]
// Input 2:
//     A = [0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15]
// Output 2:
//     6
// Explanation 2:
//     The sequence : [0, 2, 6, 9, 13, 15] or [0, 4, 6, 9, 11, 15] or [0, 4, 6, 9, 13, 15]
var assert = require('assert');

/**
 * Dynamic programming approach to find longest increasing subsequence.
 * Complexity: O(n * n)
 *
 * @param {number[]} arr
 * @return {number}
 */

function LISsolveDP(arr) {
  // Create an array for longest increasing substrings lengths and
  // fill it with 1s. This means that each element of the arr
  // is itself a minimum increasing subsequence.
  const lengthsArr = Array(arr.length).fill(1);

  let prevElIdx = 0;
  let currElIdx = 1;

  while (currElIdx < arr.length) {
    if (arr[prevElIdx] < arr[currElIdx]) {
      // If current element is bigger then the previous one. then
      // it is a part of increasing subsequence where length is
      // by 1 bigger then the length of increasing subsequence
      // for the previous element.
      const newLen = lengthsArr[prevElIdx] + 1;
      if (newLen > lengthsArr[currElIdx]) {
        // Increase only if previous element would give us a
        // bigger subsequence length then we already have for
        // current element.
        lengthsArr[currElIdx] = newLen;
      }
    }

    // Move previous element index right.
    prevElIdx += 1;

    // If previous element index equals to current element index then
    // shift current element right and reset previous element index to zero.
    if (prevElIdx === currElIdx) {
      currElIdx += 1;
      prevElIdx = 0;
    }
  }

  // Find the largest element in lengthsArr, as it
  // will be the biggest length of increasing subsequence.
  let longestIncreasingLength = 0;

  for (let i = 0; i < lengthsArr.length; i += 1) {
    if (lengthsArr[i] > longestIncreasingLength) {
      longestIncreasingLength = lengthsArr[i];
    }
  }

  return longestIncreasingLength;
}

try {
  assert.equal(LISsolveDP([1, 5, 2, 7, 3]), 3);

  console.log('PASSED: ' + '`LISsolveDP([1,5,2,7,3])` should return `3`');
} catch (err) {
  console.log(err);
}

try {
  assert.equal(LISsolveDP([13, 1, 3, 4, 8, 4]), 4);

  console.log('PASSED: ' + '`LISsolveDP([13,1,3,4,8,4])` should return `4`');
} catch (err) {
  console.log(err);
}

try {
  assert.equal(LISsolveDP([13, 1, 3, 4, 8, 19, 17, 8, 0, 20, 14]), 6);

  console.log(
    'PASSED: ' + '`LISsolveDP([13,1,3,4,8,19,17,8,0,20,14])` should return `6`'
  );
} catch (err) {
  console.log(err);
}
