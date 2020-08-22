/*
Max Adjacent Product
Given an array of integers, find the pair of adjacent elements 
that have the largest product and return that product.

Examples
adjacentProduct([3, 6, -2, -5, 7, 3] ) ➞ 21

adjacentProduct([5, 6, -4, 2, 3, 2, -23]) ➞ 30

adjacentProduct([0, -1, 1, 24, 1, -4, 8, 10]) ➞ 80
Notes
Each array has at least two elements.
*/

//My answer
const adjacentProduct = arr => {
    const products = arr.map((num, i) => !Number.isNaN(num * arr[i + 1]) ? num * arr[i + 1] : 0);
    products.pop();
    return Math.max(...products);
}

//Other solution slice somehow removes the last item in the array
const adjacentProduct = arr => Math.max(...arr.slice(1).map((num,i) => num * arr[i]));
