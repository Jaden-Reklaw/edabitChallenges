/*
Finding Common Elements
Create a function that takes two "sorted" arrays 
of numbers and returns an array of numbers which 
are common to both the input arrays.

Examples
commonElements([-1, 3, 4, 6, 7, 9], [1, 3]) ➞ [3]

commonElements([1, 3, 4, 6, 7, 9], [1, 2, 3, 4, 7, 10]) ➞ [1, 3, 4, 7]

commonElements([1, 2, 2, 2, 3, 4, 5], [1, 2, 4, 5]) ➞ [1, 2, 4, 5]

commonElements([1, 2, 3, 4, 5], [10, 12, 13, 15]) ➞ []

Notes
Arrays are Sorted!! Try doing this problem with 
O(n + m) time complexity
*/

//My answer
const commonElements = (arr1, arr2) => [...new Set(arr1.filter(item => arr2.includes(item)))];

//Other answer
const commonElements = (...arrays) => {
	let [small, big] = arrays.sort((a, b) => a.length - b.length);
	let arr = [];

	for (const e of small) {
		const i = big.findIndex(n => n >= e);
		if (!~i) break;
		if (big[i] === e) {
			arr.push(e);
			big = big.slice(i + 1);
		} else {
			big = big.slice(i);
		}
	}
	
	return arr;
};
