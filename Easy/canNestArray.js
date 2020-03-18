/*
Create a function that returns true if the first array can be nested inside the second.

arr1 can be nested inside arr2 if:

arr1's min is greater than arr2's min.
arr1's max is less than arr2's max.
Examples
canNest([1, 2, 3, 4], [0, 6]) ➞ true

canNest([3, 1], [4, 0]) ➞ true

canNest([9, 9, 8], [8, 9]) ➞ false

canNest([1, 2, 3, 4], [2, 3]) ➞ false
Notes
Note the strict inequality (see example #3).
*/

function canNest(arr1, arr2) {
	let maxArr1 = arr1[0];
	let minArr1 = arr1[0];
	let maxArr2 = arr2[0];
	let minArr2 = arr2[0];
	
	for(let i = 0; i < arr1.length; i++) {
		if(arr1[i] > maxArr1) {
			maxArr1 = arr1[i];
		} else if(arr1[i] < minArr1) {
			minArr1 = arr1[i];
		}
	}

	for(let i = 0; i < arr2.length; i++) {
		if(arr2[i] > maxArr2) {
			maxArr2 = arr2[i];
		} else if(arr2[i] < minArr2) {
			minArr2 = arr2[i];
		}
	}

	if(minArr1 > minArr2 && maxArr1 < maxArr2) {
		return true;
	} else {
		return false;
	}
}


//Researching Math.min and Math.max also new javascript syntax on arrays
//Other way to do the same thing
function canNest(arr1, arr2) {
	return Math.min(...arr1) > Math.min(...arr2) && Math.max(...arr1) < Math.max(...arr2);
}