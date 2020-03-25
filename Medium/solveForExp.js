/*
Create a function that takes a number a and finds the 
missing exponent x so that a when raised to the power 
of x is equal to b.

Examples
solveForExp(4, 1024) ➞ 5

solveForExp(2, 1024) ➞ 10

solveForExp(9, 3486784401) ➞ 10
Notes
a is raised to the power of what in order to equal b?

Resources
Math.log
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/log
Math.rouhd
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
*/

let solveForExp = (a, b) => Math.round(Math.log(b) / Math.log(a));