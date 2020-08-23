/*
Balanced Array
Given an array of unknown length, but with an even amount 
of elements (numbers), copy the half with the highest sum 
of numbers to the other half of the array. If the sum of 
the first half equals the sum of the second half, return 
the original array.

Examples
balanced([1, 2, 4, 6, 3, 1]) ➞ [6, 3, 1, 6, 3, 1]

balanced([88, 3, 27, 5, 9, 0, 13, 10]) ➞ [88, 3, 27, 5, 88, 3, 27, 5]

balanced([7, 5, 2, 6, 1, 0, 1, 5, 2, 7, 0, 6]) ➞ [7, 5, 2, 6, 1, 0, 1, 5, 2, 7, 0, 6]
Notes
Each array has an even amount of elements.
*/

//My answer
const balanced = arr => {
    let rightSide = arr.map(item => item);
    let leftSide = rightSide.splice(0, arr.length/2);
    
    if(leftSide.reduce((acc,i) => acc + i) === rightSide.reduce((acc,i) => acc + i)) {
      return arr;
    } else if(leftSide.reduce((acc,i) => acc + i) > rightSide.reduce((acc,i) => acc + i)) {
      return leftSide.concat(leftSide);
    } else {
      return rightSide.concat(rightSide);
    }
}

//Other solution