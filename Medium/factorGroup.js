/*
Even or Odd Number of Factors
Create a function that returns "even" if a number has an even number of factors and "odd" if a number has an odd number of factors.

Examples
factorGroup(33) ➞ "even"

factorGroup(36) ➞ "odd"

factorGroup(7) ➞ "even"
Notes
You don't need to actually calculate the factors to solve this problem.
Think about why a number would have an odd number of factors.
Reference
https://www.geeksforgeeks.org/number-elements-odd-factors-given-range/#:~:text=Only%20those%20numbers%2C%20which%20are,an%20odd%20number%20of%20factors.&text=16%20also%20has%20odd%20number,makes%20the%20total%20as%20odd.
*/

//My Answer
const factorGroup = num => Math.floor(Math.sqrt(num))**2 === num ? 'odd' : 'even';

//Dude that knows the language extremely well 
function factorGroup(num) {
	return ~~Math.sqrt(num) === Math.sqrt(num) ? "odd" : "even";
}

//Dude that is good at Math
const factorGroup = n => n**0.5 % 1 ? 'even' : 'odd';

//Using isInteger method
const factorGroup = num => Number.isInteger(Math.sqrt(num)) ? 'odd' : 'even';