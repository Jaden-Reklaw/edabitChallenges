/**
 * How much is true?
 * Create a function which returns the number of 
 * true values there are in an array.

Examples
countTrue([true, false, false, true, false]) ➞ 2

countTrue([false, false, false, false]) ➞ 0

countTrue([]) ➞ 0
Notes
Return 0 if given an empty array.
All array items are of the type bool (true or false).
 */

//My Solution
let countTrue = (arr) => {
	 return arr.filter(element => element === true).length;
}

//Other solution not sure how this works but it returns the trues from the array
const count_true = r => r.filter(Boolean).length