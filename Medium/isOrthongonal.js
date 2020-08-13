/*
Orthogonal Vector
Create a function that takes two vectors as arrays and checks if the two vectors are orthogonal or not. The return value is boolean. Two vectors a and b are orthogonal if their dot product is equal to zero.

Examples
isOrthogonal([1, 2], [2, -1]) ➞ true

isOrthogonal([3, -1], [7, 5]) ➞ false

isOrthogonal([1, 2, 0], [2, -1, 10]) ➞ true
Notes
The two arrays will be of same length.
*/

function isOrthogonal(arr1, arr2) {
	let sum=0
	for(let i=0;i<arr1.length;i++){
		sum+=(arr1[i] *arr2[i]);
	}
	return sum ==0;
}