/*
Balancing Scales
Given an array with an odd number of elements, return whether the scale will tip "left" or "right" based on the sum of the numbers. The scale will tip on the direction of the largest total. If both sides are equal, return "balanced".

Examples
scaleTip([0, 0, "I", 1, 1]) ➞ "right"
0 < 2 so it will tip right

scaleTip([1, 2, 3, "I", 4, 0, 0]) ➞ "left"
6 > 4 so it will tip left

scaleTip([5, 5, 5, 0, "I", 10, 2, 2, 1]) ➞ "balanced"
15 = 15 so it will stay balanced

Notes
The middle element will always be "I" so you can just ignore it.
Assume the numbers all represent the same unit.
Both sides will have the same number of elements.
There are no such things as negative weights in both real life and the tests!
 */

//My answer
const scaleTip = arr => {
    const center = arr.indexOf('I');
    const left = arr.slice(0, center).reduce((acc, i) => acc + i);
    const right = arr.slice(center + 1, arr.length).reduce((acc, i) => acc + i);
  
    return left === right ? 'balanced' : left > right ? 'left' : 'right';
}

// Other solution
const scaleTip = arr => {
	const sum = a => a.reduce((a,b) => a + b, 0),
				lft = sum(arr.slice(0, arr.length / 2)),
				rgt = sum(arr.slice(arr.length / 2 + 1));
	return ["left", "right", "balanced"]
				 [[lft > rgt, rgt > lft, true].indexOf(true)];
}