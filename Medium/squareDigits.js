/*
Square Every Digit
Create a function that squares every digit of a number.

Examples
squareDigits(9119) ➞ 811181

squareDigits(2483) ➞ 416649

squareDigits(3212) ➞ 9414
Notes
The function receives an integer and must return an integer.
*/

//My Answer
const squareDigits = n => Number(String(n).split('').map(num => String(num**2)).join(''));

//Other answer I don't understand the plus but if you remove it the return is a string and not a number
//its like its + makes it a number like using the Number function
const squareDigits = n => +[...String(n)].map(x => x*x).join('');