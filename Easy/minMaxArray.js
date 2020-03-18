/*
Create a function that takes an array of numbers and return 
both the minimum and maximum numbers, in that order.

Examples
minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

minMax([2334454, 5]) ➞ [5, 2334454]

minMax([1]) ➞ [1, 1]
Notes
All test arrays will have at least one element and are valid.
*/

function minMax(arr) {
	let min = arr[0];
	let max = arr[0];
	
	for(let item of arr) {
		if(max < item) {
			max = item;
		}
		if(min > item) {
			min = item
		}
	}
	return [min, max];
}

//Other way using Math min and max methods
function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}






