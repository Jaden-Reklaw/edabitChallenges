/*
Odd Up, Even Down — N Times
Create a function that performs an even-odd transform to an array, n times. Each even-odd transformation:

Adds two (+2) to each odd integer.
Subtracts two (-2) to each even integer.
Examples
evenOddTransform([3, 4, 9], 3) ➞ [9, -2, 15]
Since [3, 4, 9] => [5, 2, 11] => [7, 0, 13] => [9, -2, 15]

evenOddTransform([0, 0, 0], 10) ➞ [-20, -20, -20]

evenOddTransform([1, 2, 3], 1) ➞ [3, 0, 5]

Notes
N/A
*/

//My answer did not need to use Math.abs with minus to make negative
const evenOddTransform = (arr, n) => arr.map(item => item % 2 ? item + (n * 2) : -Math.abs(n * 2) + item);

//Other answer
const evenOddTransform = (arr, n) => arr.map(x=>(x%2==0)?x-2*n:x+2*n);
