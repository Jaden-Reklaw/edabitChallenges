/*
Create a function that returns true if two arrays contain 
identical values, and false otherwise.

To solve this question, your friend writes the following code:

function checkEquals(arr1, arr2) {
if (arr1 === arr2) {
  return true
 } else {
  return false
 }
}
But testing the code, you see that something is not quite right. 
Running the code yields the following results:

checkEquals([1, 2], [1, 3]) ➞ false
// Good so far...

checkEquals([1, 2], [1, 2]) ➞ false
// Yikes! What happened?
Rewrite your friend's code so that it correctly checks if two 
arrays are equal. The tests below should pass:

Examples
checkEquals([1, 2], [1, 3]) ➞ false

checkEquals([1, 2], [1, 2]) ➞ true

checkEquals([4, 5, 6], [4, 5, 6]) ➞ true

checkEquals([4, 7, 6], [4, 5, 6]) ➞ false
Notes
Hint: This has to do with value vs. reference types.
*/
function checkEquals(arr1, arr2) {
	if (arr1.length === arr2.length) {
		for(let i = 0; i < arr1.length; i++) {
			if(arr1[i] !== arr2[i]) {
				return false;
			}
		}
  	return true; 
  } else {
  	return false;
  }
}

//Other ways
//Genius to use toString or JSON.stringify to turn the array into a string then compare them
function checkEquals(arr1, arr2) {
	return arr1.toString() == arr2.toString();
}

function checkEquals(arr1, arr2) {
	if (JSON.stringify(arr1) === JSON.stringify(arr2)) {
  	return true 
  } else {
  	return false
  }
}

//What is every
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
function checkEquals(arr1, arr2) {
	return arr1.every((element, index) => element == arr2[index]);
}

//Understand this code for the index
function isBigEnough(element, index, array) {
	console.log('index is', index);
  return element >= 10;
}
[12, 5, 8, 130, 44].every(isBigEnough); //false
[12, 54, 18, 130, 44].every(isBigEnough); //true

