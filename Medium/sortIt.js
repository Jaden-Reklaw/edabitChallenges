/*
Sort the Unsortable
In this challenge you will be given an array similar to the following:

[[3], 4, [2], [5], 1, 6]
In words, elements of the array are either an integer or an array containing 
a single integer. We humans can clearly see that this array can reasonably 
be sorted according to "the content of the elements" as:

[1, [2], [3], 4, [5], 6]
Create a function that, given an array similar to the above, sorts the array 
according to the "content of the elements".

Examples
sortIt([4, 1, 3]) ➞ [1, 3, 4]

sortIt([[4], [1], [3]]) ➞ [[1], [3], [4]]

sortIt([4, [1], 3]) ➞ [[1], 3, 4]

sortIt([[4], 1, [3]]) ➞ [1, [3], [4]]

sortIt([[3], 4, [2], [5], 1, 6]) ➞ [1, [2], [3], 4, [5], 6]

Notes
To reiterate, elements of the array will be either 
integers or arrays with a single integer.
*/

const sortIt = arr => arr.sort((a, b) => {
    if(Array.isArray(a) && Array.isArray(b)) {
      return a[0]-b[0];
    } else if(Array.isArray(a)) {
      return a[0]-b;
    } else if(Array.isArray(b)) {
      return a-b[0];
    } else {
      return a-b;
    }
  });

//Other answer not sure how this works
const sortIt = arr => arr.sort((a, b) => a - b);

//This makes more sense
const sortIt =(arr) => arr.sort((a, b) =>[a].flat(Infinity)[0] - [b].flat(Infinity)[0]);

