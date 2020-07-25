/**
 Total Volume
 Given an array of boxes, create a function that returns the 
 total volume of all those boxes combined together. A box is 
 represented by an array with three elements: length, width 
 and height.

For instance, totalVolume([2, 3, 2], [6, 6, 7], [1, 2, 1]) 
should return 266 since (2 x 3 x 2) + (6 x 6 x 7) + 
(1 x 2 x 1) = 12 + 252 + 2 = 266.

Examples
totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]) ➞ 63

totalVolume([2, 2, 2], [2, 1, 1]) ➞ 10

totalVolume([1, 1, 1]) ➞ 1
Notes
You will be given at least one box.
Each box will always have three dimensions included.
 */

 //O(n^2) solution
let totalVolume = (...boxes) =>  {
	let total = 0;

  for(let arr of boxes) {
    let volume = 1;
    for(let dimension of arr) {
      volume *= dimension
    }
    total += volume; 
  }
  return total;
}

totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]);


//O(n) better solution they destruct length width and height with [l,w,h]
const totalVolume = (...boxes) => boxes.reduce((total, [l, w, h]) => {total + l * w * h, 0);

//Resource
//https://dev.to/sarah_chima/destructuring-assignment---arrays-16f