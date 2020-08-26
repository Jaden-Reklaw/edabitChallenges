/*
Number to Reversed Array
Create a function that takes a number and returns an array with 
the digits of the number in reverse order.

Examples
reverseArr(1485979) ➞ [9, 7, 9, 5, 8, 4, 1]

reverseArr(623478) ➞ [8, 7, 4, 3, 2, 6]

reverseArr(12345) ➞ [5, 4, 3, 2, 1]
Notes
N/A
*/

//My answer
const reverseArr = num => String(num).split('').reverse().map(item => Number(item));


//Other solution I didn't think you could make it smaller
const reverseArr = n => [...String(n)].map(Number).reverse();