/*
I'm trying to write a function to flatten an array of subarrays into one array. (Suppose I am unware there is a .flat() method in the Array prototype). In other words, I want to transform this: [[1, 2], [3, 4]] into [1, 2, 3, 4].

Here is my code:

function flatten(arr) {
  arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    arr2.concat(arr[i]);
  }
  return arr2;
}
But...it doesn't seem to be working! Fix my code so that it correctly flattens the array.

Examples
flatten([[1, 2], [3, 4]]) ➞ []
// Expected: [1, 2, 3, 4]

flatten([["a", "b"], ["c", "d"]]) ➞ []
// Expected: ["a", "b", "c", "d"]

flatten([[true, false], [false, false]]) ➞ []
// Expected: [true, false, false, false]

*/

function flatten(arr) {
  arr2 = [];
  for (let i = 0; i < arr.length; i++) {
		for(let j = 0; j <arr[i].length; j++) {
			arr2.push(arr[i][j]);
		}
  }
  return arr2; 
}

//Other way super fast way using the ... operator on array
//... or spread operator will return each array one at a 
//time then concat method will add to the empty array
//then it will return
function flatten(arr) {		
	return [].concat(...arr)  
}

//Understand this for the spread operator
function f(x, y, z) { console.log(x,y,z)}
var args = [0, 1, 2];
f(...args);


