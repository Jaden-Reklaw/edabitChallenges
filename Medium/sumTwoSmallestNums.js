/*
Return the Sum of the Two Smallest Numbers
Create a function that takes an array of numbers 
and returns the sum of the two lowest positive 
numbers.

Examples
sumTwoSmallestNums([19, 5, 42, 2, 77]) ➞ 7

sumTwoSmallestNums([10, 343445353, 3453445, 3453545353453]) ➞ 3453455

sumTwoSmallestNums([2, 9, 6, -1]) ➞ 8

sumTwoSmallestNums([879, 953, 694, -847, 342, 221, -91, -723, 791, -587]) ➞ 563

sumTwoSmallestNums([3683, 2902, 3951, -475, 1617, -2385]) ➞ 4519

Notes
Don't count negative numbers.
Floats and empty arrays will not be used in any 
of the test cases.
*/

//My answer
const sumTwoSmallestNums = (arr) => {
	const arrangedArr = arr.filter(num => num >= 0).sort(function(a, b){return a-b});
  return arrangedArr[0] + arrangedArr[1];
};

//Other answer
function sumTwoSmallestNums(arr) {
    return arr.filter((item) => item >= 0)
      .sort((a, b) => a - b)
      .slice(0, 2)
      .reduce((acc, item) => acc + item);
  }