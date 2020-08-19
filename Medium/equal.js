/*
Equality of 3 Values
Create a function that takes three integer arguments (a, b, c) and returns the amount of integers which are of equal value.

Examples
equal(3, 4, 3) ➞ 2

equal(1, 1, 1) ➞ 3

equal(3, 4, 1) ➞ 0

Notes
Your function must return 0, 2 or 3.
*/

//My Code
const equal = (a, b, c) => {
	if(a === b && a === c) {
		return 3;
	} else if(a === b) {
		return 2;
	}else if(a === c) {
		return 2;
	} else if(b === c) {
		return 2;
	} else {
		return 0;
	}
}

//Other mathematical approach
const equal = (a, b, c) => {
	const size = (new Set([a, b, c])).size;
	return size === 3 ? 0 : 4 - size;
}