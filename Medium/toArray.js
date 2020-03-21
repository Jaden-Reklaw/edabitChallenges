/*
Write a function that converts an object into an array, where 
each element represents a key-value pair.

Examples
toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]

toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]

toArray({}) ➞ []
Notes
Return an empty array if the object is empty.
*/

function toArray(obj) {
	let array = [];
	for (let [key, value] of Object.entries(obj)) {
  	array.push([key, value]);
	}
	return array;
}

//Other way
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
const toArray = (obj) => Object.entries(obj);