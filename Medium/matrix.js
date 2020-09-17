/*
Return an Array of Subarrays
Write a function that takes three arguments (x, y, z) and returns an array containing x subarrays (e.g. [[], [], []]), each containing y number of item z.

x Number of subarrays contained within the main array.
y Number of items contained within each subarray.
z Item contained within each subarray.
Examples
matrix(3, 2, 3) ➞ [[3, 3], [3, 3], [3, 3]]

matrix(2, 1, "edabit") ➞ [["edabit"], ["edabit"]]

matrix(3, 2, 0) ➞ [[0, 0], [0, 0], [0, 0]]

Notes
The first two arguments will always be integers.
The third argument is either a string or an integer.
*/

//My Answer
const matrix = (x, y, z) => {
    const answer = [];
      for(let i=0; i<x; i++) {
      let arr = [];
      for(let j=0; j<y; j++) {
        arr.push(z);
      }
      answer.push(arr);
    }
    return answer;
  }

  //Other solution
const matrix = (x, y, z) => Array(x).fill(Array(y).fill(z));
