/*
Write a function that takes an integer i and returns an integer with 
the integer backwards followed by the original integer.

To illustrate:

123
We reverse 123 to get 321 and then add 123 to the end, resulting in 
321123.

Examples
reverseAndNot(123) ➞ 321123

reverseAndNot(123456789) ➞ 987654321123456789
*/

const reverseAndNot = (i) => Number(i.toString().split("").reverse().join("") + i);

//Other way

const reverseAndNot = n => +([...''+n].reverse().join('') + n);