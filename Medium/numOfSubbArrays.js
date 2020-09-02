/*
Number of Arrays in an Array
Return the total number of arrays inside a given array.

Examples
numOfSubbarrays([[1, 2, 3]]) ➞ 1

numOfSubbarrays([[1, 2, 3], [1, 2, 3], [1, 2, 3]]) ➞ 3

numOfSubbarrays([[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]]) ➞ 4

numOfSubbarrays([1, 2, 3]) ➞ 0
Notes
N/A
*/

//My answer
const numOfSubbarrays = arr => arr.filter(item => Array.isArray(item)).length;