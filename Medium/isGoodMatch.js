/*
Good Match?
In this challenge you will be given an array of numbers. Your task is to "marry" each pair of adjacent numbers by adding them, and return the array of "couples" (i.e. sums).

If the array has an odd length, one number is (sadly) left out, so you should return "bad match".

Examples
isGoodMatch([1, 2, 4, 7]) ➞ [1+2, 4+7] ➞ [3, 11]

isGoodMatch([5, 7, 9, -1, 4, 2]) ➞ [12, 8, 6]

isGoodMatch([5, 7, 9, -1, 4, 2, 3]) ➞ "bad match"

isGoodMatch([2, 6, 7, -2, 4]) ➞ "bad match"

Notes
N/A
*/

//My Answer
const isGoodMatch = arr => {
    let answer = [];
    if(arr.length % 2 === 1) {
      return 'bad match';
    }
      for(let i=0; i < arr.length; i++) {
      if(i % 2 === 1) {
        answer.push(arr[i] + arr[i-1]);
      }
    }
    return answer;
  }