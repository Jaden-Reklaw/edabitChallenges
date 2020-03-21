/*
Write a function redundant that takes in a string 
str and returns a function that returns str.

Examples
const f1 = redundant("apple")
f1() ➞ "apple"

const f2 = redundant("pear")
f2() ➞ "pear"

const f3 = redundant("")
f3() ➞ ""
Notes
Your function should return a function, not a string.

Resources: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
*/

function redundant(str) {
	return function () {
		return str;
	}
}

//Another way
const redundant = (str) => () => str;

