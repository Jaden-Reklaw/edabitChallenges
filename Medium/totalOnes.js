/*
Count Ones in Binary Representation of Integer

Count the amount of ones in the binary representation of an integer. So for example, since 12 is '1100' in binary, the return value should be 2.

Examples
countOnes(0) ➞ 0

countOnes(100) ➞ 3

countOnes(999) ➞ 8
Notes
The input will always be a valid integer (number).

*/

let countOnes = (i) => {
	let totalOnes = 0;
	let binary = i.toString(2);

	for(let num of binary) {
		if(num === '1') {
			totalOnes += 1;
		}
	}
	return totalOnes;
}

//Other solution using filter and split method then taking the length of the 1s as count
function countOnes(i) {
  return i.toString(2).split('').filter((c)=>c==1).length
}