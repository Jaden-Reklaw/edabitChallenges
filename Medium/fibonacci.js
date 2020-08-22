/*
The Fibonacci Number
Create a function that, given a number, returns the corresponding Fibonacci number.

Examples
fibonacci(3) ➞ 3

fibonacci(7) ➞ 21

fibonacci(12) ➞ 233

Notes
The first number in the sequence starts at 1 (not 0).
Reference
https://medium.com/developers-writing/fibonacci-sequence-algorithm-in-javascript-b253dc7e320e
*/

//My answer
const fibonacci = num => num <= 1 ? 1 : fibonacci(num - 1) + fibonacci(num - 2);

//Other solution
function fibonacci(num){
    let a = 1, b = 0, temp;
  
    while (num >= 0){
      temp = a;
      a = a + b;
      b = temp;
      num--;
    }
  
    return b;
  }